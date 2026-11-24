import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Development Company in Lucknow | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted development company for Lucknow businesses: custom websites, software, mobile apps, UI/UX and cloud solutions. Get a free quote.",
  keywords:
    "development company in Lucknow, software development company in Lucknow, web development company in Lucknow, mobile app development company in Lucknow, IT company in Lucknow, custom software development Lucknow, website development Lucknow, app developers in Lucknow, UI UX design company Lucknow, cloud solutions Lucknow, ecommerce development Lucknow, affordable IT services Lucknow, software company Uttar Pradesh, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/development-company-in-lucknow",
  },

  openGraph: {
    title: "Development Company in Lucknow | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted development company for Lucknow businesses: custom websites, software, mobile apps, UI/UX and cloud solutions. Get a free quote.",
    url: "https://www.zentrixinfotech.com/lucknow/development-company-in-lucknow",
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
    title: "Development Company in Lucknow | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted development company for Lucknow businesses: custom websites, software, mobile apps, UI/UX and cloud solutions. Get a free quote.",
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