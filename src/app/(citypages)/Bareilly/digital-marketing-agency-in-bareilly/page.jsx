import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Bareilly | SEO, Social Media & Ads",
  description:
    "Looking for a digital marketing agency in Bareilly? Get expert SEO, social media marketing, Google Ads, and website promotion services to grow your local business online.",
  keywords:
    "digital marketing agency in Bareilly, digital marketing company Bareilly, SEO services Bareilly, social media marketing Bareilly, best digital marketing agency UP, Google Ads agency Bareilly, online marketing services Bareilly, website promotion Bareilly, PPC agency Bareilly, affordable digital marketing Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/digital-marketing-agency-in-bareilly",
  },
  openGraph: {
    title: "Digital Marketing Agency in Bareilly | SEO, Social Media & Ads",
    description:
      "Looking for a digital marketing agency in Bareilly? Get expert SEO, social media marketing, Google Ads, and website promotion services to grow your local business online.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-agency-in-bareilly",
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
    title: "Digital Marketing Agency in Bareilly | SEO, Social Media & Ads",
    description:
      "Looking for a digital marketing agency in Bareilly? Get expert SEO, social media marketing, Google Ads, and website promotion services to grow your local business online.",
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