import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development for Small Business in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Moradabad website development company for small business. Get a fast, mobile-friendly, SEO-ready website that fits your budget and goals.",
  keywords:
    "Moradabad website development company for small business, website development for small business Moradabad, small business website design Moradabad, small business web development Moradabad, affordable website for small business Moradabad, website for shop Moradabad, website for local business Moradabad, small business ecommerce website Moradabad, website development company in Moradabad, website designing company Moradabad, low cost website Moradabad, SEO friendly website small business Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company-for-small-business",
  },

  openGraph: {
    title: "Website Development for Small Business in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad website development company for small business. Get a fast, mobile-friendly, SEO-ready website that fits your budget and goals.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company-for-small-business",
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
    title: "Website Development for Small Business in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad website development company for small business. Get a fast, mobile-friendly, SEO-ready website that fits your budget and goals.",
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