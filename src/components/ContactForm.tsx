'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setError(json.error || 'Could not send message. Please try again.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <p className="font-display text-xl font-semibold tracking-tight">Thank you.</p>
        <p className="mt-2 text-muted-foreground">
          Your message is on its way. I will get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-primary transition-colors hover:text-foreground"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-muted-foreground">Name</span>
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted-foreground">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-muted-foreground">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          minLength={5}
          maxLength={5000}
          className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
        />
      </label>

      {status === 'error' && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_hsl(162_84%_24%/0.6)] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
