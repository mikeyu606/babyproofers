'use client';

import { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
];

function formatDate(value: Date) {
  return value.toISOString().slice(0, 10);
}

export default function BookingCalendar() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[2]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  const formattedDate = useMemo(() => formatDate(date), [date]);

  const onDateChange = (value: Value) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          date: formattedDate,
          time: selectedTime,
          notes
        })
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      setStatus('Your consultation request is in. We will confirm shortly.');
      setName('');
      setEmail('');
      setNotes('');
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-3xl border border-stone bg-[#fffdf9] p-5 shadow-luxe">
        <Calendar
          minDate={new Date()}
          onChange={onDateChange}
          value={date}
          prev2Label={null}
          next2Label={null}
        />
        <div className="mt-5">
          <p className="mb-3 text-sm text-ink/70">Select a consultation time</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`rounded-full border px-3 py-2 text-sm transition ${
                  selectedTime === time
                    ? 'border-rose bg-rose text-white'
                    : 'border-stone bg-white text-ink hover:bg-cloud'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-stone bg-[#fffdf9] p-6 shadow-luxe"
      >
        <h3 className="text-xl font-semibold text-ink">Book your consultation</h3>
        <p className="mt-1 text-sm text-ink/70">We serve homes across Southern California.</p>

        <div className="mt-5 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm text-ink/80">Full name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-xl border border-stone bg-white px-4 py-3 text-sm outline-none transition focus:border-terracotta"
              placeholder="Jordan Lee"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-ink/80">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-stone bg-white px-4 py-3 text-sm outline-none transition focus:border-terracotta"
              placeholder="jordan@email.com"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-ink/80">Selected slot</span>
            <input
              readOnly
              value={`${formattedDate} at ${selectedTime}`}
              className="w-full rounded-xl border border-stone bg-cloud px-4 py-3 text-sm text-ink/90"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-ink/80">Notes (optional)</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={3}
              className="w-full rounded-xl border border-stone bg-white px-4 py-3 text-sm outline-none transition focus:border-terracotta"
              placeholder="Any specific concerns in your home?"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-5 w-full rounded-full bg-pine px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Booking...' : 'Confirm consultation'}
        </button>

        {status && <p className="mt-3 text-sm text-ink/80">{status}</p>}
      </form>
    </div>
  );
}
