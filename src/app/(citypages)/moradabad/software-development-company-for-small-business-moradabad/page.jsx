import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company for Small Business Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad software development company for small business: affordable websites, apps, billing and CRM tools built in phases. Get a free quote.",
  keywords:
    "software development company for small business moradabad, small business software development moradabad, affordable software company moradabad, custom software for small business, small business website and app development moradabad, billing and inventory software moradabad, small business CRM software moradabad, online ordering system for small business, e-commerce for small business moradabad, software for shops and retailers moradabad, software for clinics and pharmacies moradabad, MVP development moradabad, software development company moradabad, IT company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-for-small-business-moradabad",
  },

  openGraph: {
    title:
      "Software Development Company for Small Business Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company for small business: affordable websites, apps, billing and CRM tools built in phases. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-for-small-business-moradabad",
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
      "Software Development Company for Small Business Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company for small business: affordable websites, apps, billing and CRM tools built in phases. Get a free quote.",
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