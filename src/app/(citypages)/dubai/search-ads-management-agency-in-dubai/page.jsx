import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation for Healthcare in Dubai | Patient Acquisition Experts",
  description:
    "Grow patient inquiries with expert lead generation for healthcare in Dubai. Data-driven Google & Meta campaigns built for clinics & hospitals. Free audit.",
  keywords:
    "healthcare lead generation Dubai, patient acquisition Dubai, clinic marketing agency Dubai, hospital digital marketing Dubai, medical marketing Dubai, dental clinic leads Dubai, doctor appointment leads Dubai, healthcare PPC Dubai, patient leads UAE, healthcare Facebook ads Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/lead-generation-for-healthcare-in-dubai",
  },

  openGraph: {
    title: "Lead Generation for Healthcare in Dubai | Patient Acquisition Experts",
    description:
      "Grow patient inquiries with expert lead generation for healthcare in Dubai. Data-driven Google & Meta campaigns built for clinics & hospitals. Free audit.",
    url: "https://www.zentrixinfotech.com/dubai/lead-generation-for-healthcare-in-dubai",
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
    title: "Lead Generation for Healthcare in Dubai | Patient Acquisition Experts",
    description:
      "Grow patient inquiries with expert lead generation for healthcare in Dubai. Data-driven Google & Meta campaigns built for clinics & hospitals. Free audit.",
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