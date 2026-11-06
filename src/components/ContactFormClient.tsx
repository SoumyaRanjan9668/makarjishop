"use client";

import { useState } from "react";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiryType: "Retail Purchase",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Direct user to pre-filled WhatsApp message with form details
    const text = `Namaste MAKAR JI!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEnquiry Type: ${formData.enquiryType}\nMessage: ${formData.message || "I would like product catalogue and price details."}`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-xl border border-forest/15 bg-ivory-light p-6 sm:p-8 shadow-sm">
      <h3 className="font-serif text-2xl font-bold text-forest mb-2">
        Send Direct Workshop Message
      </h3>
      <p className="text-xs sm:text-sm text-secondary-text mb-6">
        Fill out your requirements below to open a direct enquiry on WhatsApp or request workshop response.
      </p>

      {submitted ? (
        <div className="rounded-lg bg-forest p-6 text-center text-ivory space-y-3">
          <CheckCircle2 className="h-10 w-10 text-terracotta mx-auto" />
          <h4 className="font-serif text-lg font-bold text-white">
            Enquiry Dispatched
          </h4>
          <p className="text-xs text-sage/85">
            Thank you! Your enquiry has been routed to WhatsApp. Our workshop team will respond during working hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-xs text-terracotta hover:underline cursor-pointer"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-forest mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className="w-full rounded-md border border-forest/20 bg-white py-2.5 px-3.5 text-sm text-main-text focus:border-forest focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-forest mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full rounded-md border border-forest/20 bg-white py-2.5 px-3.5 text-sm text-main-text focus:border-forest focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-forest mb-1">
              Enquiry Type
            </label>
            <select
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full rounded-md border border-forest/20 bg-white py-2.5 px-3.5 text-sm text-main-text focus:border-forest focus:outline-none"
            >
              <option value="Retail Purchase">Single / Retail Tool Purchase</option>
              <option value="Wholesale Bulk Order">Wholesale / Hardware Store Bulk Order</option>
              <option value="Custom Forging Specification">Custom Weight / Dimensions Requirement</option>
              <option value="General Inquiry">General Question / Workshop Visit</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-forest mb-1">
              Tool Name or Requirements
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify the tool (e.g. Kulhadi, Pankhi, Daab, Tawa), quantity needed, or destination PIN code..."
              className="w-full rounded-md border border-forest/20 bg-white py-2.5 px-3.5 text-sm text-main-text focus:border-forest focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-terracotta py-3 px-4 text-sm font-semibold text-white hover:bg-terracotta-hover transition-colors shadow-sm cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Send Enquiry on WhatsApp</span>
          </button>

          <p className="text-[11px] text-secondary-text text-center">
            *Submitting connects directly to the workshop WhatsApp with your pre-filled inquiry.
          </p>
        </form>
      )}
    </div>
  );
}
