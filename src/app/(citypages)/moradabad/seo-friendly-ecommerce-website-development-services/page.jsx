import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO-Friendly Ecommerce Website Development Services | Zentrix",
  description:
    "Zentrix Infotech offers SEO-friendly ecommerce website development services with fast speed, clean structure, schema and mobile design to help your store rank.",
  keywords:
    "SEO-friendly ecommerce website development services, SEO friendly ecommerce website development, SEO optimized ecommerce website, ecommerce website development with SEO, ecommerce SEO services, ecommerce site structure for SEO, ecommerce website speed optimization, product page SEO, ecommerce schema markup, Core Web Vitals ecommerce, technical SEO for ecommerce, SEO friendly Shopify development, SEO friendly WooCommerce development, SEO friendly Next.js ecommerce, ecommerce website development company, ecommerce website development Moradabad, ecommerce SEO company India, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-friendly-ecommerce-website-development-services",
  },

  openGraph: {
    title: "SEO-Friendly Ecommerce Website Development Services | Zentrix",
    description:
      "Zentrix Infotech offers SEO-friendly ecommerce website development services with fast speed, clean structure, schema and mobile design to help your store rank.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-friendly-ecommerce-website-development-services",
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
    title: "SEO-Friendly Ecommerce Website Development Services | Zentrix",
    description:
      "Zentrix Infotech offers SEO-friendly ecommerce website development services with fast speed, clean structure, schema and mobile design to help your store rank.",
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