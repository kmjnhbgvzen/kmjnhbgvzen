import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation for Real Estate in Dubai | Qualified Buyer Leads",
  description:
    "Get high-quality lead generation for real estate in Dubai. Data-driven Google & Meta campaigns that bring genuine buyer and investor inquiries. Free audit.",
  keywords:
    "real estate lead generation Dubai, property leads Dubai, real estate marketing agency Dubai, real estate PPC Dubai, off plan property leads Dubai, real estate digital marketing Dubai, buyer leads Dubai, real estate Facebook ads Dubai, real estate agency marketing Dubai, property investor leads UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/lead-generation-for-real-estate-in-dubai",
  },

  openGraph: {
    title: "Lead Generation for Real Estate in Dubai | Qualified Buyer Leads",
    description:
      "Get high-quality lead generation for real estate in Dubai. Data-driven Google & Meta campaigns that bring genuine buyer and investor inquiries. Free audit.",
    url: "https://www.zentrixinfotech.com/dubai/lead-generation-for-real-estate-in-dubai",
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
    title: "Lead Generation for Real Estate in Dubai | Qualified Buyer Leads",
    description:
      "Get high-quality lead generation for real estate in Dubai. Data-driven Google & Meta campaigns that bring genuine buyer and investor inquiries. Free audit.",
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