export function buildWhatsAppMessage({ name, phone, address, service, weight, pickupDate, pickupTime, deliveryDate, deliveryTime, notes }) {
  return [
    'Hello Nahati Anytime Laundry, I\'d like to schedule a pickup.',
    `Name: ${name || '-'}`,
    `Phone: ${phone || '-'}`,
    `Location: ${address || '-'}`,
    `Service: ${service || '-'}`,
    `Weight: ${weight || '-'} Kg`,
    `Pickup Time: ${[pickupDate, pickupTime].filter(Boolean).join(' ') || '-'}`,
    `Delivery Time: ${[deliveryDate, deliveryTime].filter(Boolean).join(' ') || '-'}`,
    `Notes: ${notes || '-'}`,
  ].join('\n')
}
