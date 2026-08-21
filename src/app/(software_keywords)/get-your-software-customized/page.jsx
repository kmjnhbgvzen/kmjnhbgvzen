import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Get Your Software Customized | Zentrix Infotech",
  description:
    "Get your software customized to fit your business by Zentrix Infotech. Free software customization offer — share your requirements and start today.",
  keywords:
    "customize your existing software, software customization, existing software customization, custom software modification, software feature customization, software enhancement, custom software solutions, CRM customization, ERP customization, web application customization, mobile application customization, API integration, third-party integration, database customization, workflow automation, UI/UX customization, dashboard customization, reporting customization, business process automation, software upgrade, free software customization",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-customization-services",
  },
  openGraph: {
    title: "Get Your Software Customized | Zentrix Infotech",
    description:
      "Get your software customized to fit your business by Zentrix Infotech. Free software customization offer — share your requirements and start today.",
    url: "https://www.zentrixinfotech.com/moradabad/software-customization-services",
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
    title: "Get Your Software Customized | Zentrix Infotech",
    description:
      "Get your software customized to fit your business by Zentrix Infotech. Free software customization offer — share your requirements and start today.",
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