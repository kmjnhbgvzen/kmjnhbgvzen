import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Development Moradabad | Zentrix Infotech",
  description:
    "Custom software development in Moradabad by Zentrix Infotech. Tailor-made ERP, CRM, web and mobile software built around your workflow. Get a free quote today.",
  keywords:
    "custom software development moradabad, custom software development company in moradabad, bespoke software development moradabad, custom software solutions moradabad, tailor-made software development, custom ERP software moradabad, custom CRM development moradabad, custom business software moradabad, custom web application development moradabad, custom mobile app development moradabad, software development company moradabad, software developers in moradabad, affordable custom software development, custom software development services india, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-development-moradabad",
  },

  openGraph: {
    title: "Custom Software Development Moradabad | Zentrix Infotech",
    description:
      "Custom software development in Moradabad by Zentrix Infotech. Tailor-made ERP, CRM, web and mobile software built around your workflow. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-software-development-moradabad",
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
    title: "Custom Software Development Moradabad | Zentrix Infotech",
    description:
      "Custom software development in Moradabad by Zentrix Infotech. Tailor-made ERP, CRM, web and mobile software built around your workflow. Get a free quote today.",
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