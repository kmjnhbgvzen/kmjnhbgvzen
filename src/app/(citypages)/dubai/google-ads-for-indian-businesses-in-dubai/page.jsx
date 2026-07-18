import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Indian Businesses in Dubai | Community-Focused PPC Experts",
  description:
    "Reach Dubai's Indian community with targeted Google Ads campaigns. Culturally relevant PPC for Indian restaurants, stores, and services built to lower cost per lead.",
  keywords:
    "google ads for indian businesses in dubai, indian business marketing dubai, ppc for indian community dubai, indian restaurant ads dubai, indian grocery store marketing dubai, digital marketing for indian businesses uae, indian diaspora marketing dubai, hindi ads dubai, indian expat marketing agency dubai, community marketing dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-indian-businesses-dubai",
  },

  openGraph: {
    title: "Google Ads for Indian Businesses in Dubai | Community-Focused PPC Experts",
    description:
      "Reach Dubai's Indian community with targeted Google Ads campaigns. Culturally relevant PPC for Indian restaurants, stores, and services built to lower cost per lead.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-indian-businesses-dubai",
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
    title: "Google Ads for Indian Businesses in Dubai | Community-Focused PPC Experts",
    description:
      "Reach Dubai's Indian community with targeted Google Ads campaigns. Culturally relevant PPC for Indian restaurants, stores, and services built to lower cost per lead.",
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