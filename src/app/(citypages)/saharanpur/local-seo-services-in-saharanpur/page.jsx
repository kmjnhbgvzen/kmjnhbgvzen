import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Saharanpur | Rank Higher on Google Maps",
  description:
    "Get found by nearby customers with expert local SEO services in Saharanpur. Google Business Profile optimization, local citations & map ranking. Free audit available.",
  keywords:
    "local SEO services in Saharanpur, local SEO company Saharanpur, Google Business Profile optimization Saharanpur, Google Maps ranking Saharanpur, local search engine optimization UP, SEO agency Saharanpur, near me SEO services, local citations Saharanpur, small business SEO Saharanpur, local SEO expert Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/local-seo-services-in-saharanpur",
  },
  openGraph: {
    title: "Local SEO Services in Saharanpur | Rank Higher on Google Maps",
    description:
      "Get found by nearby customers with expert local SEO services in Saharanpur. Google Business Profile optimization, local citations & map ranking. Free audit available.",
    url: "https://www.zentrixinfotech.com/saharanpur/local-seo-services-in-saharanpur",
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
    title: "Local SEO Services in Saharanpur | Rank Higher on Google Maps",
    description:
      "Get found by nearby customers with expert local SEO services in Saharanpur. Google Business Profile optimization, local citations & map ranking. Free audit available.",
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