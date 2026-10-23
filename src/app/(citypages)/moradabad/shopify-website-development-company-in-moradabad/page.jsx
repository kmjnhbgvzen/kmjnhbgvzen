import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Shopify Website Development Company Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Shopify website development company in Moradabad building fast, secure, conversion-focused online stores for brands and exporters.",
  keywords:
    "Shopify website development company in Moradabad, Shopify development company Moradabad, Shopify developer in Moradabad, Shopify store development Moradabad, Shopify website design Moradabad, Shopify ecommerce development Moradabad, custom Shopify theme development, Shopify store setup services, Shopify app integration, Shopify migration services, Shopify SEO services, Shopify payment gateway integration India, Shopify store for handicraft exporters, Shopify website cost in Moradabad, best Shopify agency in Moradabad, ecommerce website development company in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/shopify-website-development-company-in-moradabad",
  },

  openGraph: {
    title: "Shopify Website Development Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Shopify website development company in Moradabad building fast, secure, conversion-focused online stores for brands and exporters.",
    url: "https://www.zentrixinfotech.com/moradabad/shopify-website-development-company-in-moradabad",
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
    title: "Shopify Website Development Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Shopify website development company in Moradabad building fast, secure, conversion-focused online stores for brands and exporters.",
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