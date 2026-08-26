import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Customize My School Management Software | Zentrix",
  description:
    "School software not matching your academic workflow? Zentrix Infotech helps you customize my school management software — free customization offer. Enquire today.",
  keywords:
    "customize my school management software, customize my school software, customize school management software, customize existing school management software, school software customization, school ERP customization, school management system customization, custom school ERP, education software customization, student management software customization, school management system",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/customize-my-school-management-software",
  },
  openGraph: {
    title: "Customize My School Management Software | Zentrix",
    description:
      "School software not matching your academic workflow? Zentrix Infotech helps you customize my school management software — free customization offer. Enquire today.",
    url: "https://www.zentrixinfotech.com/customize-my-school-management-software",
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
    title: "Customize My School Management Software | Zentrix",
    description:
      "School software not matching your academic workflow? Zentrix Infotech helps you customize my school management software — free customization offer. Enquire today.",
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