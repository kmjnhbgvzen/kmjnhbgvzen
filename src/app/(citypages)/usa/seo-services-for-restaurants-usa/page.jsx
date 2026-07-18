import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services for Restaurants USA | Zentrix Infotech",
  description:
    "Looking for SEO services for restaurants in USA? Learn proven local SEO strategies, pricing, and expert tips to rank higher and fill more tables.",
  keywords:
    "seo services for restaurants usa, restaurant seo company, local seo for restaurants, restaurant seo agency near me, restaurant digital marketing usa, restaurant seo services near me, google my business for restaurants, restaurant website seo, restaurant online ordering seo, best seo for restaurants",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/seo-services-for-restaurants-usa",
  },
  openGraph: {
    title: "SEO Services for Restaurants USA | Zentrix Infotech",
    description:
      "Looking for SEO services for restaurants in USA? Learn proven local SEO strategies, pricing, and expert tips to rank higher and fill more tables.",
    url: "https://www.zentrixinfotech.com/usa/seo-services-for-restaurants-usa",
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
    title: "SEO Services for Restaurants USA | Zentrix Infotech",
    description:
      "Looking for SEO services for restaurants in USA? Learn proven local SEO strategies, pricing, and expert tips to rank higher and fill more tables.",
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