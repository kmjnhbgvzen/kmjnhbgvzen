import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Business Software Development Cost | Zentrix Infotech",
  description:
    "Understand the real cost of custom business software development. Get transparent pricing for ERP, CRM, and enterprise solutions from Zentrix Infotech.",
  keywords:
    "business software development cost, custom software development pricing, software development cost India, ERP development cost, CRM development cost, affordable business software, software development estimate",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/business-software-development-cost",
  },
  openGraph: {
    title: "Business Software Development Cost | Zentrix Infotech",
    description:
      "Understand the real cost of custom business software development. Get transparent pricing for ERP, CRM, and enterprise solutions from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/business-software-development-cost",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Business Software Development Cost | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Software Development Cost | Zentrix Infotech",
    description:
      "Understand the real cost of custom business software development. Get transparent pricing for ERP, CRM, and enterprise solutions from Zentrix Infotech.",
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
