// Configure your Google Forms endpoint here.
// 1. Create a Google Form with the matching fields.
// 2. Open the form, view page source of the live form, find the <form action=".../formResponse"> URL and the entry IDs (entry.123456).
// 3. Fill them below and set ENABLE_GOOGLE_FORMS=true.

const ENABLE_GOOGLE_FORMS = false // Set to true after configuring

const FORM_ACTION = 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse'

// Map local field names to Google Forms entry IDs
const FIELD_MAP = {
  name: 'entry.111111',
  phone: 'entry.222222',
  address: 'entry.333333',
  service: 'entry.444444',
  weight: 'entry.555555',
  pickupDate: 'entry.666666',
  pickupTime: 'entry.777777',
  deliveryDate: 'entry.888888',
  deliveryTime: 'entry.999999',
  notes: 'entry.000000',
}

export async function submitToGoogleForms(data) {
  if (!ENABLE_GOOGLE_FORMS) return
  try {
    const formData = new FormData()
    Object.entries(FIELD_MAP).forEach(([key, entryId]) => {
      formData.append(entryId, data[key] ?? '')
    })

    await fetch(FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
  } catch (e) {
    // Silent fail; we rely on WhatsApp confirmation for UX
    console.error('Google Forms submission failed', e)
  }
}
