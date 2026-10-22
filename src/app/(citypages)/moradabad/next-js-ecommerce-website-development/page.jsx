import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Next.js Ecommerce Website Development | Zentrix Infotech India",
  description:
    "Zentrix Infotech builds fast, SEO friendly and scalable Next.js ecommerce websites with custom storefronts, headless commerce, payments and ongoing support. Get a free quote.",
  keywords:
    "nextjs ecommerce website development, next.js ecommerce development company, nextjs ecommerce development india, headless ecommerce development, nextjs shopify development, nextjs woocommerce development, custom nextjs ecommerce website, nextjs online store development, nextjs ecommerce seo, nextjs payment gateway integration, nextjs ecommerce migration, hire nextjs ecommerce developers, nextjs ecommerce website cost, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/next-js-ecommerce-website-development",
  },

  openGraph: {
    title: "Next.js Ecommerce Website Development | Zentrix Infotech India",
    description:
      "Zentrix Infotech builds fast, SEO friendly and scalable Next.js ecommerce websites with custom storefronts, headless commerce, payments and ongoing support. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/next-js-ecommerce-website-development",
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
    title: "Next.js Ecommerce Website Development | Zentrix Infotech India",
    description:
      "Zentrix Infotech builds fast, SEO friendly and scalable Next.js ecommerce websites with custom storefronts, headless commerce, payments and ongoing support. Get a free quote.",
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