export type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

export const maxMessageLength = 1000

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}
  if (!values.name.trim()) errors.name = 'Full name is required.'
  if (!values.email.trim()) errors.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.message.trim()) errors.message = 'Message is required.'
  return errors
}
