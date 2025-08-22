import jsPDF from 'jspdf'
import 'jspdf-autotable'
import dayjs from 'dayjs'

export function ugx(n) {
  const val = Number(n || 0)
  return `UGX ${val.toLocaleString('en-UG', { maximumFractionDigits: 0 })}`
}

export function generateInvoiceNumber() {
  const d = dayjs().format('YYYYMMDD-HHmmss')
  const rnd = Math.floor(1000 + Math.random() * 9000)
  return `NAH-${d}-${rnd}`
}

export function invoiceFileName(clientName, dateISO) {
  const safeName = String(clientName || 'Client').trim().replace(/\s+/g, '-')
  const d = dateISO ? dayjs(dateISO).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')
  return `${safeName} ${d} Nahati Laundry Invoice.pdf`
}

async function fetchImageAsDataURL(path) {
  try {
    const res = await fetch(path, { cache: 'no-cache' })
    const blob = await res.blob()
    return await new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  } catch {
    return null
  }
}

// Creates a professional "Invoice Receipt" PDF per the requested sections
export async function createInvoicePdf({ business, invoice }) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const margin = 48
  let y = margin

  const brand = { r: 7, g: 148, b: 136 }
  const brandRGB = [brand.r, brand.g, brand.b]

  // Header
  const logo = await fetchImageAsDataURL('/nahati_logo.png')
  if (logo) {
    try { doc.addImage(logo, 'PNG', margin, y - 6, 64, 64) } catch {}
  }

  doc.setFont('helvetica', 'bold').setFontSize(18).setTextColor(0)
  doc.text(business?.name || 'Nahati Anytime Laundry', margin + 76, y + 10)
  doc.setFont('helvetica', 'normal').setFontSize(10).setTextColor(80)
  if (business?.tagline) doc.text(business.tagline, margin + 76, y + 26)
  if (business?.phone) doc.text(business.phone, margin + 76, y + 40)
  if (business?.address) doc.text(business.address, margin + 76, y + 54)

  doc.setTextColor(0).setFont('helvetica', 'bold').setFontSize(20)
  doc.text('INVOICE RECEIPT', 560, y + 10, { align: 'right' })
  doc.setFontSize(10).setFont('helvetica', 'normal')
  doc.text(`Invoice No: ${invoice.number}`, 560, y + 26, { align: 'right' })
  doc.text(`Date: ${dayjs(invoice.date).isValid() ? dayjs(invoice.date).format('DD/MM/YYYY') : ''}` , 560, y + 40, { align: 'right' })

  y += 76
  // Divider
  doc.setDrawColor(...brandRGB)
  doc.setLineWidth(1)
  doc.line(margin, y, 595 - margin, y)
  y += 20

  // Customer Details (boxed)
  doc.setDrawColor(230)
  doc.setLineWidth(1)
  doc.roundedRect(margin - 6, y - 10, 595 - margin * 2 + 12, 96, 6, 6)
  doc.setFont('helvetica', 'bold').setFontSize(12).setTextColor(0)
  doc.text('Customer Details:', margin, y)
  y += 16
  doc.setFont('helvetica', 'normal').setFontSize(10).setTextColor(50)
  const cust = [
    ['Name', invoice.clientName],
    ['Pickup Location', invoice.pickupLocation],
    ['Drop-off Location', invoice.dropoffLocation],
    ['Contact', invoice.clientPhone],
  ]
  cust.forEach(([label, val]) => {
    if (!val) return
    doc.text(`${label}:`, margin, y)
    doc.text(String(val), margin + 150, y)
    y += 16
  })
  y += 8

  // Service Details (boxed)
  doc.setDrawColor(230)
  doc.setLineWidth(1)
  doc.roundedRect(margin - 6, y - 10, 595 - margin * 2 + 12, 116, 6, 6)
  doc.setFont('helvetica', 'bold').setFontSize(12).setTextColor(0)
  doc.text('Service Details:', margin, y)
  y += 16
  doc.setFont('helvetica', 'normal').setFontSize(10).setTextColor(50)
  const svc = [
    ['Service type', invoice.serviceType],
    ['Weight of the laundry', `${Number(invoice.weightKg || 0)} kgs`],
    ['Rate per kg', ugx(invoice.ratePerKg)],
    ['Pickup Date', dayjs(invoice.pickupDate).isValid() ? dayjs(invoice.pickupDate).format('DD/MM/YYYY') : ''],
    ['Drop-off Date', dayjs(invoice.dropoffDate).isValid() ? dayjs(invoice.dropoffDate).format('DD/MM/YYYY') : ''],
  ]
  svc.forEach(([label, val]) => {
    if (!val) return
    doc.text(`${label}:`, margin, y)
    doc.text(String(val), margin + 180, y)
    y += 16
  })

  if (invoice.specialInstructions) {
    y += 8
    // Special Instructions (boxed)
    const textPreview = doc.splitTextToSize(String(invoice.specialInstructions), 520)
    const boxHeight = Math.max(56, textPreview.length * 14 + 28)
    doc.setDrawColor(230)
    doc.roundedRect(margin - 6, y - 10, 595 - margin * 2 + 12, boxHeight, 6, 6)
    doc.setFont('helvetica', 'bold').setFontSize(12).setTextColor(0)
    doc.text('Special Instructions:', margin, y)
    y += 16
    doc.setFont('helvetica', 'normal').setFontSize(10).setTextColor(50)
    doc.text(textPreview, margin, y)
    y += textPreview.length * 14
  } else {
    y += 8
  }

  // Cost Summary table
  const laundryAmount = Number(invoice.laundryAmount ?? (Number(invoice.weightKg || 0) * Number(invoice.ratePerKg || 0)))
  const pickupFee = Number(invoice.pickupDropoffFee || 0)
  const otherItems = Array.isArray(invoice.items) ? invoice.items : []
  const otherTotal = Number(invoice.otherItemsTotal || otherItems.reduce((s, it) => s + Number(it.amount||0), 0))
  const totalFinal = Number(invoice.totalAmount ?? (laundryAmount + pickupFee + otherTotal))

  doc.setFont('helvetica', 'bold').setFontSize(12).setTextColor(0)
  doc.text('Cost Summary:', margin, y)
  y += 10

  const tableBody = [
    ['Laundry', (laundryAmount).toLocaleString('en-UG')],
    ...otherItems.filter(it => it && it.name && Number(it.amount) > 0).map(it => [String(it.name), Number(it.amount).toLocaleString('en-UG')]),
    ...(otherTotal > 0 ? [['Other services total', otherTotal.toLocaleString('en-UG')]] : []),
    ['Pick up and drop off fee', (pickupFee).toLocaleString('en-UG')],
    [{ content: 'Total Amount', styles: { fontStyle: 'bold' } }, { content: (Number(totalFinal)).toLocaleString('en-UG'), styles: { fontStyle: 'bold' } }],
  ]

  doc.autoTable({
    startY: y + 6,
    headStyles: { fillColor: brandRGB, halign: 'left' },
    styles: { fontSize: 10 },
    head: [['Description', 'Amount (UGX)']],
    body: tableBody,
    columnStyles: { 1: { halign: 'right' } },
    margin: { left: margin, right: margin },
  })

  const tb = doc.lastAutoTable.finalY || y + 40
  // Appreciation footer (boxed)
  doc.setDrawColor(230)
  doc.roundedRect(margin - 6, tb + 10, 595 - margin * 2 + 12, 48, 6, 6)
  doc.setFont('helvetica', 'bold').setFontSize(11).setTextColor(0)
  doc.text('We appreciate your trust.', margin, tb + 28)
  doc.setFont('helvetica', 'normal').setFontSize(10).setTextColor(60)
  doc.text('Thank you for choosing Nahati Anytime Laundry — Your Anytime Laundry. For any questions, call +256 200 981 445.', margin, tb + 44)

  return doc
}
