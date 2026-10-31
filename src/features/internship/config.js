// Existing program configuration and Google Form mappings. Change only with owner confirmation.
export const GOOGLE_FORM_ACTION =
    'https://docs.google.com/forms/d/e/1FAIpQLSfv0lFVmkFezf0UIw5jcz5Y85U4Wub_Kq8biPPU4D9IXJo1mA/formResponse';

export const GOOGLE_FORM_ENTRY_IDS = {
    fullName: 'entry.737853904',
    email: 'entry.1696695830',
    whatsapp: 'entry.670417241',
    college: 'entry.1586139621',
    course: 'entry.1813354978',
    year: 'entry.1601629037',
    domain: 'entry.651477932',
    duration: 'entry.8336861',
};

/** How long to wait for Google to respond before treating the submit as failed. */
export const SUBMIT_TIMEOUT_MS = 20000;

/** PRICING — change here and it updates everywhere on the page */
export const PRICING = { offer: '₹999' };
export const APPLY_LABEL = `Apply for Internship – ${PRICING.offer}`;
export const PROGRAM_NAME = 'Rachry Technologies – Virtual Internship Program';

/**
 * FORM DROPDOWN OPTIONS — must match the Google Form option text EXACTLY
 * (spelling, spaces, slashes), otherwise Google rejects the value.
 */
export const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', 'Final Year', 'Graduate'];
// Kept as already configured in the project. Confirm these match the Google Form.
export const DURATION_OPTIONS = ['1 Month', '2 Months', '3 Months'];

/* ==========================================================================
   CONTENT DATA — edit copy here, not in the JSX below
   ========================================================================== */


// Owner confirmed applications are open on 31 October 2026. Reconfirm before changing availability.
export const APPLICATIONS_STATUS = 'Applications open';
