"use client";

import { useState } from "react";

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen py-24 md:py-32 bg-[#FDF8F3] flex items-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-20 h-20 bg-[#991B1B] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#FDF8F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Reservation Confirmed
            </h1>
            <p className="text-xl text-[#2D2D2D]/70 mb-8">
              Thank you for your booking, {formData.name}. We look forward to welcoming you on {formData.date} at {formData.time}.
            </p>
            <p className="text-[#2D2D2D]/60 mb-8">
              A confirmation email has been sent to {formData.email}.
            </p>
            <a 
              href="/"
              className="inline-block px-8 py-4 bg-[#991B1B] text-[#FDF8F3] rounded-lg font-semibold hover:bg-[#7F1D1D] transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-24 md:py-32 bg-[#FDF8F3]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#991B1B] text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">
              Reservations
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Book a Table
            </h1>
            <p className="text-[#2D2D2D]/70 text-xl">
              Reserve your spot for an unforgettable Italian dining experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#D4A853]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                  placeholder="(08) 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all"
                >
                  <option value="">Select a time</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="specialRequests" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E0D8] focus:border-[#991B1B] focus:ring-2 focus:ring-[#991B1B]/20 outline-none transition-all resize-none"
                placeholder="Any dietary requirements, special occasions, or seating preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#991B1B] text-[#FDF8F3] rounded-lg font-semibold text-lg hover:bg-[#7F1D1D] transition-all hover:scale-[1.02]"
            >
              Confirm Reservation
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-[#2D2D2D]/60">
              For groups of 10+ or private events, please{" "}
              <a href="/contact" className="text-[#991B1B] hover:underline font-medium">
                contact us
              </a>{" "}
              directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
