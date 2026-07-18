import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in USA | Get Found in the Map Pack",
  description:
    "Local SEO services in the USA to optimize your Google Business Profile, reviews, and website so nearby customers find and choose your business first.",
  keywords:
    "local SEO services USA, Google Business Profile optimization, local SEO agency USA, local SEO pricing USA, map pack rankings, NAP consistency services, local citation building, review generation services, local link building, local SEO consultant USA, local SEO for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/local-seo-services-usa",
  },
  openGraph: {
    title: "Local SEO Services in USA | Get Found in the Map Pack",
    description:
      "Local SEO services in the USA to optimize your Google Business Profile, reviews, and website so nearby customers find and choose your business first.",
    url: "https://www.zentrixinfotech.com/usa/local-seo-services-usa",
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
    title: "Local SEO Services in USA | Get Found in the Map Pack",
    description:
      "Local SEO services in the USA to optimize your Google Business Profile, reviews, and website so nearby customers find and choose your business first.",
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