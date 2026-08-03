import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "CRM Development Services in Hapur | Custom CRM Software Experts",
  description:
    "Get custom CRM development services in Hapur to track leads, automate follow-ups & manage customer relationships better with software built for your sales process.",
  keywords:
    "CRM development services in Hapur, custom CRM software Hapur, CRM development company near me, sales CRM software India, lead management system Hapur, customer relationship management software, CRM for small business India, CRM automation services, custom CRM pricing India, CRM integration services, CRM software development company, sales pipeline management software",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/crm-development-services-hapur",
  },
  openGraph: {
    title: "CRM Development Services in Hapur | Custom CRM Software Experts",
    description:
      "Get custom CRM development services in Hapur to track leads, automate follow-ups & manage customer relationships better with software built for your sales process.",
    url: "https://www.zentrixinfotech.com/hapur/crm-development-services-hapur",
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
    title: "CRM Development Services in Hapur | Custom CRM Software Experts",
    description:
      "Get custom CRM development services in Hapur to track leads, automate follow-ups & manage customer relationships better with software built for your sales process.",
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