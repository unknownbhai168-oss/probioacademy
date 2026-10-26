import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  validateBookingForm, 
  buildWhatsAppMessage, 
  generateWhatsAppUrl,
  ACADEMY_PHONE_RAW,
  PROGRAM_OPTIONS
} from './whatsapp.ts';

test('validates valid booking form data with zero errors', () => {
  const errors = validateBookingForm({
    studentName: 'Aritra Mukherjee',
    parentName: 'Debashis Mukherjee',
    phoneNumber: '9830123456',
    program: 'Class 11 — Foundation for NEET Biology',
    preferredContactMethod: 'WhatsApp',
    message: 'Looking for weekday evening batch.'
  });

  assert.deepEqual(errors, {});
});

test('catches missing or short names', () => {
  const errors = validateBookingForm({
    studentName: 'A',
    parentName: '',
    phoneNumber: '9830123456',
    program: 'Class 12 — Board and NEET Biology Preparation',
    preferredContactMethod: 'Phone Call'
  });

  assert.ok(errors.studentName);
  assert.ok(errors.parentName);
});

test('catches invalid phone number', () => {
  const errors = validateBookingForm({
    studentName: 'Priya Sen',
    parentName: 'Ramen Sen',
    phoneNumber: '12345',
    program: 'Dropper / Repeater — Focused NEET Revision',
    preferredContactMethod: 'WhatsApp'
  });

  assert.ok(errors.phoneNumber);
});

test('builds accurate WhatsApp message and encoded URL', () => {
  const data = {
    studentName: 'Sayan Roy',
    parentName: 'Sunil Roy',
    phoneNumber: '9876543210',
    program: 'Class 11 — Foundation for NEET Biology' as const,
    preferredContactMethod: 'WhatsApp' as const,
    message: 'Need batch timings.'
  };

  const message = buildWhatsAppMessage(data);
  assert.ok(message.includes('Student Name: Sayan Roy'));
  assert.ok(message.includes('Parent/Guardian Name: Sunil Roy'));
  assert.ok(message.includes('Class/Program: Class 11 — Foundation for NEET Biology'));
  assert.ok(message.includes('Contact Number: 9876543210'));
  assert.ok(message.includes('Message: Need batch timings.'));

  const url = generateWhatsAppUrl(data);
  assert.ok(url.startsWith(`https://wa.me/${ACADEMY_PHONE_RAW}?text=`));
  assert.ok(url.includes(encodeURIComponent('Student Name: Sayan Roy')));
});

test('supports all three program options in URL generation', () => {
  PROGRAM_OPTIONS.forEach((prog) => {
    const data = {
      studentName: 'Test Student',
      parentName: 'Test Parent',
      phoneNumber: '9876543210',
      program: prog,
      preferredContactMethod: 'Either (WhatsApp or Call)' as const
    };
    const url = generateWhatsAppUrl(data);
    assert.ok(url.includes(encodeURIComponent(prog)));
  });
});
