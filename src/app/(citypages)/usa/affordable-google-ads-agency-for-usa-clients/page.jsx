import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Google Ads Agency for USA Clients",
  description:
    "Looking for an affordable Google Ads agency for USA clients? Get expert PPC management, lower ad spend, higher ROI, and transparent reporting. Get a free audit today.",
  keywords:
    "affordable google ads agency for usa clients, affordable google ads agency, google ads agency usa, cheap ppc agency usa, google ads management services usa, best google ads agency for small business, ppc management company usa, google ads experts usa, low cost google ads agency, google ads agency for startups usa, google adwords agency usa, affordable ppc services usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/affordable-google-ads-agency-for-usa-clients",
  },
  openGraph: {
    title: "Affordable Google Ads Agency for USA Clients",
    description:
      "Looking for an affordable Google Ads agency for USA clients? Get expert PPC management, lower ad spend, higher ROI, and transparent reporting. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/saharanpur/affordable-google-ads-agency-for-usa-clients",
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
    title: "Affordable Google Ads Agency for USA Clients",
    description:
      "Looking for an affordable Google Ads agency for USA clients? Get expert PPC management, lower ad spend, higher ROI, and transparent reporting. Get a free audit today.",
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