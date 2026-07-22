import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Search Ads Management Agency USA | Expert Google Search Campaigns",
  description:
    "Maximize visibility and conversions with expert search ads management services in the USA. Get keyword-targeted Google Search campaigns designed to drive qualified traffic and sales.",
  keywords:
    "search ads management agency usa, google search ads agency usa, search ppc management usa, search advertising services usa, search ads experts usa, best search ads agency usa, search ads consultant usa, google search campaign management, paid search management services, search advertising agency usa",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/search-ads-management-agency-usa",
  },
  openGraph: {
    title: "Search Ads Management Agency USA | Expert Google Search Campaigns",
    description:
      "Maximize visibility and conversions with expert search ads management services in the USA. Get keyword-targeted Google Search campaigns designed to drive qualified traffic and sales.",
    url: "https://www.zentrixinfotech.com/usa/search-ads-management-agency-usa",
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
    title: "Search Ads Management Agency USA | Expert Google Search Campaigns",
    description:
      "Maximize visibility and conversions with expert search ads management services in the USA. Get keyword-targeted Google Search campaigns designed to drive qualified traffic and sales.",
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