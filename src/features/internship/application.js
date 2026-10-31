import { GOOGLE_FORM_ACTION, GOOGLE_FORM_ENTRY_IDS, SUBMIT_TIMEOUT_MS, YEAR_OPTIONS, DURATION_OPTIONS } from './config.js';
import { DOMAIN_NAMES } from './content.js';
export const FIELD_ORDER = ['fullName', 'email', 'whatsapp', 'college', 'course', 'year', 'domain', 'duration'];
export const fieldId = (name) => `app-${name}`;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;

/** Strips spaces/hyphens/dots/brackets; returns 10-digit Indian mobile or ''. */
export function normalizeIndianMobile(raw) {
    const cleaned = String(raw ?? '').replace(/[\s\-().]/g, '');
    const match = cleaned.match(/^(?:\+91|91|0)?([6-9]\d{9})$/);
    return match ? match[1] : '';
}

export const lettersIn = (text) => (text.match(/\p{L}/gu) || []).length;

/** Returns an error message, or '' when the value is valid. */
export function validateField(name, rawValue) {
    const value = String(rawValue ?? '').trim();
    switch (name) {
        case 'fullName':
            if (value.length < 2 || value.length > 100 || !NAME_PATTERN.test(value) || lettersIn(value) < 2) {
                return 'Please enter your full name.';
            }
            return '';
        case 'email':
            if (!value || value.length > 254 || !EMAIL_PATTERN.test(value)) {
                return 'Please enter a valid email address.';
            }
            return '';
        case 'whatsapp':
            return normalizeIndianMobile(value) ? '' : 'Please enter a valid 10-digit WhatsApp number.';
        case 'college':
            return value.length >= 2 && value.length <= 150 ? '' : 'Please enter your college or institution name.';
        case 'course':
            return value.length >= 2 && value.length <= 100 ? '' : 'Please enter your course or department.';
        case 'year':
            return YEAR_OPTIONS.includes(rawValue) ? '' : 'Please select your year of study.';
        case 'domain':
            return DOMAIN_NAMES.includes(rawValue) ? '' : 'Please select an internship domain.';
        case 'duration':
            return DURATION_OPTIONS.includes(rawValue) ? '' : 'Please select your preferred internship duration.';
        default:
            return '';
    }
}

export function validateAll(values) {
    const errors = {};
    FIELD_ORDER.forEach((name) => {
        const message = validateField(name, values[name]);
        if (message) errors[name] = message;
    });
    return errors;
}

/**
 * Final gate before anything is sent to Google: re-validates, trims and
 * normalizes. Returns null if anything is wrong.
 */
export function buildPayload(values) {
    if (Object.keys(validateAll(values)).length > 0) return null;
    const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        whatsapp: `+91${normalizeIndianMobile(values.whatsapp)}`,
        college: values.college.trim(),
        course: values.course.trim(),
        year: values.year,
        domain: values.domain,
        duration: values.duration,
    };
    const complete = FIELD_ORDER.every((name) => payload[name] && GOOGLE_FORM_ENTRY_IDS[name]);
    return complete ? payload : null;
}

/**
 * Posts the payload to the Google Form through a hidden iframe. This avoids
 * CORS entirely and keeps the visitor on the page. The response is opaque
 * (cross-origin), so a completed iframe load indicates only an attempted submission and a
 * timeout is treated as failure.
 */
export function submitToGoogleForm(payload) {
    return new Promise((resolve, reject) => {
        const frameName = `gform-target-${Date.now()}`;

        const iframe = document.createElement('iframe');
        iframe.name = frameName;
        iframe.title = 'Application submission';
        iframe.tabIndex = -1;
        iframe.setAttribute('aria-hidden', 'true');
        iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden;';

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = GOOGLE_FORM_ACTION;
        form.target = frameName;
        form.acceptCharset = 'UTF-8';
        form.style.display = 'none';

        Object.entries(GOOGLE_FORM_ENTRY_IDS).forEach(([field, entryId]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = entryId;
            input.value = payload[field];
            form.appendChild(input);
        });

        let settled = false;
        let timer;
        const finish = (callback) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            setTimeout(() => {
                form.remove();
                iframe.remove();
            }, 0);
            callback();
        };

        document.body.append(iframe, form);

        // Attach the listener only after the empty iframe has settled, so its
        // initial blank load is never mistaken for Google's response.
        setTimeout(() => {
            iframe.addEventListener('load', () => finish(resolve));
            timer = setTimeout(() => finish(() => reject(new Error('Submission timed out'))), SUBMIT_TIMEOUT_MS);
            try {
                form.submit();
            } catch (error) {
                finish(() => reject(error));
            }
        }, 0);
    });
}

/* ==========================================================================
   SHARED BUILDING BLOCKS
   ========================================================================== */
