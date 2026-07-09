import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Marketing Services USA | Grow Online Sales in 2026",
  description:
    "Discover top ecommerce marketing services in the USA — SEO, PPC, email, and social strategies to boost traffic, conversions, and revenue in 2026.",
  keywords:
    "ecommerce marketing services USA, ecommerce marketing agency USA, ecommerce SEO services USA, ecommerce PPC management USA, ecommerce digital marketing company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/ecommerce-marketing-services-usa",
  },
  openGraph: {
    title: "Ecommerce Marketing Services USA | Grow Online Sales in 2026",
    description:
      "Discover top ecommerce marketing services in the USA — SEO, PPC, email, and social strategies to boost traffic, conversions, and revenue in 2026.",
    url: "https://www.zentrixinfotech.com/usa/ecommerce-marketing-services-usa",
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
    title: "Ecommerce Marketing Services USA | Grow Online Sales in 2026",
    description:
      "Discover top ecommerce marketing services in the USA — SEO, PPC, email, and social strategies to boost traffic, conversions, and revenue in 2026.",
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