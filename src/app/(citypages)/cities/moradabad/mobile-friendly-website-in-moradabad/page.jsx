import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Mobile Friendly Website in Moradabad | Zentrix Infotech",
  description: "92% mobile traffic ready websites in Moradabad. Fast, touch-optimized sites for business, e-commerce. React/Next.js mobile-first design. Perfect on local networks",
  keywords: "mobile friendly website in Moradabad, mobile website Moradabad, smartphone website Moradabad, mobile optimized website, responsive mobile design Moradabad, PWA Moradabad, mobile first website, touch friendly website Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/mobile-friendly-website-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Mobile Friendly Website in Moradabad | Zentrix Infotech",

    description:
      "92% mobile traffic ready websites in Moradabad. Fast, touch-optimized sites for business, e-commerce. React/Next.js mobile-first design. Perfect on local networks.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/mobile-friendly-website-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Friendly Website in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Mobile Friendly Website in Moradabad | Zentrix Infotech",

    description:
      "92% mobile traffic ready websites in Moradabad. Fast, touch-optimized sites for business, e-commerce. React/Next.js mobile-first design. Perfect on local networks.",

    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ ✅ ✅ FAVICON
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />  
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients /> 
    </>
  );
}