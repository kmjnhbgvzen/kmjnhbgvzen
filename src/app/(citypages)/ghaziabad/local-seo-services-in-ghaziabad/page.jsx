import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Ghaziabad | Zentrix Infotech",
  description:
    "Rank higher on Google Maps & local search with expert local SEO services in Ghaziabad. Zentrix Infotech helps businesses get found by nearby customers.",
  keywords:
    "local SEO services in Ghaziabad, local SEO company Ghaziabad, Google My Business optimization Ghaziabad, local SEO agency near me, SEO services for small business Ghaziabad, local search optimization Ghaziabad, Google Maps ranking Ghaziabad, best local SEO company UP, Zentrix Infotech SEO services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/local-seo-services-in-ghaziabad",
  },

  openGraph: {
    title: "Local SEO Services in Ghaziabad | Zentrix Infotech",
    description:
      "Rank higher on Google Maps & local search with expert local SEO services in Ghaziabad. Zentrix Infotech helps businesses get found by nearby customers.",
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
    title: "Local SEO Services in Ghaziabad | Zentrix Infotech",
    description:
      "Rank higher on Google Maps & local search with expert local SEO services in Ghaziabad. Zentrix Infotech helps businesses get found by nearby customers.",
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