import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Marketing Services in Saharanpur | Boost Online Sales",
  description:
    "Grow your online store with ecommerce marketing services in Saharanpur. SEO, ads, social media, and marketplace optimization to drive more sales.",
  keywords:
    "ecommerce marketing services in Saharanpur, ecommerce marketing agency Saharanpur, online store marketing Saharanpur, ecommerce SEO services, ecommerce PPC Saharanpur, marketplace optimization services, Shopify marketing agency Saharanpur, online business growth Saharanpur, product marketing services Saharanpur, ecommerce digital marketing UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/ecommerce-marketing-services-in-saharanpur",
  },
  openGraph: {
    title: "Ecommerce Marketing Services in Saharanpur | Boost Online Sales",
    description:
      "Grow your online store with ecommerce marketing services in Saharanpur. SEO, ads, social media, and marketplace optimization to drive more sales.",
    url: "https://www.zentrixinfotech.com/saharanpur/ecommerce-marketing-services-in-saharanpur",
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
    title: "Ecommerce Marketing Services in Saharanpur | Boost Online Sales",
    description:
      "Grow your online store with ecommerce marketing services in Saharanpur. SEO, ads, social media, and marketplace optimization to drive more sales.",
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