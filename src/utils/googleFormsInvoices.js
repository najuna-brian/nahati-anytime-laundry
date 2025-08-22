// Separate Google Forms config for Invoices -> linked to a different Google Sheet
export const ENABLE_GOOGLE_FORMS_INVOICES = true // set to false to disable storing invoices

// Replace with your Invoices Google Form formResponse URL
export const FORM_ACTION_INVOICE = 'https://docs.google.com/forms/d/FORM_ID_INVOICE/formResponse'

// Map invoice fields to Google Forms entry IDs
export const FIELD_MAP_INVOICE = {
  number: 'entry.INV_NUMBER',
  date: 'entry.INV_DATE',
  createdAtISO: 'entry.INV_CREATED_AT',
  pdfFileName: 'entry.INV_PDF_NAME',
  clientName: 'entry.INV_CLIENT_NAME',
  clientPhone: 'entry.INV_CLIENT_PHONE',
  clientAddress: 'entry.INV_CLIENT_ADDRESS',
  serviceType: 'entry.INV_SERVICE_TYPE',
  weightKg: 'entry.INV_WEIGHT_KG',
  ratePerKg: 'entry.INV_RATE_PER_KG',
  pickupDate: 'entry.INV_PICKUP_DATE',
  dropoffDate: 'entry.INV_DROPOFF_DATE',
  specialInstructions: 'entry.INV_SPECIAL_INSTR',
  laundryAmount: 'entry.INV_LAUNDRY_AMOUNT',
  pickupDropoffFee: 'entry.INV_PICKUP_FEE',
  totalAmount: 'entry.INV_TOTAL_AMOUNT',
  itemsJson: 'entry.INV_ITEMS_JSON',
  subtotal: 'entry.INV_SUBTOTAL',
  discount: 'entry.INV_DISCOUNT',
  tax: 'entry.INV_TAX',
  total: 'entry.INV_TOTAL',
  notes: 'entry.INV_NOTES',
}

export async function submitInvoiceToGoogleForms(inv) {
  if (!ENABLE_GOOGLE_FORMS_INVOICES) return
  try {
    const p = new URLSearchParams()
    const set = (k, v) => { if (FIELD_MAP_INVOICE[k]) p.set(FIELD_MAP_INVOICE[k], v ?? '') }

    set('number', inv.number)
    set('date', inv.date)
    set('createdAtISO', inv.createdAtISO || new Date().toISOString())
    set('pdfFileName', inv.pdfFileName)
    set('clientName', inv.clientName)
    set('clientPhone', inv.clientPhone)
    set('clientAddress', inv.clientAddress)
    set('serviceType', inv.serviceType)
    set('weightKg', String(inv.weightKg ?? ''))
    set('ratePerKg', String(inv.ratePerKg ?? ''))
    set('pickupDate', inv.pickupDate || '')
    set('dropoffDate', inv.dropoffDate || '')
    set('specialInstructions', inv.specialInstructions || '')
    set('laundryAmount', String(inv.laundryAmount ?? 0))
    set('pickupDropoffFee', String(inv.pickupDropoffFee ?? 0))
    set('totalAmount', String(inv.totalAmount ?? 0))
    set('itemsJson', JSON.stringify(inv.items || []))
    set('subtotal', String(inv.subtotal ?? inv.laundryAmount ?? 0))
    set('discount', String(inv.discount ?? 0))
    set('tax', String(inv.tax ?? 0))
    set('total', String(inv.total ?? inv.totalAmount ?? 0))
    set('notes', inv.notes || '')

    await fetch(FORM_ACTION_INVOICE, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: p,
    })
  } catch (e) {
    console.error('Invoice Google Form submission failed', e)
  }
}
