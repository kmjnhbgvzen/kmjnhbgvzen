import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Saharanpur | Get Verified Leads",
  description:
    "Get high-quality, verified leads for your business with expert lead generation services in Saharanpur. B2B & B2C leads. Free consultation — call now!",
  keywords:
    "lead generation services in Saharanpur, lead generation company in Saharanpur, digital marketing agency in Saharanpur, B2B lead generation Saharanpur, B2C lead generation services Saharanpur, best lead generation agency Saharanpur, UP online lead generation company near me, SEO leads for business Saharanpur, Google Ads lead generation Saharanpur, local business leads Saharanpur, lead generation for manufacturers Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/lead-generation-services-saharanpur",
  },
  openGraph: {
    title: "Lead Generation Services in Saharanpur | Get Verified Leads",
    description:
      "Get high-quality, verified leads for your business with expert lead generation services in Saharanpur. B2B & B2C leads. Free consultation — call now!",
    url: "https://www.zentrixinfotech.com/saharanpur/lead-generation-services-saharanpur",
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
    title: "Lead Generation Services in Saharanpur | Get Verified Leads",
    description:
      "Get high-quality, verified leads for your business with expert lead generation services in Saharanpur. B2B & B2C leads. Free consultation — call now!",
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