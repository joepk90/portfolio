/**
 * Google Tag Manager: Opt Out Cookie
 * https://stackoverflow.com/questions/37052310/disable-google-tag-manager-according-to-the-decision-of-single-users-opt-out#answer-37066422
 * 
 * Opt Out Cookie variable (1st Party Cookie) set in GTM dashboard
 * Opt Out Trigger set in GTM dashboard
 * Trigger applied to Google Analytics 4 tag as an exception
 * 
 * The Google Analytics 4 Tag won't fire if the Opt Out Cookie is set and equals 'true'
 */

const GTM_OPT_OUT_COOKIE_NAME = 'gtm-opt-out-cookie';

export const setGTMOptOutCookie = () => {
    document.cookie = `${GTM_OPT_OUT_COOKIE_NAME}=true; expires="Fri, 31 Dec 9999 23:59:59 GMT";`;
}
