import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Email Marketing Services in Bareilly | Zentrix Infotech",
  description:
    "Grow your business with expert email marketing services in Bareilly by Zentrix Infotech. Boost leads, sales & ROI with result-driven, affordable email campaigns.",
  keywords:
    "email marketing services in Bareilly, email marketing company Bareilly, bulk email marketing Bareilly, best email marketing agency Bareilly, email marketing agency near me, digital marketing company Bareilly, email campaign services Bareilly, affordable email marketing Bareilly, B2B email marketing Bareilly, email automation services Bareilly, professional email marketing company, email marketing for small business Bareilly",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/email-marketing-services-bareilly",
  },

  openGraph: {
    title: "Email Marketing Services in Bareilly | Zentrix Infotech",
    description:
      "Grow your business with expert email marketing services in Bareilly by Zentrix Infotech. Boost leads, sales & ROI with result-driven, affordable email campaigns.",
    url: "https://www.zentrixinfotech.com/bareilly/email-marketing-services-in-bareilly",
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
    title: "Email Marketing Services in Bareilly | Zentrix Infotech",
    description:
      "Grow your business with expert email marketing services in Bareilly by Zentrix Infotech. Boost leads, sales & ROI with result-driven, affordable email campaigns.",
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