import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Landing Page Design in Moradabad | Zentrix Infotech",
  description: "High-converting landing page design in Moradabad. Facebook/Google Ads pages, product launches, lead magnets. Mobile-optimized, A/B tested. 267% avg lift.",
  keywords: "landing page design in Moradabad, high converting landing pages Moradabad, Facebook ads landing page, Google ads landing page Moradabad, campaign landing page, product launch page Moradabad, lead generation landing page",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/landing-page-design-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Landing Page Design in Moradabad | Zentrix Infotech",

    description:
      "High-converting landing page design in Moradabad. Facebook/Google Ads pages, product launches, lead magnets. Mobile-optimized, A/B tested. 267% avg lift.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/landing-page-design-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Page Design in Moradabad | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Landing Page Design in Moradabad | Zentrix Infotech",

    description:
      "High-converting landing page design in Moradabad. Facebook/Google Ads pages, product launches, lead magnets. Mobile-optimized, A/B tested. 267% avg lift.",

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