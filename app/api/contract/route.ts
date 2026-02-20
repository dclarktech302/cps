import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter (resets on server restart / per serverless
// instance — sufficient for a low-traffic landing page).
// Node.js is single-threaded so Map mutations within one process are safe.
// For multi-instance / serverless deployments replace with a shared store
// such as Upstash Redis.
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 5;          // max requests per window
const RATE_LIMIT_WINDOW = 60_000;  // 1 minute in ms

const ipMap = new Map<string, { count: number; resetAt: number }>();

// getClientIp reads the standard forwarded-for headers.
// On Vercel, x-forwarded-for is set by Vercel's edge infrastructure and
// cannot be spoofed by clients.  If you deploy behind a different proxy,
// ensure these headers are only set by trusted upstream infrastructure.
function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
const VALID_SERVICES = new Set([
  'bookkeeping',
  'taxes',
  'webdev',
  'consultation',
  'multiple',
  'unsure',
]);

function validate(data: Record<string, unknown>): Record<string, string> {
  const errors: Record<string, string> = {};

  const fname = typeof data.fname === 'string' ? data.fname.trim() : '';
  const lname = typeof data.lname === 'string' ? data.lname.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const service = typeof data.service === 'string' ? data.service : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';

  if (!fname) errors.fname = 'Required';
  else if (fname.length > 100) errors.fname = 'Too long';

  if (!lname) errors.lname = 'Required';
  else if (lname.length > 100) errors.lname = 'Too long';

  if (!email) errors.email = 'Required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email';
  else if (email.length > 254) errors.email = 'Too long';

  if (phone && phone.length > 30) errors.phone = 'Too long';

  if (!service) errors.service = 'Please select a service';
  else if (!VALID_SERVICES.has(service)) errors.service = 'Invalid service selection';

  if (!message) errors.message = 'Required';
  else if (message.length < 10) errors.message = 'Please provide a bit more detail';
  else if (message.length > 2000) errors.message = 'Too long';

  return errors;
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // 1. Rate limit
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment before trying again.' },
      { status: 429 },
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      throw new Error('Not an object');
    }
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // 3. Server-side validation
  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // 4. Deliver the submission.
  //    Configure CONTACT_TO_EMAIL in your environment to enable email delivery.
  //    See .env.local.example for details.
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (toEmail) {
    // TODO: integrate your preferred email transport here (Nodemailer, Resend,
    //       SendGrid, Mailgun …).  Example using Resend:
    //
    //   await resend.emails.send({
    //     from: 'noreply@clarkandco.com',
    //     to: toEmail,
    //     subject: `New contact from ${body.fname} ${body.lname}`,
    //     text: `Service: ${body.service}\n\n${body.message}\n\nReply to: ${body.email}`,
    //   });
    //
    // Until the transport is wired up, log so the submission is not silently lost:
    console.log('[contact] new submission (email delivery not yet configured)', {
      to: toEmail,
      fname: body.fname,
      lname: body.lname,
      email: body.email,
      service: body.service,
      receivedAt: new Date().toISOString(),
    });
  } else {
    // No email address configured — log so submissions are visible in server output.
    console.log('[contact] new submission (set CONTACT_TO_EMAIL to enable email delivery)', {
      fname: body.fname,
      lname: body.lname,
      email: body.email,
      service: body.service,
      receivedAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ success: true });
}
