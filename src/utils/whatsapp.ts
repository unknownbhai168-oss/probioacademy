/**
 * ProBio Academy WhatsApp & Communication Utilities
 * Academy Official Number: 918981800375
 */

export const ACADEMY_PHONE_RAW = '918981800375';
export const ACADEMY_PHONE_DISPLAY = '+91 89818 00375';
export const ACADEMY_TEL_HREF = 'tel:+918981800375';

export type ProgramType = 
  | 'Class 11 — Foundation for NEET Biology'
  | 'Class 12 — Board and NEET Biology Preparation'
  | 'Dropper / Repeater — Focused NEET Revision';

export const PROGRAM_OPTIONS: ProgramType[] = [
  'Class 11 — Foundation for NEET Biology',
  'Class 12 — Board and NEET Biology Preparation',
  'Dropper / Repeater — Focused NEET Revision'
];

export type ContactMethodType = 'WhatsApp' | 'Phone Call' | 'Either (WhatsApp or Call)';

export interface BookingFormData {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  program: ProgramType;
  preferredContactMethod: ContactMethodType;
  message?: string;
}

export interface ValidationErrors {
  studentName?: string;
  parentName?: string;
  phoneNumber?: string;
  program?: string;
  preferredContactMethod?: string;
}

/**
 * Validates the booking form fields
 */
export function validateBookingForm(data: BookingFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.studentName || data.studentName.trim().length < 2) {
    errors.studentName = "Please enter student's full name (at least 2 letters)";
  }

  if (!data.parentName || data.parentName.trim().length < 2) {
    errors.parentName = "Please enter parent/guardian's name (at least 2 letters)";
  }

  const cleanPhone = data.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 10 || !/^\d{10,13}$/.test(cleanPhone)) {
    errors.phoneNumber = 'Please enter a valid 10-digit mobile number';
  }

  if (!data.program || !PROGRAM_OPTIONS.includes(data.program)) {
    errors.program = 'Please select a valid program';
  }

  if (!data.preferredContactMethod) {
    errors.preferredContactMethod = 'Please select a contact method';
  }

  return errors;
}

/**
 * Formats the official enquiry message with exact student and parent parameters
 */
export function buildWhatsAppMessage(data: BookingFormData): string {
  const cleanPhone = data.phoneNumber.trim();
  const student = data.studentName.trim();
  const parent = data.parentName.trim();
  const prog = data.program.trim();
  const method = data.preferredContactMethod.trim();
  const additionalMsg = data.message && data.message.trim().length > 0 
    ? data.message.trim() 
    : 'None';

  return `Hi Sir, I want to enquire about booking a seat for my ward at ProBio Academy.

Student Name: ${student}
Parent/Guardian Name: ${parent}
Class/Program: ${prog}
Contact Number: ${cleanPhone}
Preferred Contact Method: ${method}
Message: ${additionalMsg}

Please share the available batches, class timings, fee structure, and admission procedure.

Thank you, Sir.`;
}

/**
 * Generates the WhatsApp click-to-chat URL using wa.me format
 */
export function generateWhatsAppUrl(data: BookingFormData): string {
  const text = buildWhatsAppMessage(data);
  return `https://wa.me/${ACADEMY_PHONE_RAW}?text=${encodeURIComponent(text)}`;
}

/**
 * Quick direct WhatsApp link for general questions
 */
export function generateGeneralInquiryWhatsAppUrl(topic = 'Admission Enquiry'): string {
  const text = `Hi Shubhajit Sir, I would like to know more about NEET Biology courses at ProBio Academy (${topic}). Please share admission details.`;
  return `https://wa.me/${ACADEMY_PHONE_RAW}?text=${encodeURIComponent(text)}`;
}
