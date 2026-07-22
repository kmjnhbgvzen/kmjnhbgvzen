import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Services for Real Estate USA | Expert Lead Generation Ads",
  description:
    "Generate qualified buyer and seller leads with expert PPC services for real estate in the USA. Get targeted Google Ads and remarketing campaigns built to grow your listings and closings.",
  keywords:
    "ppc services for real estate usa, real estate ppc agency usa, ppc management for realtors, google ads for real estate agents usa, real estate ppc experts usa, best ppc agency for real estate usa, real estate lead generation ads, ppc advertising for realtors, real estate paid search services, real estate remarketing campaigns usa",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/ppc-services-for-real-estate-usa",
  },
  openGraph: {
    title: "PPC Services for Real Estate USA | Expert Lead Generation Ads",
    description:
      "Generate qualified buyer and seller leads with expert PPC services for real estate in the USA. Get targeted Google Ads and remarketing campaigns built to grow your listings and closings.",
    url: "https://www.zentrixinfotech.com/usa/ppc-services-for-real-estate-usa",
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
    title: "PPC Services for Real Estate USA | Expert Lead Generation Ads",
    description:
      "Generate qualified buyer and seller leads with expert PPC services for real estate in the USA. Get targeted Google Ads and remarketing campaigns built to grow your listings and closings.",
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