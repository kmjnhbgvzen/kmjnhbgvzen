import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads Management Agency USA | Expert PPC Campaign Management",
  description:
    "Partner with a trusted Google Ads management agency in the USA. Get expert PPC campaign setup, optimization, and management designed to maximize leads, sales, and ROI.",
  keywords:
    "google ads management agency usa, ppc management agency usa, google ads agency usa, ppc campaign management usa, google ads experts usa, best google ads agency usa, google ads consultant usa, ppc advertising agency, google ads optimization services, paid search management usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/google-ads-management-agency-usa",
  },
  openGraph: {
    title: "Google Ads Management Agency USA | Expert PPC Campaign Management",
    description:
      "Partner with a trusted Google Ads management agency in the USA. Get expert PPC campaign setup, optimization, and management designed to maximize leads, sales, and ROI.",
    url: "https://www.zentrixinfotech.com/saharanpur/google-ads-management-agency-usa",
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
    title: "Google Ads Management Agency USA | Expert PPC Campaign Management",
    description:
      "Partner with a trusted Google Ads management agency in the USA. Get expert PPC campaign setup, optimization, and management designed to maximize leads, sales, and ROI.",
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