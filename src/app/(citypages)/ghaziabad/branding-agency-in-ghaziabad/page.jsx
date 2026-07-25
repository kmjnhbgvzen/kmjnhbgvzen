import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Ghaziabad | Brand Identity & Strategy Experts",
  description:
    "Leading Branding Agency in Ghaziabad for logo design, brand identity, and strategy. Build a brand customers trust and remember. Get a free consultation.",
  keywords:
    "branding agency in Ghaziabad, branding company Ghaziabad, brand identity design Ghaziabad, logo design agency Ghaziabad, brand strategy agency Ghaziabad, corporate branding services Ghaziabad, best branding agency Ghaziabad, brand design company near me, creative branding agency Ghaziabad, business branding services Ghaziabad, brand development company Ghaziabad, digital branding agency Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/branding-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Branding Agency in Ghaziabad | Brand Identity & Strategy Experts",
    description:
      "Leading Branding Agency in Ghaziabad for logo design, brand identity, and strategy. Build a brand customers trust and remember. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/branding-agency-in-ghaziabad",
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
    title: "Branding Agency in Ghaziabad | Brand Identity & Strategy Experts",
    description:
      "Leading Branding Agency in Ghaziabad for logo design, brand identity, and strategy. Build a brand customers trust and remember. Get a free consultation.",
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