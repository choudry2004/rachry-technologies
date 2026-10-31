// Opt-in adapter: no analytics script or requests occur until an owner-configured
// integration calls enableAnalytics after obtaining visitor consent.
let enabled = false;
let listening = false;
export function enableAnalytics(measurementId) {
 if (!/^G-[A-Z0-9]+$/.test(measurementId) || enabled) return;
 enabled = true;
 window.dataLayer = window.dataLayer || [];
 window.gtag = (...args) => window.dataLayer.push(args);
 window.gtag('js', new Date());
 window.gtag('config', measurementId, { send_page_view: false });
 const script = document.createElement('script');
 script.async = true;
 script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
 document.head.appendChild(script);
 if (!listening) {
  listening = true;
  document.addEventListener('click', event => {
   const link = event.target.closest?.('a');
   if (!link) return;
   const href = link.getAttribute('href') || '';
   const type = href.startsWith('mailto:') ? 'email_click' : href.startsWith('tel:') ? 'phone_click' : /^(https:\/\/)?(wa.me|api.whatsapp.com)\//.test(href) ? 'whatsapp_click' : href === '/contact' ? 'contact_cta_click' : null;
   if (type) trackConversion(type);
  });
 }
}
export function trackConversion(name) {
 const allowed = ['contact_form_success','contact_cta_click','email_click','phone_click','whatsapp_click','service_cta_click'];
 if (enabled && allowed.includes(name)) window.gtag?.('event', name);
}
