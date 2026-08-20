import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Customization Services | Zentrix Infotech",
  description:
    "Get expert Software Customization Services at Zentrix Infotech. We modify your existing software to match your workflow — currently free of cost. Contact us today.",
  keywords:
    "Software customization services Moradabad, software-customization-services, Custom software development Moradabad, Software customization company Moradabad, Business software customization services, Tailored software solutions Moradabad, Custom software solutions for small business, Zentrix Infotech software customization, ERP customization services, CRM customization Moradabad, Software modification services, Legacy software customization, Custom software development company Uttar Pradesh, Affordable custom software Moradabad, Software development company near me, Custom business management software, Software integration services Moradabad, Enterprise software customization",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-customization-services",
  },
  openGraph: {
    title: "Software Customization Services | Zentrix Infotech",
    description:
      "Get expert Software Customization Services at Zentrix Infotech. We modify your existing software to match your workflow — currently free of cost. Contact us today.",
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
    title: "Software Customization Services | Zentrix Infotech",
    description:
      "Get expert Software Customization Services at Zentrix Infotech. We modify your existing software to match your workflow — currently free of cost. Contact us today.",
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