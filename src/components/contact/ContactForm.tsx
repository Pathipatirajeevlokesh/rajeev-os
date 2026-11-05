import { useState, type FormEvent } from 'react'
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { Panel } from '@/components/ui/Panel'
import {
  maxMessageLength,
  validateContactForm,
  type ContactFormValues,
} from '@/lib/contact'

const initialValues: ContactFormValues = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ReturnType<typeof validateContactForm>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateValue = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateContactForm(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 650)
  }

  return (
    <Panel className="contact-form-panel" label="FRONTEND CONTACT DEMO" title="Start with a little context">
      <div className="contact-form-notice">
        <span>DEMO MODE</span>
        <p>
          This form validates locally but does not deliver messages. Use the verified
          <a className="contact-form__email-link" href="mailto:pathipatirajeevlokesh@gmail.com"> email channel</a>
          for direct contact.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <Field label="Full name" name="name" value={values.name} error={errors.name} onChange={(value) => updateValue('name', value)} />
          <Field label="Email address" name="email" type="email" value={values.email} error={errors.email} onChange={(value) => updateValue('email', value)} />
        </div>
        <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={(value) => updateValue('subject', value)} />
        <label className="contact-field">
          <span>Message</span>
          <textarea
            name="message"
            value={values.message}
            maxLength={maxMessageLength}
            rows={6}
            onChange={(event) => updateValue('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : 'message-count'}
          />
          <small id="message-count">{values.message.length}/{maxMessageLength} characters</small>
          {errors.message && <em id="message-error">{errors.message}</em>}
        </label>
        <div className="contact-form__footer">
          {submitted ? (
            <div className="contact-form__result" role="status" aria-live="polite"><CheckCircle2 size={16} /><span>Validated locally. Nothing was sent.</span></div>
          ) : (
            <p>Required fields are marked by validation if left empty.</p>
          )}
          <button type="submit" className="button button--primary" disabled={submitting}>
            {submitting ? <><LoaderCircle className="spin" size={14} /> Validating...</> : <><Send size={14} /> Validate message</>}
          </button>
        </div>
      </form>
    </Panel>
  )
}

function Field({ label, name, type = 'text', value, error, onChange }: { label: string; name: string; type?: string; value: string; error?: string; onChange: (value: string) => void }) {
  const errorId = `${name}-error`
  return (
    <label className="contact-field">
      <span>{label}</span>
      <input name={name} type={type} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
      {error && <em id={errorId}>{error}</em>}
    </label>
  )
}
