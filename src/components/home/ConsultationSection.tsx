"use client";

import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export function ConsultationSection() {
  const [callType, setCallType] = useState<'video' | 'voice' | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [calendarMonthOffset, setCalendarMonthOffset] = useState(0);

  // Left panel form
  const [leftFormData, setLeftFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Right panel form
  const [rightFormData, setRightFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [isSubmittingLeft, setIsSubmittingLeft] = useState(false);
  const [isSubmittingRight, setIsSubmittingRight] = useState(false);
  const [showSuccessLeft, setShowSuccessLeft] = useState(false);
  const [showSuccessRight, setShowSuccessRight] = useState(false);

  const handleLeftInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLeftFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRightInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRightFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLeftSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLeft(true);

    try {
      emailjs.init("msBKOPZLM6rN0C45D");

      const templateParams = {
        from_name: leftFormData.name,
        from_email: leftFormData.email,
        website: leftFormData.phone,
        challenge: leftFormData.message
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_15r1l2y',
        'template_3coscl9',
        templateParams
      );

      console.log('Email sent successfully:', result);

      if (result.status === 200) {
        setShowSuccessLeft(true);
        setLeftFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setShowSuccessLeft(false), 3000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setShowSuccessLeft(true);
    } finally {
      setIsSubmittingLeft(false);
    }
  };

  const handleRightSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingRight(true);

    try {
      emailjs.init("msBKOPZLM6rN0C45D");

      const templateParams = {
        from_name: rightFormData.name,
        from_email: rightFormData.email,
        website: rightFormData.phone,
        challenge: `Call Type: ${callType === 'video' ? 'Video Call' : 'Voice Call'} | Date: ${selectedDate || 'Not selected'} | Time: ${selectedTime || 'Not selected'}`
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_15r1l2y',
        'template_3coscl9',
        templateParams
      );

      console.log('Email sent successfully:', result);

      if (result.status === 200) {
        setShowSuccessRight(true);
        setRightFormData({ name: '', phone: '', email: '' });
        setSelectedDate(null);
        setSelectedTime(null);
        setCallType(null);
        setTimeout(() => setShowSuccessRight(false), 3000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setShowSuccessRight(true);
    } finally {
      setIsSubmittingRight(false);
    }
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Generate dates for the next 365 days (covers all remaining months)
    for (let i = 1; i <= 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const generateTimeOptions = () => {
    const times = [];
    // Generate 24-hour format times (00:00 to 23:30) in 30-minute increments
    for (let i = 0; i < 24; i++) {
      times.push(`${i.toString().padStart(2, '0')}:00`);
      times.push(`${i.toString().padStart(2, '0')}:30`);
    }
    return times;
  };

  const dateOptions = generateDateOptions();
  const timeOptions = generateTimeOptions();

  return (
    <section
      id="consultation"
      className="px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-25 relative overflow-hidden"
      style={{ background: '#020202' }}
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(202,255,74,0.08) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.015) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: 'var(--home-text)'
            }}
          >
            Let's Talk About<br />
            <span
              className="outline"
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
                color: 'transparent'
              }}
            >
              Your Content
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 3vw, 18px)',
              lineHeight: 1.6,
              color: 'var(--home-muted)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-inter)'
            }}
          >
            Choose how you'd like to connect with us
          </p>
        </div>

        {/* Two Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT PANEL - Normal Form */}
          <div
            className="p-8 lg:p-10 rounded-lg border border-[rgba(202,255,74,0.2)]"
            style={{ background: 'rgba(202,255,74,0.03)' }}
          >
            <h3
              className="mb-2 text-[24px] font-bold"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                color: 'var(--home-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Send us a Message
            </h3>
            <p
              className="mb-8 text-[16px]"
              style={{
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontStyle: 'italic'
              }}
            >
              Tell us about your content challenges
            </p>

            {showSuccessLeft ? (
              <div
                className="text-center py-12"
                style={{
                  background: 'rgba(202,255,74,0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(202,255,74,0.3)'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#CAFF4A',
                    marginBottom: '8px',
                    fontFamily: 'Barlow Condensed, sans-serif'
                  }}
                >
                  Message Received!
                </h4>
                <p style={{ color: 'var(--home-muted)', fontSize: '14px' }}>
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeftSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={leftFormData.name}
                    onChange={handleLeftInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                  />
                </div>

                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={leftFormData.email}
                    onChange={handleLeftInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                  />
                </div>

                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={leftFormData.phone}
                    onChange={handleLeftInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                  />
                </div>

                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={leftFormData.message}
                    onChange={handleLeftInputChange}
                    placeholder="Tell us about your content challenges..."
                    required
                    rows={5}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 resize-none text-[14px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingLeft}
                  className="w-full py-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-bold tracking-[0.08em] text-[14px] uppercase mt-6"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    background: 'linear-gradient(135deg, #caff4a 0%, #b8e539 100%)',
                    color: '#000000',
                    boxShadow: '0 8px 32px rgba(202,255,74,0.25)'
                  }}
                >
                  {isSubmittingLeft ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT PANEL - Call Scheduling */}
          <div
            className="p-8 lg:p-10 rounded-lg border border-[rgba(202,255,74,0.2)]"
            style={{ background: 'rgba(202,255,74,0.03)' }}
          >
            <h3
              className="mb-2 text-[24px] font-bold"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                color: 'var(--home-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Schedule a Call
            </h3>
            <p
              className="mb-8 text-[16px]"
              style={{
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontStyle: 'italic'
              }}
            >
              Book a direct conversation with our team
            </p>

            {showSuccessRight ? (
              <div
                className="text-center py-12"
                style={{
                  background: 'rgba(202,255,74,0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(202,255,74,0.3)'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#CAFF4A',
                    marginBottom: '8px',
                    fontFamily: 'Barlow Condensed, sans-serif'
                  }}
                >
                  Call Scheduled!
                </h4>
                <p style={{ color: 'var(--home-muted)', fontSize: '14px' }}>
                  Check your email for confirmation details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRightSubmit} className="space-y-5">
                {/* Call Type Selection */}
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Call Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCallType('video')}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-center font-semibold text-[14px] ${
                        callType === 'video'
                          ? 'border-[#CAFF4A] bg-[rgba(202,255,74,0.1)]'
                          : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(202,255,74,0.3)]'
                      }`}
                      style={{
                        color: callType === 'video' ? '#CAFF4A' : 'var(--home-text)',
                        fontFamily: 'Barlow Condensed, sans-serif'
                      }}
                    >
                      📹 Video Call
                    </button>
                    <button
                      type="button"
                      onClick={() => setCallType('voice')}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-center font-semibold text-[14px] ${
                        callType === 'voice'
                          ? 'border-[#CAFF4A] bg-[rgba(202,255,74,0.1)]'
                          : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(202,255,74,0.3)]'
                      }`}
                      style={{
                        color: callType === 'voice' ? '#CAFF4A' : 'var(--home-text)',
                        fontFamily: 'Barlow Condensed, sans-serif'
                      }}
                    >
                      📞 Voice Call
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={rightFormData.name}
                    onChange={handleRightInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={rightFormData.phone}
                    onChange={handleRightInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={rightFormData.email}
                    onChange={handleRightInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                  />
                </div>

                {/* Calendar */}
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Select Date
                  </label>
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mb-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalendarMonthOffset(prev => Math.max(0, prev - 1))}
                      disabled={calendarMonthOffset === 0}
                      className="px-3 py-2 rounded bg-[rgba(202,255,74,0.2)] text-[#CAFF4A] text-[12px] font-bold hover:bg-[rgba(202,255,74,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      ← Previous
                    </button>
                    <span className="text-[12px] text-white font-bold">
                      {(() => {
                        const today = new Date();
                        const displayDate = new Date(today);
                        displayDate.setMonth(displayDate.getMonth() + calendarMonthOffset);
                        return displayDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                      })()}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCalendarMonthOffset(prev => prev + 1)}
                      className="px-3 py-2 rounded bg-[rgba(202,255,74,0.2)] text-[#CAFF4A] text-[12px] font-bold hover:bg-[rgba(202,255,74,0.3)] transition-all"
                    >
                      Next →
                    </button>
                  </div>

                  <div className="border border-[rgba(255,255,255,0.1)] rounded-lg p-3 bg-[rgba(255,255,255,0.02)]">
                    {(() => {
                      const grouped: { [key: string]: Date[] } = {};
                      dateOptions.forEach(date => {
                        const monthKey = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
                        if (!grouped[monthKey]) grouped[monthKey] = [];
                        grouped[monthKey].push(date);
                      });

                      const monthKeys = Object.keys(grouped);
                      const displayMonthIndex = calendarMonthOffset;
                      const displayMonth = monthKeys[displayMonthIndex];

                      if (!displayMonth) {
                        return <p className="text-[12px] text-[var(--home-muted)]">No dates available</p>;
                      }

                      return (
                        <div>
                          <p className="text-[12px] font-bold text-[#CAFF4A] mb-3 uppercase">{displayMonth}</p>
                          <div className="grid grid-cols-7 gap-2">
                            {grouped[displayMonth].map((date) => {
                              const dateStr = date.toISOString().split('T')[0];
                              const dayNum = date.getDate();
                              const isSelected = selectedDate === dateStr;

                              return (
                                <button
                                  key={dateStr}
                                  type="button"
                                  onClick={() => setSelectedDate(dateStr)}
                                  className={`p-2 rounded text-center text-[11px] font-bold transition-all duration-200 ${
                                    isSelected
                                      ? 'bg-[#CAFF4A] text-[#000]'
                                      : 'bg-[rgba(255,255,255,0.05)] text-[var(--home-muted)] hover:bg-[rgba(202,255,74,0.1)]'
                                  }`}
                                >
                                  {dayNum}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                  {selectedDate && (
                    <p style={{ fontSize: '12px', color: '#CAFF4A' }}>
                      {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label
                    className="block text-[13px] uppercase tracking-[0.1em] text-white mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Select Time
                  </label>
                  <select
                    value={selectedTime || ''}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[var(--home-text)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200 text-[14px]"
                    style={{
                      colorScheme: 'dark'
                    }}
                  >
                    <option value="" style={{ color: 'white', backgroundColor: '#1a1a1a' }}>Choose a time</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time} style={{ color: 'white', backgroundColor: '#1a1a1a' }}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingRight || !callType || !selectedDate || !selectedTime}
                  className="w-full py-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-bold tracking-[0.08em] text-[14px] uppercase mt-6"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    background: callType && selectedDate && selectedTime ? 'linear-gradient(135deg, #caff4a 0%, #b8e539 100%)' : 'rgba(202,255,74,0.3)',
                    color: '#000000',
                    boxShadow: callType && selectedDate && selectedTime ? '0 8px 32px rgba(202,255,74,0.25)' : 'none'
                  }}
                >
                  {isSubmittingRight ? 'Scheduling...' : 'Schedule Call'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
