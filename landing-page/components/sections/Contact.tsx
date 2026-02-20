'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './Contact.module.css';

interface ContactFormProps {
  onSuccess: () => void;
}

function ContactForm({ onSuccess }: ContactFormProps) {
  const blank = { fname: '', lname: '', email: '', phone: '', service: '', message: '' };
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fname.trim()) e.fname = 'Required';
    if (!form.lname.trim()) e.lname = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Required';
    else if (form.message.trim().length < 10) e.message = 'Please provide a bit more detail';
    return e;
  };

  const submit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ _form: data.error ?? 'Submission failed. Please try again.' });
        }
        setStatus('idle');
        return;
      }
      setStatus('done');
      onSuccess();
      setForm(blank);
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setErrors({ _form: 'Network error. Please check your connection and try again.' });
      setStatus('idle');
    }
  };

  return (
    <div className={styles.form}>
      <h3>Send Us a Message</h3>
      <p className={styles.formSub}>We&apos;ll respond within one business day.</p>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            type="text"
            value={form.fname}
            onChange={update('fname')}
            placeholder="Jane"
            className={errors.fname ? styles.error : ''}
          />
          {errors.fname && <span className={styles.errorMsg}>{errors.fname}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            type="text"
            value={form.lname}
            onChange={update('lname')}
            placeholder="Smith"
            className={errors.lname ? styles.error : ''}
          />
          {errors.lname && <span className={styles.errorMsg}>{errors.lname}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="jane@company.com"
            className={errors.email ? styles.error : ''}
          />
          {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Service Interested In</label>
        <select
          id="service"
          value={form.service}
          onChange={update('service')}
          className={errors.service ? styles.error : ''}
        >
          <option value="">Select a service…</option>
          <option value="bookkeeping">Bookkeeping</option>
          <option value="taxes">Tax Services</option>
          <option value="webdev">Web Development</option>
          <option value="consultation">Business Consultation</option>
          <option value="multiple">Multiple Services</option>
          <option value="unsure">Not Sure Yet</option>
        </select>
        {errors.service && <span className={styles.errorMsg}>{errors.service}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">How Can We Help?</label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your situation…"
          className={errors.message ? styles.error : ''}
        />
        {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
      </div>

      {errors._form && (
        <p className={styles.formError}>{errors._form}</p>
      )}

      <Button
        variant="navy"
        onClick={status === 'idle' ? submit : undefined}
        disabled={status === 'loading'}
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '0.9rem',
          fontSize: '1rem',
          fontWeight: 600,
          background: status === 'done' ? 'var(--green)' : undefined,
        }}
      >
        {status === 'loading' && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={{ animation: 'spin 0.9s linear infinite', flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" />
            <path d="M12 3a9 9 0 019 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}
        {status === 'idle' && 'Send Message'}
        {status === 'loading' && 'Sending…'}
        {status === 'done' && "✓ Sent! We'll be in touch soon."}
        {status === 'idle' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Button>
    </div>
  );
}

export function Contact({ onSuccess }: { onSuccess: () => void }) {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <p className={styles.label}>Contact Us</p>
        <div className={styles.rule} />
        <h2 className={styles.heading}>Let&apos;s Work Together.</h2>

        <div className={styles.layout}>
          <div className={styles.info}>
            <p>
              Whether you have a quick question, are ready to start a project, or just want to explore your
              options — we&apos;d love to hear from you. Expect a warm, prompt response.
            </p>

            <div className={styles.item}>
              <div className={styles.icon}>📧</div>
              <div>
                <strong>Email Us</strong>
                <span>your@email.com</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>💬</div>
              <div>
                <strong>WhatsApp</strong>
                <span>Message us for the fastest response</span>
              </div>
            </div>

            <button
              className={styles.whatsapp}
              onClick={() => window.open('https://wa.me/1XXXXXXXXXX', '_blank')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message on WhatsApp
            </button>

            <div className={styles.item} style={{ marginTop: '1.5rem' }}>
              <div className={styles.icon}>🕐</div>
              <div>
                <strong>Office Hours</strong>
                <span>Mon – Fri: 9 AM – 6 PM</span>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>📍</div>
              <div>
                <strong>Location</strong>
                <span>Serving our local community &amp; remote clients nationwide</span>
              </div>
            </div>
          </div>

          <ContactForm onSuccess={onSuccess} />
        </div>
      </div>
    </section>
  );
}
