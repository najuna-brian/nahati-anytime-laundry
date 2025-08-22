import BookingForm from '../components/BookingForm'

export default function Booking() {
  return (
    <div className="container-max py-12">
      <h1 className="text-3xl font-bold">Schedule Pickup</h1>
      <p className="mt-2 text-gray-700">Fill in your details and we’ll confirm on WhatsApp.</p>
      <div className="mt-6">
        <BookingForm />
      </div>
    </div>
  )
}
