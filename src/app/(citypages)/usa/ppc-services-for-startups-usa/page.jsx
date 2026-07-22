import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Services for Startups USA | Affordable Google Ads & PPC Management",
  description:
    "Looking for PPC services for startups in the USA? Get expert Google Ads management, lower customer acquisition costs, and faster growth on any budget. Get a free audit today.",
  keywords:
    "ppc services for startups usa, ppc for startups, startup ppc agency usa, google ads for startups usa, ppc management for startups, affordable ppc services usa, startup marketing agency usa, ppc agency for small business usa, ppc services for new business usa, digital marketing for startups usa, google ads startup budget, ppc campaign management usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/ppc-services-for-startups-usa",
  },
  openGraph: {
    title: "PPC Services for Startups USA | Affordable Google Ads & PPC Management",
    description:
      "Looking for PPC services for startups in the USA? Get expert Google Ads management, lower customer acquisition costs, and faster growth on any budget. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/saharanpur/ppc-services-for-startups-usa",
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
    title: "PPC Services for Startups USA | Affordable Google Ads & PPC Management",
    description:
      "Looking for PPC services for startups in the USA? Get expert Google Ads management, lower customer acquisition costs, and faster growth on any budget. Get a free audit today.",
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