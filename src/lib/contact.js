import { contactEndpoint } from '../config/integrations.js';

// Formspree owns server-side validation and delivery. An OK response confirms
// acceptance by the provider, not delivery to the owner's inbox.
export async function sendContactEnquiry(payload) {
 const response = await fetch(contactEndpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(15000),
 });
 if (!response.ok) throw new Error('Contact provider rejected the enquiry');
}
