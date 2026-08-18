import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "PPC Google Ads Agency in Hapur | Zentrix Infotech",
  description:
    "Looking for a PPC Google Ads agency in Hapur? Get targeted campaigns, keyword research, ad optimization, conversion tracking and data-driven strategies for quality leads.",
  keywords:
    "PPC Google Ads agency in Hapur, PPC company in Hapur, Google Ads agency in Hapur, PPC services in Hapur, Google Ads management in Hapur, pay per click advertising agency in Hapur, Google advertising company in Hapur, PPC management services in Hapur, Google Ads expert in Hapur, paid advertising agency in Hapur, lead generation company in Hapur, search ads agency in Hapur, display advertising services in Hapur, YouTube Ads agency in Hapur, Shopping Ads management, performance marketing agency in Hapur, conversion tracking services, custom school management software, inventory management software, custom billing software, custom CRM software, best PPC Google Ads agency in Hapur, professional Google Ads management services in Hapur, PPC advertising company for local businesses in Hapur, Google Ads agency for lead generation in Hapur, affordable PPC management services in Hapur, Google Search Ads company in Hapur, conversion focused Google Ads campaigns, custom school management software development, customized inventory management software for business, billing and CRM software development company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/ppc-google-ads-agency-in-hapur",
  },
  openGraph: {
    title: "PPC Google Ads Agency in Hapur | Zentrix Infotech",
    description:
      "Looking for a PPC Google Ads agency in Hapur? Get targeted campaigns, keyword research, ad optimization, conversion tracking and data-driven strategies for quality leads.",
    url: "https://www.zentrixinfotech.com/hapur/ppc-google-ads-agency-in-hapur",
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
    title: "PPC Google Ads Agency in Hapur | Zentrix Infotech",
    description:
      "Looking for a PPC Google Ads agency in Hapur? Get targeted campaigns, keyword research, ad optimization, conversion tracking and data-driven strategies for quality leads.",
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