import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Digital Marketing Agency in Moradabad | Grow Your Business Online",
  description: "Get affordable digital marketing services in Moradabad for local businesses. SEO, Google Ads, and social media marketing to generate real leads.",
  keywords: "digital marketing agency Moradabad, marketing services, online marketing, growth hacking, SEO Moradabad, Google Ads Moradabad, social media marketing Moradabad, digital marketing services in Moradabad, online marketing services in Moradabad, SEO services in Moradabad, Google Ads services in Moradabad, social media marketing services in Moradabad, local digital marketing services",
  
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/digital-marketing-agency-in-moradabad",
  },

  // ✅ ✅ ✅ OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "Digital Marketing Agency in Moradabad | Grow Your Business Online",

    description:
      "Get affordable digital marketing services in Moradabad for local businesses. SEO, Google Ads, and social media marketing to generate real leads.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/digital-marketing-agency-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency in Moradabad | Grow Your Business Online",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ ✅ ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Agency in Moradabad | Grow Your Business Online",

    description:
      "Get affordable digital marketing services in Moradabad for local businesses. SEO, Google Ads, and social media marketing to generate real leads.",

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