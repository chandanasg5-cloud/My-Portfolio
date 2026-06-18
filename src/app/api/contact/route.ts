import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { profile } from '@/lib/data'

export const runtime = 'nodejs'

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const body = await request.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }

    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const message = String(body.message ?? '').trim()
    const company = String(body.company ?? '').trim() // honeypot field

    // Bots fill hidden fields; humans leave it empty.
    if (company) {
      return NextResponse.json({ ok: true })
    }

    if (!name || name.length > 100) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
    }
    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 })
    }

    const resend = new Resend(apiKey)
    const toAddress = process.env.CONTACT_TO_EMAIL || profile.email

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [toAddress],
      replyTo: email,
      subject: `New message from ${name} via your portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      return NextResponse.json({ error: 'Could not send message.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
