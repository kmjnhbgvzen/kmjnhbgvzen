import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Small Business Website in Moradabad | Zentrix Infotech",
  description: "Professional small business websites in Moradabad for cafés, clinics, shops. Mobile-optimized, SEO-ready, lead-generating sites. Fast launch for local businesses.",
  keywords: "small business website in Moradabad, business website Moradabad, local business website, café website Moradabad, clinic website Moradabad, shop website Moradabad, service provider website, startup website Moradabad",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/small-business-website-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Small Business Website in Moradabad | Zentrix Infotech",

    description:
      "Professional small business websites in Moradabad for cafés, clinics, shops. Mobile-optimized, SEO-ready, lead-generating sites. Fast launch for local businesses. ",

    url: "https://www.zentrixinfotech.com/cities/moradabad/small-business-website-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Small Business Website in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Small Business Website in Moradabad | Zentrix Infotech",

    description:
      "Professional small business websites in Moradabad for cafés, clinics, shops. Mobile-optimized, SEO-ready, lead-generating sites. Fast launch for local businesses. ",

    images: ["https://zentrixinfotech.com/zentrix_logo.jpg"],
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