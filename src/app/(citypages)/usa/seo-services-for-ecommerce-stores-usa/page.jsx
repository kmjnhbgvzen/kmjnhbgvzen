import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services for Ecommerce Stores USA",
  description:
    "Expert SEO services for ecommerce stores in the USA. Increase organic traffic, product rankings, and sales with proven ecommerce SEO strategies. Get a free audit.",
  keywords:
    "seo services for ecommerce stores usa, ecommerce seo agency usa, ecommerce seo company, seo for online stores usa, shopify seo services, woocommerce seo services, ecommerce seo experts usa, product page seo optimization, ecommerce link building services, online store seo agency, best ecommerce seo company usa, ecommerce seo consultant",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/ecommerce-seo-services-usa",
  },
  openGraph: {
    title: "SEO Services for Ecommerce Stores USA",
    description:
      "Expert SEO services for ecommerce stores in the USA. Increase organic traffic, product rankings, and sales with proven ecommerce SEO strategies. Get a free audit.",
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
    title: "SEO Services for Ecommerce Stores USA",
    description:
      "Expert SEO services for ecommerce stores in the USA. Increase organic traffic, product rankings, and sales with proven ecommerce SEO strategies. Get a free audit.",
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