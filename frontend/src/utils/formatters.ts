export function formatPhoneNumber(number: string): string {
  const cleaned = ('' + number).replace(/\D/g, ''); // Remove all non-digits
  if (cleaned.length !== 10) return number; // Ensure it's 10 digits

  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : number;
}
