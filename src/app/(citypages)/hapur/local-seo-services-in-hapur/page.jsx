import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Hapur | Rank Higher in Local Search Results",
  description:
    "Get expert local SEO services in Hapur to rank higher on Google Maps and local search, attract nearby customers, and grow your business with proven local strategies.",
  keywords:
    "local SEO services in Hapur, local SEO company Hapur, Google Maps ranking Hapur, near me SEO Hapur, local search optimization Hapur, best local SEO agency Hapur, Google Business Profile optimization Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/local-seo-services-in-hapur",
  },
  openGraph: {
    title: "Local SEO Services in Hapur | Rank Higher in Local Search Results",
    description:
      "Get expert local SEO services in Hapur to rank higher on Google Maps and local search, attract nearby customers, and grow your business with proven local strategies.",
    url: "https://www.zentrixinfotech.com/cities/hapur/local-seo-services-in-hapur",
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
    title: "Local SEO Services in Hapur | Rank Higher in Local Search Results",
    description:
      "Get expert local SEO services in Hapur to rank higher on Google Maps and local search, attract nearby customers, and grow your business with proven local strategies.",
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