import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Saharanpur | Get More Buyer Leads",
  description:
    "Grow your real estate business in Saharanpur with proven digital marketing — SEO, Google Ads, social media & local listings. Get more property enquiries and site visits online.",
  keywords:
    "digital marketing for real estate in Saharanpur, real estate digital marketing Saharanpur, SEO for real estate agents, property marketing agency Saharanpur, real estate lead generation, local SEO for builders, digital marketing for property dealers, best digital marketing company Saharanpur, real estate social media marketing, Google Ads for real estate, real estate website development India",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-real-estate-in-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Saharanpur | Get More Buyer Leads",
    description:
      "Grow your real estate business in Saharanpur with proven digital marketing — SEO, Google Ads, social media & local listings. Get more property enquiries and site visits online.",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-real-estate-in-saharanpur",
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
    title: "Digital Marketing for Real Estate in Saharanpur | Get More Buyer Leads",
    description:
      "Grow your real estate business in Saharanpur with proven digital marketing — SEO, Google Ads, social media & local listings. Get more property enquiries and site visits online.",
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