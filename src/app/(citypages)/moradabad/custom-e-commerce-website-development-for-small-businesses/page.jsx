import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Ecommerce Website Development for Small Business",
  description:
    "Zentrix Infotech builds custom ecommerce websites for small businesses: fast, secure, mobile-friendly stores with payments, shipping and SEO at a fair price.",
  keywords:
    "custom ecommerce website development for small businesses, custom ecommerce website for small business, small business ecommerce development, affordable custom ecommerce development, custom online store development, small business online store builder, custom ecommerce website cost, ecommerce website development company, custom ecommerce vs Shopify for small business, ecommerce website for startups, mobile-friendly ecommerce website, ecommerce payment gateway integration, ecommerce SEO for small business, custom ecommerce development India, ecommerce website development Moradabad, hire ecommerce developer, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-e-commerce-website-development-for-small-businesses",
  },

  openGraph: {
    title: "Custom Ecommerce Website Development for Small Business",
    description:
      "Zentrix Infotech builds custom ecommerce websites for small businesses: fast, secure, mobile-friendly stores with payments, shipping and SEO at a fair price.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-e-commerce-website-development-for-small-businesses",
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
    title: "Custom Ecommerce Website Development for Small Business",
    description:
      "Zentrix Infotech builds custom ecommerce websites for small businesses: fast, secure, mobile-friendly stores with payments, shipping and SEO at a fair price.",
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