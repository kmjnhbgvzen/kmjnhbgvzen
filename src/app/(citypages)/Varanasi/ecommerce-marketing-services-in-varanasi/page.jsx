import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Marketing Services in Varanasi | Grow Your Online Store Sales",
  description:
    "Boost your online store with expert ecommerce marketing services in Varanasi. SEO, ads, social media, and conversion strategies to increase sales and reach.",
  keywords:
    "ecommerce marketing services in Varanasi, ecommerce SEO Varanasi, online store marketing Varanasi, ecommerce digital marketing agency Varanasi, Banarasi saree ecommerce marketing, ecommerce PPC Varanasi, online selling services Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/ecommerce-marketing-services-in-varanasi",
  },
  openGraph: {
    title: "Ecommerce Marketing Services in Varanasi | Grow Your Online Store Sales",
    description:
      "Boost your online store with expert ecommerce marketing services in Varanasi. SEO, ads, social media, and conversion strategies to increase sales and reach.",
    url: "https://www.zentrixinfotech.com/varanasi/ecommerce-marketing-services-in-varanasi",
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
    title: "Ecommerce Marketing Services in Varanasi | Grow Your Online Store Sales",
    description:
      "Boost your online store with expert ecommerce marketing services in Varanasi. SEO, ads, social media, and conversion strategies to increase sales and reach.",
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