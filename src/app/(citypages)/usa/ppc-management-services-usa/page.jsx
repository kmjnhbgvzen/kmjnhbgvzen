import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Management Services USA | Maximize Ad ROI Fast",
  description:
    "Expert PPC management services in the USA to drive targeted traffic, lower ad costs, and increase conversions. Get a data-driven, results-focused PPC strategy.",
  keywords:
    "ppc management services usa, ppc agency usa, google ads management usa, ppc campaign management, paid search management services, ppc management company, ppc consultant usa, google ads agency usa, paid advertising management usa, ppc optimization services, ppc management for small business, best ppc agency usa",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/ppc-management-services-usa",
  },
  openGraph: {
    title: "PPC Management Services USA | Maximize Ad ROI Fast",
    description:
      "Expert PPC management services in the USA to drive targeted traffic, lower ad costs, and increase conversions. Get a data-driven, results-focused PPC strategy.",
    url: "https://www.zentrixinfotech.com/usa/ppc-management-services-usa",
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
    title: "PPC Management Services USA | Maximize Ad ROI Fast",
    description:
      "Expert PPC management services in the USA to drive targeted traffic, lower ad costs, and increase conversions. Get a data-driven, results-focused PPC strategy.",
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