import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads Agency for Small Business USA | Expert PPC Management",
  description:
    "Looking for a Google Ads agency for small business in the USA? Get expert campaign setup, local targeting, and measurable ROI on any budget. Get a free audit today.",
  keywords:
    "google ads agency for small business usa, small business google ads agency, google ads for small business, ppc agency for small business usa, local google ads management, small business ppc services usa, affordable google ads for small business, google ads company usa, small business marketing agency usa, google ads management for local business",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/google-ads-agency-for-small-business-usa",
  },
  openGraph: {
    title: "Google Ads Agency for Small Business USA | Expert PPC Management",
    description:
      "Looking for a Google Ads agency for small business in the USA? Get expert campaign setup, local targeting, and measurable ROI on any budget. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/saharanpur/google-ads-agency-for-small-business-usa",
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
    title: "Google Ads Agency for Small Business USA | Expert PPC Management",
    description:
      "Looking for a Google Ads agency for small business in the USA? Get expert campaign setup, local targeting, and measurable ROI on any budget. Get a free audit today.",
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