import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency USA | Maximize ROI with Expert Ad Campaigns",
  description:
    "Partner with a certified PPC and Google Ads agency in the USA. Get data-driven ad strategies, optimized campaigns, and measurable ROI across Google, Bing, and social ads.",
  keywords:
    "PPC agency USA, Google Ads agency USA, pay per click management USA, Google Ads management company, PPC management services America, paid search agency USA, Google Ads consultant USA, ecommerce PPC agency, small business Google Ads management, enterprise PPC services USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/ppc-google-ads-agency-usa",
  },
  openGraph: {
    title: "PPC & Google Ads Agency USA | Maximize ROI with Expert Ad Campaigns",
    description:
      "Partner with a certified PPC and Google Ads agency in the USA. Get data-driven ad strategies, optimized campaigns, and measurable ROI across Google, Bing, and social ads.",
    url: "https://www.zentrixinfotech.com/usa/ppc-google-ads-agency-usa",
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
    title: "PPC & Google Ads Agency USA | Maximize ROI with Expert Ad Campaigns",
    description:
      "Partner with a certified PPC and Google Ads agency in the USA. Get data-driven ad strategies, optimized campaigns, and measurable ROI across Google, Bing, and social ads.",
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