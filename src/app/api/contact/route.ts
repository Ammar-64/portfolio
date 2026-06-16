import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Where the message is sent, and who it appears to come from.
// `CONTACT_FROM_EMAIL` must be on a domain verified in Resend. Until you verify
// one, Resend's shared `onboarding@resend.dev` sender works but only delivers to
// the email of your own Resend account.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'ammar.n.sammour@gmail.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 503 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const subject = String(body.subject ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    })

    if (error) {
      console.error('Contact form: Resend error', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form: unexpected error', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
