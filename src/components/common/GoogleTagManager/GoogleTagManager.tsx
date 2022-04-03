/**
 * Google Tag Manager
 * This setup produces a warning, however there doesn't seem to be a good solution to loading GTM in Next:
 * Warning: Use the `next/script` component for loading third party scripts. See: https://nextjs.org/docs/messages/next-script-for-ga
 * Using the next/script Script component however causes the main GTM script to load in the footer... against the advice of Google/GTM
 * 
 * The following articles have been used as guidance - both advise to use the _document file:
 * https://dev.to/ornio/add-google-analytics-through-gtm-google-tag-manager-on-next-js-5e4f
 * https://stackoverflow.com/questions/68115650/how-to-load-google-tag-manager-with-next-script-component-next-js-11
 */


// TODO use getEnvironmentVariable utility function to get this environment variable
// GOOGLE_TAG_MANAGER_ID='GTM-XXXXXX'
const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID;

export const GoogleTagManagerScript = () => {

    if (!GOOGLE_TAG_MANAGER_ID) return (<></>)

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-${process.env.GOOGLE_TAG_MANAGER_ID}');`
            }}
        ></script>
    )
}

export const GoogleTagManagerNoScript = () => {

    if (!GOOGLE_TAG_MANAGER_ID) return (<></>)

    return (
        <noscript
            dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${process.env.GOOGLE_TAG_MANAGER_ID}" 
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}>
        </noscript>
    )
}