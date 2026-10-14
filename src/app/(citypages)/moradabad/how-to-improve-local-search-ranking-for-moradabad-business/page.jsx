import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Improve Local Search Ranking in Moradabad | Zentrix Infotech",
  description:
    "Learn how to improve local search ranking for your Moradabad business with Google Business Profile tips, reviews, citations, content and website fixes.",
  keywords:
    "how to improve local search ranking Moradabad, improve local search ranking for Moradabad business, local SEO tips Moradabad, rank higher on Google Maps Moradabad, Google Business Profile optimization Moradabad, local search ranking factors, get more local customers Moradabad, local SEO checklist Moradabad, local citations Moradabad, Google reviews Moradabad, Zentrix Infotech local SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-improve-local-search-ranking-for-moradabad-business",
  },

  openGraph: {
    title: "How to Improve Local Search Ranking in Moradabad | Zentrix Infotech",
    description:
      "Learn how to improve local search ranking for your Moradabad business with Google Business Profile tips, reviews, citations, content and website fixes.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-improve-local-search-ranking-for-moradabad-business",
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
    title: "How to Improve Local Search Ranking in Moradabad | Zentrix Infotech",
    description:
      "Learn how to improve local search ranking for your Moradabad business with Google Business Profile tips, reviews, citations, content and website fixes.",
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