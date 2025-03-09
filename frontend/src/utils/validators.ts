export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// This only validates 10 digit phone numbers so it assumes US phone numbers
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
  return phoneRegex.test(phone);
}
