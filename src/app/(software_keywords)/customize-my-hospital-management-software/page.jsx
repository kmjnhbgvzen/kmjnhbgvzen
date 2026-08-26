import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Customize My Hospital Management Software | Zentrix",
  description:
    "Hospital software not matching your workflow? Zentrix Infotech helps you customize my hospital management software — patient, billing, pharmacy & more. Free offer.",
  keywords:
    "customize my hospital management software, customize my hospital software, customize hospital management software, customize existing hospital software, hospital software customization, hospital ERP customization, hospital management system customization, healthcare software customization, custom hospital software, hospital software modification, medical software customization, hospital management system, hospital ERP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/customize-my-hospital-management-software",
  },
  openGraph: {
    title: "Customize My Hospital Management Software | Zentrix",
    description:
      "Hospital software not matching your workflow? Zentrix Infotech helps you customize my hospital management software — patient, billing, pharmacy & more. Free offer.",
    url: "https://www.zentrixinfotech.com/customize-my-hospital-management-software",
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
    title: "Customize My Hospital Management Software | Zentrix",
    description:
      "Hospital software not matching your workflow? Zentrix Infotech helps you customize my hospital management software — patient, billing, pharmacy & more. Free offer.",
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