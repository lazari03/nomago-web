import React, { useState } from 'react';
import { BookingPayload as BaseBookingPayload, createBooking } from '../api/client';
type BookingPayload = BaseBookingPayload & { hour?: string };
import { ColorTokens } from '../theme/colors';

interface BookingFormProps {
  listingId: string;
  listingName: string;
  categoryName: string;
  onSuccess: () => void;
  onClose: () => void;
}

const isApartmentCategory = (categoryName?: string) =>
  categoryName === "Apartment" || categoryName === "Apartments";
const HOUR_OPTIONS = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

const BookingForm: React.FC<BookingFormProps> = ({ listingId, listingName, categoryName, onSuccess, onClose }) => {
  console.log('BookingForm categoryName:', categoryName);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    startDate: '',
    endDate: '',
    hour: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let startDate: Date | undefined = undefined;
      let endDate: Date | undefined = undefined;
      if (isApartmentCategory(categoryName)) {
        startDate = form.startDate ? new Date(form.startDate) : undefined;
        endDate = form.endDate ? new Date(form.endDate) : undefined;
      } else {
        // Combine date and hour for datetime
        if (form.startDate && form.hour) {
          startDate = new Date(`${form.startDate}T${form.hour}:00`);
        } else if (form.startDate) {
          startDate = new Date(form.startDate);
        }
        endDate = undefined;
      }
      const payload: BookingPayload & { listingName?: string } = {
        ...form,
        startDate,
        endDate,
        hour: undefined, // don't send hour field to API
        listing: listingId,
        listingName, // property title is included as listingName
      };
      // Example: if you use a book() function elsewhere, call it like this:
      // book({ ...form, startDate, endDate, listing: listingId, listingName });
      // Debug: log payload and token
      console.log('Booking payload:', payload);
      console.log('Bearer token:', process.env.NEXT_PUBLIC_API_TOKEN);
      await createBooking(payload);
      setSuccess(true);
      onSuccess();
    } catch {
      setError('Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-zinc-200"
      style={{ minWidth: 0 }}
    >
      <h2 className="text-2xl font-extrabold mb-2 text-darkGray">Book this Listing</h2>
      <div className="space-y-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
          required
        />
        <input
          name="surname"
          value={form.surname}
          onChange={handleChange}
          placeholder="Surname"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
          required
        />
        <input
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
          required
        />
        {isApartmentCategory(categoryName) ? (
          <div className="flex gap-3">
            <input
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              placeholder="Check-in Date"
              type="date"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
            />
            <input
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              placeholder="Check-out Date"
              type="date"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
            />
          </div>
        ) : (
          <div className="flex gap-3">
            <input
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              placeholder="Date"
              type="date"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
            />
            <select
              name="hour"
              value={form.hour}
              onChange={e => setForm({ ...form, hour: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-zinc-50 text-darkGray placeholder-gray-400 transition"
              required
            >
              <option value="">Select Time</option>
              {HOUR_OPTIONS.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      {success && <div className="text-green-600 text-sm mt-2">Booking successful!</div>}
      <div className="flex gap-2 justify-end mt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2 rounded-xl font-semibold bg-zinc-100 text-darkGray hover:bg-zinc-200 transition border border-zinc-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-xl font-semibold shadow transition"
          style={{ background: ColorTokens.purple, color: ColorTokens.white }}
          disabled={loading}
        >
          {loading ? 'Booking...' : 'Book Now'}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
