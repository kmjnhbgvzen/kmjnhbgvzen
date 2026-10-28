import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Services Moradabad | Zentrix Infotech",
  description:
    "Software development services in Moradabad built around your business needs: sales, billing, inventory, HR and customer tools. Zentrix Infotech. Get a free quote.",
  keywords:
    "software development services Moradabad, business software development services Moradabad, custom software services Moradabad, software solutions for business Moradabad, billing and inventory software Moradabad, ERP and CRM services Moradabad, web and mobile software services, software integration services Moradabad, software support services Moradabad, IT services Moradabad, software outsourcing services Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabadsoftware-development-services-moradabad",
  },

  openGraph: {
    title:
      "Software Development Services Moradabad | Zentrix Infotech",
    description:
      "Software development services in Moradabad built around your business needs: sales, billing, inventory, HR and customer tools. Zentrix Infotech. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-services-moradabad",
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
    title:
      "Software Development Services Moradabad | Zentrix Infotech",
    description:
      "Software development services in Moradabad built around your business needs: sales, billing, inventory, HR and customer tools. Zentrix Infotech. Get a free quote.",
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