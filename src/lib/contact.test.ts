import { describe, expect, it } from 'vitest'
import { validateContactForm } from './contact'

describe('contact form validation', () => {
  it('requires all fields', () => {
    expect(validateContactForm({ name: '', email: '', subject: '', message: '' })).toEqual({
      name: 'Full name is required.',
      email: 'Email address is required.',
      subject: 'Subject is required.',
      message: 'Message is required.',
    })
  })

  it('rejects malformed email addresses and accepts valid input', () => {
    const values = {
      name: 'Rajeev',
      email: 'not-an-email',
      subject: 'Collaboration',
      message: 'Hello',
    }
    expect(validateContactForm(values).email).toBe('Enter a valid email address.')
    expect(validateContactForm({ ...values, email: 'pathipatirajeevlokesh@gmail.com' })).toEqual({})
  })
})
