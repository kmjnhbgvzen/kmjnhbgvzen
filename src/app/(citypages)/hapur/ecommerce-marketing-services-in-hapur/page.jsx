import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "E-commerce Marketing Services in Hapur | Boost Online Sales & Traffic",
  description:
    "Looking for e-commerce marketing services in Hapur? Grow your online store with expert SEO, PPC, social media, and conversion optimization strategies.",
  keywords:
    "ecommerce marketing services in Hapur, ecommerce marketing agency Hapur, online store marketing Hapur, ecommerce SEO Hapur, ecommerce PPC Hapur, digital marketing for online stores Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/ecommerce-marketing-services-in-hapur",
  },
  openGraph: {
    title: "E-commerce Marketing Services in Hapur | Boost Online Sales & Traffic",
    description:
      "Looking for e-commerce marketing services in Hapur? Grow your online store with expert SEO, PPC, social media, and conversion optimization strategies.",
    url: "https://www.zentrixinfotech.com/hapur/ecommerce-marketing-services-in-hapur",
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
    title: "E-commerce Marketing Services in Hapur | Boost Online Sales & Traffic",
    description:
      "Looking for e-commerce marketing services in Hapur? Grow your online store with expert SEO, PPC, social media, and conversion optimization strategies.",
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