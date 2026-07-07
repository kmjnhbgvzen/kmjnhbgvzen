import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company USA | Custom, Fast & Scalable Web Solutions",
  description:
    "Searching for a reliable website development company in the USA? Get custom, responsive, and SEO-friendly websites built to convert visitors into loyal customers.",
  keywords:
    "website development company USA, web development services USA, custom website design USA, ecommerce website development America, responsive web design company, affordable website development USA, small business website development, enterprise web development company, WordPress development USA, web app development company USA",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/website-development-company-usa",
  },
  openGraph: {
    title: "Website Development Company USA | Custom, Fast & Scalable Web Solutions",
    description:
      "Searching for a reliable website development company in the USA? Get custom, responsive, and SEO-friendly websites built to convert visitors into loyal customers.",
    url: "https://www.zentrixinfotech.com/usa/website-development-company-usa",
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
    title: "Website Development Company USA | Custom, Fast & Scalable Web Solutions",
    description:
      "Searching for a reliable website development company in the USA? Get custom, responsive, and SEO-friendly websites built to convert visitors into loyal customers.",
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