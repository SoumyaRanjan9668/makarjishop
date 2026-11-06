/**
 * Centralized Business Configuration for MAKAR JI
 * Traditional Handmade Iron Tools Manufacturer
 * 
 * All business contact points, WhatsApp messaging templates, and address details
 * are managed centrally here. Update this file to replace placeholder information
 * with verified workshop details.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  category: string;
  positioning: string;
  phone: string;
  whatsappNumber: string; // E.164 format without '+' or spaces, e.g. "919876543210"
  displayPhone: string;
  displayAddress: string;
  villageDetails: {
    village: string;
    tehsilBlock: string;
    district: string;
    state: string;
    country: string;
    pinCode: string;
  };
  email: string;
  businessHours: string;
  isWhatsAppConfigured: boolean;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  socialLinks: {
    whatsappUrl?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "MAKAR JI",
  tagline: "Tools Made With Tradition.",
  category: "Traditional Handmade Iron Tools Manufacturer",
  positioning: "Traditional Indian craftsmanship combined with modern presentation and quality.",
  
  // NOTE: Replace with actual business phone number when provided.
  // Currently set as a clear placeholder.
  phone: "+91 9777259416",
  displayPhone: "+91 97772 59416 (Workshop Enquiry)",
  
  // WhatsApp Number in international format without '+' for wa.me links
  // Set isWhatsAppConfigured to true once actual phone number is provided
  whatsappNumber: "9668268777",
  isWhatsAppConfigured: true, // Configured with standard placeholder, editable
  
  displayAddress: "Narayan Pur, Marshaghai, Kendrapara, Odisha - 754212",

villageDetails: {
  village: "Narayan Pur",
  tehsilBlock: "Marshaghai",
  district: "Kendrapara",
  state: "Odisha",
  country: "India",
  pinCode: "754212",
},
  
  email: "soumyaranjanojha5@gmail.com",
  businessHours: "Monday – Saturday: 8:00 AM – 7:00 PM (IST)",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.6370570185195!2d86.4668527734146!3d20.47567710654875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bcf0074b0f7b5%3A0x1bab0f7cce510b76!2sSoumya's%20House!5e1!3m2!1sen!2sin!4v1793968193671!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=20.475677,86.466852",
  
  socialLinks: {
    whatsappUrl: "https://wa.me/919668268777",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

/**
 * Generate a pre-filled WhatsApp enquiry URL for a specific product or general inquiry.
 */
export function getWhatsAppUrl(productName?: string, customNote?: string): string {
  const number = BUSINESS_CONFIG.whatsappNumber;
  let message = `Namaste MAKAR JI! I visited your website and would like to enquire about your handmade iron tools.`;

  if (productName) {
    message = `Namaste MAKAR JI!\n\nI am interested in ordering/enquiring about: *${productName}*.\n\nPlease share price, available batch stock, and delivery details for my location.`;
  }

  if (customNote) {
    message += `\n\nNote: ${customNote}`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Generate a wholesale / bulk order WhatsApp enquiry URL.
 */
export function getWholesaleWhatsAppUrl(customNote?: string): string {
  const number = BUSINESS_CONFIG.whatsappNumber;
  let message = `Namaste MAKAR JI!\n\nI am contacting you regarding a *Wholesale / Bulk Order* for your handmade iron tools.\n\nPlease share your wholesale product catalogue, bulk pricing slabs, and dispatch timeline.`;

  if (customNote) {
    message += `\n\nRequirements: ${customNote}`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Clean phone link for calling
 */
export function getPhoneCallUrl(): string {
  const sanitized = BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, "");
  return `tel:${sanitized}`;
}
