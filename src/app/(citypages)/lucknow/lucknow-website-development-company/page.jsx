import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lucknow Website Development Company | Zentrix Infotech",

  description:
    "Zentrix Infotech is a website development company serving Lucknow businesses with fast, mobile-friendly, SEO-ready websites, stores and web apps. Call today.",

  keywords: [
    "Lucknow website development company",
    "website development company in Lucknow",
    "website development services Lucknow",
    "custom website development Lucknow",
    "business website development Lucknow",
    "e-commerce website development Lucknow",
    "responsive website development Lucknow",
    "SEO-friendly website development Lucknow",
    "web application development Lucknow",
    "website developers Lucknow",
    "professional website development",
    "website for small business Lucknow",
    "website redesign Lucknow",
    "website maintenance Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-company",
  },

  openGraph: {
    title: "Lucknow Website Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a website development company serving Lucknow businesses with fast, mobile-friendly, SEO-ready websites, stores and web apps. Call today.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-company",
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
    title: "Lucknow Website Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a website development company serving Lucknow businesses with fast, mobile-friendly, SEO-ready websites, stores and web apps. Call today.",
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