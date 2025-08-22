import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { createInvoicePdf, invoiceFileName, generateInvoiceNumber } from '../utils/invoice'
import { submitInvoiceToGoogleForms } from '../utils/googleFormsInvoices'

const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || '0000'

export default function AdminInvoice() {
  const [pinInput, setPinInput] = useState('')
  const [authed, setAuthed] = useState(false)

  // Customer details
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')

  // Service details
  const [serviceType, setServiceType] = useState('Express Service')
  const [weightKg, setWeightKg] = useState(0)
  const [ratePerKg, setRatePerKg] = useState(8000)
  const [pickupDate, setPickupDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [dropoffDate, setDropoffDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [specialInstructions, setSpecialInstructions] = useState('')

  // Costs
  const [pickupDropoffFee, setPickupDropoffFee] = useState(0)

  // Meta
  const [invoiceNumber, setInvoiceNumber] = useState(generateInvoiceNumber())
  const [invoiceDate, setInvoiceDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [saving, setSaving] = useState(false)

  const laundryAmount = useMemo(
    () => Math.round(Number(weightKg || 0) * Number(ratePerKg || 0)),
    [weightKg, ratePerKg]
  )
  const totalAmount = useMemo(
    () => Math.round(laundryAmount + Number(pickupDropoffFee || 0)),
    [laundryAmount, pickupDropoffFee]
  )

  async function handleGenerate() {
    setSaving(true)
    try {
      const business = {
        name: 'Nahati Anytime Laundry',
        tagline: 'Your Anytime Laundry',
        phone: '+256 200 981 445',
        address: 'Kampala, Uganda',
      }

      const invoice = {
        number: invoiceNumber,
        date: invoiceDate,
        clientName,
        clientPhone,
        pickupLocation,
        dropoffLocation,
        serviceType,
        weightKg,
        ratePerKg,
        pickupDate,
        dropoffDate,
        specialInstructions,
        laundryAmount,
        pickupDropoffFee,
        totalAmount,
      }

      const pdf = await createInvoicePdf({ business, invoice })
      const fileName = invoiceFileName(clientName, invoiceDate)
      pdf.save(fileName)

      // Store to Google Sheets via Invoices form
      void submitInvoiceToGoogleForms({
        number: invoiceNumber,
        date: invoiceDate,
        createdAtISO: new Date().toISOString(),
        pdfFileName: fileName,
        clientName,
        clientPhone,
        clientAddress: `${pickupLocation}${dropoffLocation ? ' / ' + dropoffLocation : ''}`,
        serviceType,
        weightKg,
        ratePerKg,
        pickupDate,
        dropoffDate,
        specialInstructions,
        laundryAmount,
        pickupDropoffFee,
        totalAmount,
        items: [],
        subtotal: laundryAmount,
        discount: 0,
        tax: 0,
        total: totalAmount,
        notes: specialInstructions,
      })
    } finally {
      setSaving(false)
    }
  }

  if (!authed) {
    return (
      <div className="container-max py-16">
        <div className="max-w-sm mx-auto card">
          <h1 className="text-xl font-bold">Admin Access</h1>
          <p className="text-sm text-gray-700 mt-2">Enter PIN to manage invoices.</p>
          <div className="mt-4 flex gap-2">
            <input
              type="password"
              placeholder="PIN"
              className="w-full rounded-md border px-3 py-2"
              value={pinInput}
              onChange={e => setPinInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && pinInput === ADMIN_PIN && setAuthed(true)}
            />
            <button className="btn-primary" onClick={() => pinInput === ADMIN_PIN && setAuthed(true)}>Unlock</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Tip: Set VITE_ADMIN_PIN in Netlify env.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container-max py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create Invoice</h1>
        <div className="text-sm text-gray-600">Invoice No: <span className="font-mono">{invoiceNumber}</span></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 card">
          <h2 className="font-semibold mb-4">Customer Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-md border px-3 py-2" placeholder="Name" value={clientName} onChange={e=>setClientName(e.target.value)}/>
            <input className="rounded-md border px-3 py-2" placeholder="Contact phone" value={clientPhone} onChange={e=>setClientPhone(e.target.value)}/>
            <input className="rounded-md border px-3 py-2 sm:col-span-2" placeholder="Pickup Location" value={pickupLocation} onChange={e=>setPickupLocation(e.target.value)}/>
            <input className="rounded-md border px-3 py-2 sm:col-span-2" placeholder="Drop-off Location" value={dropoffLocation} onChange={e=>setDropoffLocation(e.target.value)}/>
          </div>

          <h2 className="font-semibold mt-6 mb-2">Service Details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <select className="rounded-md border px-3 py-2" value={serviceType} onChange={e=>setServiceType(e.target.value)}>
              <option>Ordinary Service</option>
              <option>Normal Service</option>
              <option>Express Service</option>
              <option>Other</option>
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input type="number" step="0.01" className="rounded-md border px-3 py-2" placeholder="Weight (kgs)" value={weightKg} onChange={e=>setWeightKg(e.target.value)}/>
              <input type="number" step="1" className="rounded-md border px-3 py-2" placeholder="Rate per kg (UGX)" value={ratePerKg} onChange={e=>setRatePerKg(e.target.value)}/>
            </div>
            <input type="date" className="rounded-md border px-3 py-2" value={pickupDate} onChange={e=>setPickupDate(e.target.value)}/>
            <input type="date" className="rounded-md border px-3 py-2" value={dropoffDate} onChange={e=>setDropoffDate(e.target.value)}/>
          </div>

          <h2 className="font-semibold mt-6 mb-2">Special Instructions</h2>
          <textarea className="w-full rounded-md border px-3 py-2" rows="3" value={specialInstructions} onChange={e=>setSpecialInstructions(e.target.value)} placeholder="Any notes for garment care, detergent or softener preferences, delicate handling, etc."/>

          <h2 className="font-semibold mt-6 mb-2">Cost Summary</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <label className="text-sm text-gray-700 flex items-center justify-between gap-2">Laundry Amount
              <input disabled className="ml-3 w-40 rounded-md border px-3 py-2 bg-gray-50" value={laundryAmount.toLocaleString('en-UG')} />
            </label>
            <label className="text-sm text-gray-700 flex items-center justify-between gap-2">Pick up & drop off fee
              <input type="number" className="ml-3 w-40 rounded-md border px-3 py-2" value={pickupDropoffFee} onChange={e=>setPickupDropoffFee(e.target.value)}/>
            </label>
            <label className="text-sm text-gray-700 flex items-center justify-between gap-2">Total Amount
              <input disabled className="ml-3 w-40 rounded-md border px-3 py-2 bg-gray-50" value={totalAmount.toLocaleString('en-UG')} />
            </label>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mt-6">
            <label className="text-sm text-gray-700 flex items-center gap-2">Invoice Date
              <input type="date" className="ml-auto rounded-md border px-2 py-1" value={invoiceDate} onChange={e=>setInvoiceDate(e.target.value)}/>
            </label>
            <label className="text-sm text-gray-700 flex items-center gap-2">Invoice No
              <input className="ml-auto rounded-md border px-2 py-1 font-mono" value={invoiceNumber} onChange={e=>setInvoiceNumber(e.target.value)}/>
            </label>
            <button className="btn-outline h-9 mt-6" onClick={()=>setInvoiceNumber(generateInvoiceNumber())}>New Number</button>
          </div>
        </div>

        <div className="card h-fit">
          <h2 className="font-semibold mb-4">Actions</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Laundry</span><span>{laundryAmount.toLocaleString('en-UG')}</span></div>
            <div className="flex justify-between"><span>Pick up & drop off</span><span>{Number(pickupDropoffFee||0).toLocaleString('en-UG')}</span></div>
            <div className="border-t pt-2 flex justify-between font-semibold"><span>Total</span><span>{totalAmount.toLocaleString('en-UG')}</span></div>
          </div>
          <button className="btn-primary mt-4 w-full" onClick={handleGenerate} disabled={saving}>
            {saving ? 'Generating…' : 'Download Invoice & Save'}
          </button>
        </div>
      </div>
    </div>
  )
}
