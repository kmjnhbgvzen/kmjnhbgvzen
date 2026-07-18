import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce SEO Services in USA | Rank More Products, Sell More",
  description:
    "Expert ecommerce SEO services in the USA to rank your product and category pages higher, drive organic traffic, and increase online store sales.",
  keywords:
    "ecommerce SEO services USA, ecommerce SEO company, product page SEO, online store SEO services, Shopify SEO services USA, category page optimization, ecommerce SEO agency, online store ranking, ecommerce SEO expert, ecommerce SEO packages",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/ecommerce-seo-services-usa",
  },
  openGraph: {
    title: "Ecommerce SEO Services in USA | Rank More Products, Sell More",
    description:
      "Expert ecommerce SEO services in the USA to rank your product and category pages higher, drive organic traffic, and increase online store sales.",
    url: "https://www.zentrixinfotech.com/usa/ecommerce-seo-services-usa",
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
    title: "Ecommerce SEO Services in USA | Rank More Products, Sell More",
    description:
      "Expert ecommerce SEO services in the USA to rank your product and category pages higher, drive organic traffic, and increase online store sales.",
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