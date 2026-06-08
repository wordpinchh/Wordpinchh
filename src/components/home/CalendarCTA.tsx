"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export function CalendarCTA() {
  const [showForm, setShowForm] = useState(false);
  const [callType, setCallType] = useState<'video' | 'voice' | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCallTypeSelect = (type: 'video' | 'voice') => {
    setCallType(type);
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("msBKOPZLM6rN0C45D");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        call_type: callType === 'video' ? 'Video Call' : 'Voice Call',
        selected_date: selectedDate || 'Not selected',
      };

      const result = await emailjs.send(
        'service_15r1l2y',
        'template_3coscl9',
        templateParams
      );

      if (result.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '' });
        setSelectedDate(null);
        setCallType(null);
        setTimeout(() => {
          setShowSuccess(false);
          setShowForm(false);
        }, 3000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dateOptions = generateDateOptions();

  if (!showForm) {
    return (
      <div className="mb-8">
        <p className="text-center text-[var(--home-muted)] mb-6 text-[16px]">
          Prefer to schedule a call?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleCallTypeSelect('video')}
            className="flex-1 sm:flex-none px-6 py-4 border-2 border-[var(--home-text)] rounded-lg hover:bg-[rgba(202,255,74,0.1)] transition-all duration-300"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--home-text)'
            }}
          >
            📹 Video Call
          </button>
          <button
            onClick={() => handleCallTypeSelect('voice')}
            className="flex-1 sm:flex-none px-6 py-4 border-2 border-[var(--home-text)] rounded-lg hover:bg-[rgba(202,255,74,0.1)] transition-all duration-300"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--home-text)'
            }}
          >
            📞 Voice Call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(202,255,74,0.05)] border border-[rgba(202,255,74,0.2)] rounded-lg p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[20px] font-bold" style={{ fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--home-text)' }}>
          {callType === 'video' ? '📹 Schedule Video Call' : '📞 Schedule Voice Call'}
        </h3>
        <button
          onClick={() => {
            setShowForm(false);
            setCallType(null);
            setSelectedDate(null);
          }}
          className="text-[var(--home-muted)] hover:text-[var(--home-text)] transition-colors"
        >
          ✕
        </button>
      </div>

      {showSuccess ? (
        <div className="text-center py-6">
          <div className="text-4xl mb-4">✓</div>
          <h4 className="text-[18px] font-bold mb-2" style={{ color: 'var(--home-text)' }}>
            Call Scheduled!
          </h4>
          <p className="text-[var(--home-muted)]">
            We'll send you a confirmation email shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Calendar Section */}
          <div>
            <label className="block text-[14px] uppercase tracking-[0.1em] text-[var(--home-muted)] mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Select a Date
            </label>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dateOptions.slice(0, 28).map((date) => {
                const dateStr = date.toISOString().split('T')[0];
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                const dayNum = date.getDate();
                const isSelected = selectedDate === dateStr;

                return (
                  <button
                    key={dateStr}
                    type="button"
                    onClick={() => handleDateSelect(dateStr)}
                    className={`p-2 rounded text-center text-[12px] transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#CAFF4A] text-[#000]'
                        : 'bg-[rgba(255,255,255,0.05)] text-[var(--home-muted)] hover:bg-[rgba(202,255,74,0.1)]'
                    }`}
                  >
                    <div className="font-bold">{dayNum}</div>
                    <div className="text-[10px]">{dayName}</div>
                  </button>
                );
              })}
            </div>
            {selectedDate && (
              <p className="text-[14px] text-[#CAFF4A]">
                Selected: {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] uppercase tracking-[0.1em] text-[var(--home-muted)] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[var(--home-text)] placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-[14px] uppercase tracking-[0.1em] text-[var(--home-muted)] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[var(--home-text)] placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-[14px] uppercase tracking-[0.1em] text-[var(--home-muted)] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              required
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-[var(--home-text)] placeholder-[var(--home-muted)] focus:outline-none focus:border-[#CAFF4A] focus:bg-[rgba(202,255,74,0.05)] transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !selectedDate}
            className="w-full py-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-bold tracking-[0.08em] text-[16px] uppercase"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              background: selectedDate ? 'linear-gradient(135deg, #caff4a 0%, #b8e539 100%)' : 'rgba(202,255,74,0.3)',
              color: '#000000',
              boxShadow: selectedDate ? '0 8px 32px rgba(202,255,74,0.25)' : 'none'
            }}
          >
            {isSubmitting ? 'Scheduling...' : 'Confirm & Schedule Call'}
          </button>
        </form>
      )}
    </div>
  );
}
