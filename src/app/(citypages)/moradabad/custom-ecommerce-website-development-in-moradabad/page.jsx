import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Custom Ecommerce Website Development in Moradabad | Zentrix",
  description:
    "Need a store built exactly for your business? Zentrix Infotech offers custom ecommerce website development in Moradabad with unique features, secure payments and SEO.",
  keywords:
    "custom ecommerce website development in Moradabad, custom ecommerce development Moradabad, bespoke online store development, custom ecommerce website design, tailor-made ecommerce website, custom ecommerce solutions India, React ecommerce development, Next.js ecommerce development, Laravel ecommerce development, Node.js ecommerce website, custom B2B ecommerce portal, custom multi-vendor marketplace development, custom ecommerce vs Shopify, custom ecommerce website cost in Moradabad, scalable ecommerce website development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-ecommerce-website-development-in-moradabad",
  },

  openGraph: {
    title:
      "Custom Ecommerce Website Development in Moradabad | Zentrix",
    description:
      "Need a store built exactly for your business? Zentrix Infotech offers custom ecommerce website development in Moradabad with unique features, secure payments and SEO.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-ecommerce-website-development-in-moradabad",
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
    title:
      "Custom Ecommerce Website Development in Moradabad | Zentrix",
    description:
      "Need a store built exactly for your business? Zentrix Infotech offers custom ecommerce website development in Moradabad with unique features, secure payments and SEO.",
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