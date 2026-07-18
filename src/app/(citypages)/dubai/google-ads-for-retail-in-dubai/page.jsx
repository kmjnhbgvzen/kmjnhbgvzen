import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Retail in Dubai | E-commerce & Store Sales Experts",
  description:
    "Drive more sales with Google Ads for retail in Dubai. Shopping, Search & remarketing campaigns for online stores and physical retail built to lower cost per sale.",
  keywords:
    "google ads for retail in dubai, retail ppc dubai, ecommerce ads agency dubai, google shopping ads dubai, retail digital marketing dubai, online store advertising dubai, google ads for ecommerce uae, retail advertising agency dubai, shopping campaign management dubai, dubai shopping festival ads",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-retail-dubai",
  },

  openGraph: {
    title: "Google Ads for Retail in Dubai | E-commerce & Store Sales Experts",
    description:
      "Drive more sales with Google Ads for retail in Dubai. Shopping, Search & remarketing campaigns for online stores and physical retail built to lower cost per sale.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-retail-dubai",
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
    title: "Google Ads for Retail in Dubai | E-commerce & Store Sales Experts",
    description:
      "Drive more sales with Google Ads for retail in Dubai. Shopping, Search & remarketing campaigns for online stores and physical retail built to lower cost per sale.",
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