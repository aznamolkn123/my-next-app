import React from 'react'
import Script from "next/script";

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YX7K6K5YS4" />
            <Script>
                {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YX7K6K5YS4');`}
            </Script>
        </>
    )
}

export default GoogleAnalyticsScript