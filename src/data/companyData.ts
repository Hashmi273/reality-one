export interface CompanyInfo {
  name: string;
  brandName: string;
  legalName: string;
  corporateEntity: string;
  gstin: string;
  registrationNo: string;
  tagline: string;
  positioning: string;
  disclaimer: string;
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    address: string;
    cityState: string;
    fullAddress: string;
    businessHours: string;
    supportDays: string;
    whatsappNumber: string;
    whatsappMessage: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
    x: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Realty One",
  brandName: "Realty One",
  legalName: "WAJID MOHD SALEEM NAGANI (Proprietorship)",
  corporateEntity: "WAJID MOHD SALEEM NAGANI (Proprietorship)",
  gstin: "27ARKPN0244N1ZG",
  registrationNo: "27ARKPN0244N1ZG",
  tagline: "Discover Your Next Address",
  positioning: "Realty One is a premier real-estate discovery and digital advisory platform showcasing verified residential, luxury, commercial, and new-launch property opportunities across prime metropolitan corridors.",
  disclaimer: "Disclaimer: Realty One (Marketed by SKY ROUTE DIGITAL | Legal Entity: WAJID MOHD SALEEM NAGANI, GSTIN: 27ARKPN0244N1ZG) provides property marketing and discovery assistance. Property prices, availability, specifications, images, and other details are subject to developer terms and market updates. Buyers and investors should independently verify all project details and statutory RERA registrations before entering into any purchase or investment agreement.",
  contact: {
    phone: "+919876543210",
    displayPhone: "+91 98765 43210",
    email: "contact@realtyone.in",
    address: "Room No. D/2, Plot No. 114, Malwani Sankalp Siddhi CHS LTD. R.S.C. No. 03, Malwani Road",
    cityState: "Mumbai, Mumbai Suburban, Maharashtra 400095",
    fullAddress: "Room No. D/2, Plot No. 114, Malwani Sankalp Siddhi CHS LTD. R.S.C. No. 03, Malwani Road, Mumbai, Mumbai Suburban, Maharashtra, 400095",
    businessHours: "Monday – Saturday: 9:30 AM – 7:30 PM",
    supportDays: "Sunday: By Prior Appointment",
    whatsappNumber: "919876543210",
    whatsappMessage: "Hello Realty One, I would like to explore premium property opportunities."
  },
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    x: "https://x.com"
  }
};
