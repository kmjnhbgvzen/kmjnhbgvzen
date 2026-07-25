import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Ghaziabad | Zentrix Infotech",
  description:
    "Looking for reliable SEO services in Ghaziabad? Zentrix Infotech offers on-page, off-page, technical & local SEO to boost your rankings and traffic.",
  keywords:
    "seo services in ghaziabad, seo company in ghaziabad, seo agency ghaziabad, best seo services near me, local seo services ghaziabad, affordable seo company ghaziabad, seo experts ghaziabad, website ranking company ghaziabad, digital marketing agency ghaziabad, on page and off page seo services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/seo-services-in-ghaziabad",
  },
  openGraph: {
    title: "SEO Services in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for reliable SEO services in Ghaziabad? Zentrix Infotech offers on-page, off-page, technical & local SEO to boost your rankings and traffic.",
    url: "https://www.zentrixinfotech.com/ghaziabad/seo-services-in-ghaziabad",
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
    title: "SEO Services in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for reliable SEO services in Ghaziabad? Zentrix Infotech offers on-page, off-page, technical & local SEO to boost your rankings and traffic.",
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