import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Marketing Services in Meerut | Boost Online Sales & Traffic",
  description:
    "Grow your online store with expert ecommerce marketing services in Meerut — SEO, paid ads, social media & conversion optimization built to increase sales.",
  keywords:
    "ecommerce marketing services in Meerut, ecommerce SEO Meerut, online store marketing Meerut, ecommerce digital marketing agency Meerut, ecommerce PPC services Meerut, ecommerce website promotion Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/ecommerce-marketing-services-in-meerut",
  },
  openGraph: {
    title: "Ecommerce Marketing Services in Meerut | Boost Online Sales & Traffic",
    description:
      "Grow your online store with expert ecommerce marketing services in Meerut — SEO, paid ads, social media & conversion optimization built to increase sales.",
    url: "https://www.zentrixinfotech.com/meerut/ecommerce-marketing-services-in-meerut",
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
    title: "Ecommerce Marketing Services in Meerut | Boost Online Sales & Traffic",
    description:
      "Grow your online store with expert ecommerce marketing services in Meerut — SEO, paid ads, social media & conversion optimization built to increase sales.",
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