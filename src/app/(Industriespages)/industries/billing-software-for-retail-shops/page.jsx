import React from "react";
import Content from "./Content";

// ✅ SEO METADATA FOR DIGITAL MARKETING FOR DOCTORS PAGE
export const metadata = {
  title:
    "Billing Software for Retail Shops | Generate More Leads with Zentrix",

  description:
    "billing software for retail shops, retail billing software, POS software for retail stores, best billing software for shop, retail management software, cloud billing software, inventory and billing software, billing software India, retail POS system, billing software for small retail business, automated billing solution, Zentrix billing software, retail software to increase sales, smart billing system for retailers, billing software to generate leads",

  keywords: [
    "digital marketing for doctors",
    "medical marketing",
    "healthcare marketing",
    "doctor SEO",
    "clinic marketing",
    "patient acquisition",
    "medical practice growth",
    "doctor advertising",
    "healthcare SEO",
    "medical clinic marketing",
    "hospital digital marketing",
    "doctor online marketing india",
    "clinic lead generation",
    "medical reputation management",
  ],

  // ✅ CANONICAL URL
  alternates: {
    canonical: "https://www.zentrixinfotech.com/industries/billing-software-for-retail-shops",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Billing Software for Retail Shops | Generate More Leads with Zentrix Infotech",
    description:
      "Boost sales and attract more customers with smart billing software for retail shops. Discover how Zentrix helps automate billing, manage inventory, and grow your retail business faster.",
    url: "https://www.zentrixinfotech.com/industries/billing-software-for-retail-shops",
    siteName: "Zentrix Infotech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing for Doctors and Medical Clinics",
      },
    ],
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Billing Software for Retail Shops | Generate More Leads with Zentrix",
    description:
      "Boost sales and attract more customers with smart billing software for retail shops. Discover how Zentrix helps automate billing, manage inventory, and grow your retail business faster.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon-v2.ico",
  },
};

// ✅ DIGITAL MARKETING FOR DOCTORS PAGE COMPONENT
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;