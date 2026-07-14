import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Meerut | Generate Buyer Leads",
  description:
    "Attract serious property buyers with digital marketing for real estate in Meerut — SEO, Google Ads, and social media strategies built to drive site visits.",
  keywords:
    "digital marketing for real estate in Meerut, real estate marketing Meerut, property marketing agency Meerut, SEO for real estate developers, Google Ads for property builders, real estate lead generation Meerut, real estate social media marketing, property website marketing, real estate digital agency, Meerut property marketing",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/digital-marketing-for-real-estate-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Meerut | Generate Buyer Leads",
    description:
      "Attract serious property buyers with digital marketing for real estate in Meerut — SEO, Google Ads, and social media strategies built to drive site visits.",
    url: "https://www.zentrixinfotech.com/meerut/digital-marketing-for-real-estate-in-meerut",
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
    title: "Digital Marketing for Real Estate in Meerut | Generate Buyer Leads",
    description:
      "Attract serious property buyers with digital marketing for real estate in Meerut — SEO, Google Ads, and social media strategies built to drive site visits.",
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