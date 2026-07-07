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
    "Grow your online store with expert ecommerce marketing services in Saharanpur. SEO, ads, social media & marketplace optimization to drive sales. Free consultation.",
  keywords:
    "ecommerce marketing services in Saharanpur, ecommerce marketing agency Saharanpur, online store marketing Saharanpur, ecommerce SEO services, ecommerce PPC Saharanpur, marketplace optimization services, Shopify marketing agency Saharanpur, online business growth Saharanpur, ecommerce digital marketing UP, product marketing services Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/ecommerce-marketing-services-in-saharanpur",
  },
  openGraph: {
    title: "Ecommerce Marketing Services in Saharanpur | Boost Online Sales",
    description:
      "Grow your online store with expert ecommerce marketing services in Saharanpur. SEO, ads, social media & marketplace optimization to drive sales. Free consultation.",
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
      "Grow your online store with expert ecommerce marketing services in Saharanpur. SEO, ads, social media & marketplace optimization to drive sales. Free consultation.",
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