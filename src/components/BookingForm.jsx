import { useState } from 'react'
import { SERVICES, WHATSAPP_NUMBER } from '../utils/constants'
import { buildWhatsAppMessage } from '../utils/whatsapp'
import { submitToGoogleForms } from '../utils/googleForms'

const initialState = {
  name: '',
  phone: '',
  address: '',
  service: SERVICES[1].name, // default Normal Service
  weight: '',
  pickupDate: '',
  pickupTime: '',
  deliveryDate: '',
  deliveryTime: '',
  notes: '',
}

export default function BookingForm() {
  const [data, setData] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setData(d => ({ ...d, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Fire-and-forget Google Forms submission
      submitToGoogleForms(data).catch(() => {})

      // Open WhatsApp with prefilled message
      const msg = buildWhatsAppMessage(data)
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
      window.open(url, '_blank')

      setSubmitted(true)
      setData(initialState)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-6">
      <div className="grid gap-6">
        <section className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Your Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required name="name" value={data.name} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone number</label>
              <input required name="phone" value={data.phone} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Address / Location pin</label>
              <input required name="address" value={data.address} onChange={onChange} placeholder="Google Maps link or description" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
          </div>
        </section>

        <section className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Service Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Service type</label>
              <select name="service" value={data.service} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand">
                {SERVICES.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Estimated weight (Kg)</label>
              <input name="weight" value={data.weight} onChange={onChange} type="number" min="0" step="0.5" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
          </div>
        </section>

        <section className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Schedule</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Preferred pickup date</label>
              <input name="pickupDate" value={data.pickupDate} onChange={onChange} type="date" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-medium">Preferred pickup time</label>
              <input name="pickupTime" value={data.pickupTime} onChange={onChange} type="time" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-medium">Preferred delivery date</label>
              <input name="deliveryDate" value={data.deliveryDate} onChange={onChange} type="date" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-medium">Preferred delivery time</label>
              <input name="deliveryTime" value={data.deliveryTime} onChange={onChange} type="time" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
            </div>
          </div>
        </section>

        <section className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Notes</h3>
          <textarea name="notes" value={data.notes} onChange={onChange} rows="3" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-brand focus:ring-brand" />
        </section>
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="btn-primary" disabled={submitting}>{submitting ? 'Submitting…' : 'Submit & WhatsApp'}</button>
        {submitted && <span className="text-sm text-gray-600">Thanks! WhatsApp opened in a new tab.</span>}
      </div>
    </form>
  )
}
