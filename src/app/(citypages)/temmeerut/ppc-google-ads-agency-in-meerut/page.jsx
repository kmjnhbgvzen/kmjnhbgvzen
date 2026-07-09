import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Google Ads Agency in Meerut | Google Ads Management Services | Zentrix Infotech",
  description:
    "Looking for the best PPC Google Ads Agency in Meerut? Zentrix Infotech creates high-converting Google Ads campaigns that generate quality leads, increase website traffic, and maximize ROI for businesses of all sizes.",
  keywords:
    "PPC Google Ads Agency in Meerut, Google Ads Management Meerut, PPC Services Meerut, Google Ads Company Meerut, Google Ads Expert Meerut, Paid Advertising Services Meerut, Search Ads Agency Meerut, Display Ads Meerut, Lead Generation Agency Meerut, PPC Management Company UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/ppc-google-ads-agency-in-meerut",
  },
  openGraph: {
    title:
      "PPC Google Ads Agency in Meerut | Google Ads Management Services | Zentrix Infotech",
    description:
      "Looking for the best PPC Google Ads Agency in Meerut? Zentrix Infotech creates high-converting Google Ads campaigns that generate quality leads, increase website traffic, and maximize ROI for businesses of all sizes.",
    url: "https://www.zentrixinfotech.com/meerut/ppc-google-ads-agency-in-meerut",
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
      "PPC Google Ads Agency in Meerut | Google Ads Management Services | Zentrix Infotech",
    description:
      "Looking for the best PPC Google Ads Agency in Meerut? Zentrix Infotech creates high-converting Google Ads campaigns that generate quality leads, increase website traffic, and maximize ROI for businesses of all sizes.",
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