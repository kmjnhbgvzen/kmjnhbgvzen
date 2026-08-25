import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Free Software Customization Consultation | Zentrix Infotech",
  description:
    "Get a free software customization consultation from Zentrix Infotech. Discuss your existing software, requirements, and possible fixes — no cost, no obligation.",
  keywords:
    "Free Software Customization Consultation, software customization, software consultation, custom software solutions, existing software customization, software modification, software enhancement, software upgrade, custom software development, business software solutions, software integration, API integration, third-party integration, CRM customization, ERP customization, web application customization, mobile application customization, database customization, workflow automation, software feature development, UI/UX customization, business process automation",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/free-software-customization-consultation",
  },
  openGraph: {
    title: "Free Software Customization Consultation | Zentrix Infotech",
    description:
      "Get a free software customization consultation from Zentrix Infotech. Discuss your existing software, requirements, and possible fixes — no cost, no obligation.",
    url: "https://www.zentrixinfotech.com/moradabad/free-software-customization-consultation",
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
    title: "Free Software Customization Consultation | Zentrix Infotech",
    description:
      "Get a free software customization consultation from Zentrix Infotech. Discuss your existing software, requirements, and possible fixes — no cost, no obligation.",
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