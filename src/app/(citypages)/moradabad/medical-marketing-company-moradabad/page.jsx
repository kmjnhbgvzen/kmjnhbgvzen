import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Medical Marketing Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a medical marketing company in Moradabad helping hospitals, clinics and doctors get more patients through websites, SEO, ads and content.",
  keywords:
    "medical marketing company Moradabad, medical marketing services Moradabad, healthcare marketing company Moradabad, hospital marketing company Moradabad, clinic marketing company Moradabad, medical website and SEO Moradabad, doctor marketing company, patient enquiry marketing Moradabad, medical digital marketing Moradabad, healthcare promotion services Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-company-moradabad",
  },

  openGraph: {
    title:
      "Medical Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a medical marketing company in Moradabad helping hospitals, clinics and doctors get more patients through websites, SEO, ads and content.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-company-moradabad",
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
    title:
      "Medical Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a medical marketing company in Moradabad helping hospitals, clinics and doctors get more patients through websites, SEO, ads and content.",
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