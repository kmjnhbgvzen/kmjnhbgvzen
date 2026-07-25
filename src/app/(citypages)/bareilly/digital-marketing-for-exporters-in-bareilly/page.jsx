import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Exporters in Bareilly | Zentrix Infotech",
  description:
    "Grow your export business in Bareilly with expert digital marketing, SEO, and international lead generation strategies from Zentrix Infotech. Get more global buyer inquiries today.",
  keywords:
    "digital marketing for exporters in Bareilly, exporter SEO Bareilly, B2B export marketing UP, export website design Bareilly, international lead generation India, export digital marketing agency, Bareilly exporter business growth, zari zardozi exporter marketing, handicraft exporter SEO, furniture exporter digital marketing, Zentrix Infotech Bareilly, export lead generation agency, Google Ads for exporters, exporter online marketing UP, B2B SEO services Bareilly",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-exporters-bareilly",
  },
  openGraph: {
    title: "Digital Marketing for Exporters in Bareilly | Zentrix Infotech",
    description:
      "Grow your export business in Bareilly with expert digital marketing, SEO, and international lead generation strategies from Zentrix Infotech. Get more global buyer inquiries today.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-exporters-in-bareilly",
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
    title: "Digital Marketing for Exporters in Bareilly | Zentrix Infotech",
    description:
      "Grow your export business in Bareilly with expert digital marketing, SEO, and international lead generation strategies from Zentrix Infotech. Get more global buyer inquiries today.",
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