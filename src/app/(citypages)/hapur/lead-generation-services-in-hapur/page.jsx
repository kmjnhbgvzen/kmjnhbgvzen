import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Hapur | Get Quality Leads for Your Business",
  description:
    "Looking for lead generation services in Hapur? Zentrix Infotech helps local businesses get more calls, enquiries & sales through SEO, ads & digital marketing.",
  keywords:
    "lead generation services in Hapur, lead generation company Hapur, digital marketing agency Hapur, local lead generation services, best lead generation company near me, B2B lead generation Hapur, B2C lead generation services, Google ads lead generation Hapur, Facebook ads lead generation, SEO lead generation company, real estate lead generation Hapur, healthcare lead generation services, lead generation for small business, online lead generation agency UP, sales enquiry generation company Hapur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/lead-generation-services-hapur",
  },
  openGraph: {
    title: "Lead Generation Services in Hapur | Get Quality Leads for Your Business",
    description:
      "Looking for lead generation services in Hapur? Zentrix Infotech helps local businesses get more calls, enquiries & sales through SEO, ads & digital marketing.",
    url: "https://www.zentrixinfotech.com/hapur/lead-generation-services-hapur",
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
    title: "Lead Generation Services in Hapur | Get Quality Leads for Your Business",
    description:
      "Looking for lead generation services in Hapur? Zentrix Infotech helps local businesses get more calls, enquiries & sales through SEO, ads & digital marketing.",
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