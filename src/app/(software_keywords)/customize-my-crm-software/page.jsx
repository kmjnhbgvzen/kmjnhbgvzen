import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Customize My CRM Software | Zentrix Infotech",
  description:
    "Is your CRM not matching your sales process? Zentrix Infotech helps you customize my CRM software with your workflow — free customization offer. Talk to us today.",
  keywords:
    "CRM feature customization, CRM workflow customization, CRM automation customization, CRM integration services, Custom CRM development, Free CRM customization, Business CRM customization, CRM dashboard customization, CRM reports and analytics, Sales pipeline customization, Lead management customization, Follow-up automation CRM, CRM user roles and permissions, API and third-party integration CRM",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/customize-my-crm-software",
  },
  openGraph: {
    title: "Customize My CRM Software | Zentrix Infotech",
    description:
      "Is your CRM not matching your sales process? Zentrix Infotech helps you customize my CRM software with your workflow — free customization offer. Talk to us today.",
    url: "https://www.zentrixinfotech.com/moradabad/customize-my-crm-software",
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
    title: "Customize My CRM Software | Zentrix Infotech",
    description:
      "Is your CRM not matching your sales process? Zentrix Infotech helps you customize my CRM software with your workflow — free customization offer. Talk to us today.",
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