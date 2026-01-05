import "./globals.css";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import ContactsButton from "@/components/ContactsButton";
import PopupForm from "@/components/PopupForm";

// ✅ GLOBAL SEO (MERGES with page-level metadata)
export const metadata = {
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ✅ ADD ONLY THIS (GLOBAL FAVICON)
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ EXTRA SAFETY FOR GOOGLE */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />

        {/* ✅ GOOGLE SITE VERIFICATION */}
        <meta
          name="google-site-verification"
          content="NrE50hHl6c-azA8AW6DpgA0bwM54EcK2iL3JOBRgX4Q"
        />

        {/* ✅ GOOGLE TAG MANAGER */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W6ZK9ZLC');
            `,
          }}
        />
        {/* ✅ END GTM */}
      </head>

      <body className="bg-[#FFFAFA]">
        {/* ✅ GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6ZK9ZLC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* ✅ END GTM (noscript) */}

        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <ContactsButton />
        <PopupForm />
      </body>
    </html>
  );
}
