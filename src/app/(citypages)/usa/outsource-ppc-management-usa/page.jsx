import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Outsource PPC Management USA | Expert Ad Campaign Support",
  description:
    "Outsource PPC management to experts in the USA and save time and ad spend. Get professional Google Ads campaigns without hiring an in-house team.",
  keywords:
    "outsource ppc management usa, outsource google ads management, outsourced ppc services usa, ppc outsourcing company, outsource paid search management, outsource ppc for small business, ppc management outsourcing usa, hire ppc management team, outsourced digital advertising usa, outsource ppc agency, third party ppc management, outsource paid ads management",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/outsource-ppc-management-usa",
  },
  openGraph: {
    title: "Outsource PPC Management USA | Expert Ad Campaign Support",
    description:
      "Outsource PPC management to experts in the USA and save time and ad spend. Get professional Google Ads campaigns without hiring an in-house team.",
    url: "https://www.zentrixinfotech.com/usa/outsource-ppc-management-usa",
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
    title: "Outsource PPC Management USA | Expert Ad Campaign Support",
    description:
      "Outsource PPC management to experts in the USA and save time and ad spend. Get professional Google Ads campaigns without hiring an in-house team.",
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