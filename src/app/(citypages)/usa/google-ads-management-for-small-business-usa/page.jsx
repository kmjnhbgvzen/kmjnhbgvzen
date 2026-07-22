import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads Management for Small Business USA | Expert PPC Growth",
  description:
    "Grow your small business with expert Google Ads management services in the USA. Get targeted, budget-friendly PPC campaigns designed to generate leads, calls, and sales.",
  keywords:
    "google ads management for small business usa, small business ppc agency usa, google ads for small business owners, ppc management for small business usa, small business google ads experts, best ppc agency for small business usa, affordable google ads management usa, small business paid search services, local google ads management, small business ppc consultant",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/google-ads-management-for-small-business-usa",
  },
  openGraph: {
    title: "Google Ads Management for Small Business USA | Expert PPC Growth",
    description:
      "Grow your small business with expert Google Ads management services in the USA. Get targeted, budget-friendly PPC campaigns designed to generate leads, calls, and sales.",
    url: "https://www.zentrixinfotech.com/usa/google-ads-management-for-small-business-usa",
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
    title: "Google Ads Management for Small Business USA | Expert PPC Growth",
    description:
      "Grow your small business with expert Google Ads management services in the USA. Get targeted, budget-friendly PPC campaigns designed to generate leads, calls, and sales.",
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