import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Ghaziabad",
  description:
    "Looking for local SEO services in Ghaziabad? Rank higher on Google Maps & local search with GBP optimization, citations & review management.",
  keywords:
    "local SEO services in Ghaziabad, local SEO company in Ghaziabad, Google Business Profile optimization Ghaziabad, Google Maps ranking services Ghaziabad, local SEO agency near me, local citation building services Ghaziabad, near me SEO services Ghaziabad, local search marketing company Ghaziabad, affordable local SEO services Ghaziabad, Google My Business optimization Ghaziabad, review management services Ghaziabad, local SEO for small business Ghaziabad, multi-location SEO agency Ghaziabad, local pack ranking agency Ghaziabad, hyperlocal marketing services Ghaziabad, local SEO consultant Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/local-seo-services-in-ghaziabad",
  },
  openGraph: {
    title: "Local SEO Services in Ghaziabad",
    description:
      "Looking for local SEO services in Ghaziabad? Rank higher on Google Maps & local search with GBP optimization, citations & review management.",
    url: "https://www.zentrixinfotech.com/ghaziabad/local-seo-services-in-ghaziabad",
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
    title: "Local SEO Services in Ghaziabad",
    description:
      "Looking for local SEO services in Ghaziabad? Rank higher on Google Maps & local search with GBP optimization, citations & review management.",
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