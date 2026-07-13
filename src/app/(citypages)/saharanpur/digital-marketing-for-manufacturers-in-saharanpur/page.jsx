import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Manufacturers in Saharanpur | Best Strategies 2026",
  description:
    "Discover proven digital marketing strategies for manufacturers in Saharanpur — B2B SEO, marketplace optimization, LinkedIn marketing, and export-focused tips to grow inquiries in 2026.",
  keywords:
    "digital marketing for manufacturers in Saharanpur, manufacturer SEO Saharanpur, B2B marketing Saharanpur, industrial digital marketing agency Saharanpur, Google Ads for manufacturers, manufacturing lead generation, best digital marketing company Saharanpur, manufacturer marketing strategies 2026, Zentrix Infotech digital marketing",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-manufacturers-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Manufacturers in Saharanpur | Best Strategies 2026",
    description:
      "Discover proven digital marketing strategies for manufacturers in Saharanpur — B2B SEO, marketplace optimization, LinkedIn marketing, and export-focused tips to grow inquiries in 2026.",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-manufacturers-saharanpur",
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
    title: "Digital Marketing for Manufacturers in Saharanpur | Best Strategies 2026",
    description:
      "Discover proven digital marketing strategies for manufacturers in Saharanpur — B2B SEO, marketplace optimization, LinkedIn marketing, and export-focused tips to grow inquiries in 2026.",
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