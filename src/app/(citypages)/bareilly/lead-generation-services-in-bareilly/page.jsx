import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Bareilly | Get Quality Sales Leads",
  description:
    "Grow your business in Bareilly with expert lead generation services — SEO, Google Ads, social media and WhatsApp campaigns that deliver real, sales-ready enquiries.",
  keywords:
    "lead generation services in Bareilly, lead generation agency Bareilly, B2B lead generation company, digital marketing lead generation, local business lead generation, Google Ads lead generation Bareilly, best lead generation agency India, sales leads company Bareilly, lead generation for small business, real estate lead generation Bareilly, healthcare lead generation services",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/lead-generation-services-bareilly",
  },

  openGraph: {
    title: "Lead Generation Services in Bareilly | Get Quality Sales Leads",
    description:
      "Grow your business in Bareilly with expert lead generation services — SEO, Google Ads, social media and WhatsApp campaigns that deliver real, sales-ready enquiries.",
    url: "https://www.zentrixinfotech.com/bareilly/lead-generation-services-in-bareilly",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Services in Bareilly | Get Quality Sales Leads",
    description:
      "Grow your business in Bareilly with expert lead generation services — SEO, Google Ads, social media and WhatsApp campaigns that deliver real, sales-ready enquiries.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

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