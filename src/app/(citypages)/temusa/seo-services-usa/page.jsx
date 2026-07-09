import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services USA | Boost Rankings, Traffic & Leads with Expert SEO",
  description:
    "Looking for professional SEO services in the USA? Get expert on-page, technical, local & content SEO strategies designed to increase rankings, traffic, and conversions.",
  keywords:
    "SEO services USA, SEO agency USA, best SEO company in America, local SEO services USA, technical SEO USA, ecommerce SEO USA, SEO consultant USA, affordable SEO services America, small business SEO USA, enterprise SEO services USA",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/seo-services-usa",
  },
  openGraph: {
    title: "SEO Services USA | Boost Rankings, Traffic & Leads with Expert SEO",
    description:
      "Looking for professional SEO services in the USA? Get expert on-page, technical, local & content SEO strategies designed to increase rankings, traffic, and conversions.",
    url: "https://www.zentrixinfotech.com/usa/seo-services-usa",
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
    title: "SEO Services USA | Boost Rankings, Traffic & Leads with Expert SEO",
    description:
      "Looking for professional SEO services in the USA? Get expert on-page, technical, local & content SEO strategies designed to increase rankings, traffic, and conversions.",
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