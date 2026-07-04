import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Meerut | Rank Higher on Google Maps & Search",
  description:
    "Grow your Meerut business with expert local SEO services — Google Business Profile optimization, local citations, review management & on-page SEO that drives real foot traffic and calls.",
  keywords:
    "local SEO services in Meerut, local SEO company Meerut, Google Business Profile optimization Meerut, SEO agency Meerut, local search engine optimization Meerut, Meerut digital marketing agency",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/local-seo-services-in-meerut",
  },
  openGraph: {
    title: "Local SEO Services in Meerut | Rank Higher on Google Maps & Search",
    description:
      "Grow your Meerut business with expert local SEO services — Google Business Profile optimization, local citations, review management & on-page SEO that drives real foot traffic and calls.",
    url: "https://www.zentrixinfotech.com/meerut/local-seo-services-in-meerut",
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
    title: "Local SEO Services in Meerut | Rank Higher on Google Maps & Search",
    description:
      "Grow your Meerut business with expert local SEO services — Google Business Profile optimization, local citations, review management & on-page SEO that drives real foot traffic and calls.",
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