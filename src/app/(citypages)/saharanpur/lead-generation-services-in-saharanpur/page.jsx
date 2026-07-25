import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Saharanpur | Zentrix Infotech",
  description:
    "Generate quality enquiries for your business with lead generation services in Saharanpur. SEO, Google Ads, Meta Ads, WhatsApp marketing, and conversion-focused landing pages.",
  keywords:
    "lead generation services in Saharanpur, lead generation company in Saharanpur, B2B lead generation Saharanpur, Google Ads lead generation Saharanpur, local business leads Saharanpur, SEO leads for business Saharanpur, Meta ads lead generation Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/lead-generation-services-in-saharanpur",
  },
  openGraph: {
    title: "Lead Generation Services in Saharanpur | Zentrix Infotech",
    description:
      "Generate quality enquiries for your business with lead generation services in Saharanpur. SEO, Google Ads, Meta Ads, WhatsApp marketing, and conversion-focused landing pages.",
    url: "https://www.zentrixinfotech.com/saharanpur/lead-generation-services-in-saharanpur",
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
    title: "Lead Generation Services in Saharanpur | Zentrix Infotech",
    description:
      "Generate quality enquiries for your business with lead generation services in Saharanpur. SEO, Google Ads, Meta Ads, WhatsApp marketing, and conversion-focused landing pages.",
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