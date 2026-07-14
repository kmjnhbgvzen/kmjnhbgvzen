import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Sports Industry in Meerut | Grow Your Business",
  description:
    "Reach more buyers, distributors, and students with digital marketing for the sports industry in Meerut — SEO, Google Ads, and social media strategies that work.",
  keywords:
    "digital marketing for sports industry in Meerut, sports goods marketing Meerut, sports academy marketing Meerut, cricket bat manufacturer SEO, sports retailer digital marketing, B2B marketing sports goods, sports academy lead generation, sports industry SEO Meerut, digital marketing agency Meerut, sports equipment marketing strategy",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/digital-marketing-for-sports-industry-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Sports Industry in Meerut | Grow Your Business",
    description:
      "Reach more buyers, distributors, and students with digital marketing for the sports industry in Meerut — SEO, Google Ads, and social media strategies that work.",
    url: "https://www.zentrixinfotech.com/meerut/digital-marketing-for-sports-industry-in-meerut",
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
    title: "Digital Marketing for Sports Industry in Meerut | Grow Your Business",
    description:
      "Reach more buyers, distributors, and students with digital marketing for the sports industry in Meerut — SEO, Google Ads, and social media strategies that work.",
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