import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";
export const metadata = {
title: "Custom Software Customization Company | Zentrix Infotech",

  description:
    "Zentrix Infotech is a custom software customization company offering existing software customization, software modification, feature customization, integrations, CRM and ERP customization, workflow automation, and software enhancement services.",

  keywords:
    "custom software customization, software customization services, existing software customization, software modification company, custom software solutions, business software customization, software enhancement company, software feature customization, software integration, API integration, third-party integration, CRM customization, ERP customization, web application customization, mobile application customization, database customization, workflow customization, business process automation, dashboard customization, reporting customization, UI/UX customization, software upgrade, software optimization, free software customization",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-customization-company",
  },

  openGraph: {
    title: "Custom Software Customization Company | Zentrix Infotech",

    description:
      "Get custom software customization services from Zentrix Infotech. We modify and enhance your existing software to match your business workflow, features, integrations, and reporting requirements.",

    url: "https://www.zentrixinfotech.com/moradabad/custom-software-customization-company",

    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Customization Company - Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Custom Software Customization Company | Zentrix Infotech",

    description:
      "Zentrix Infotech provides custom software customization, software integration, CRM customization, ERP customization, automation, and software enhancement services.",

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