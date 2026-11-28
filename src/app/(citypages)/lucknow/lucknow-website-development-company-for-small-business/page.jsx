import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company for Small Business Lucknow",

  description:
    "Zentrix Infotech builds simple, professional, mobile-friendly websites for small businesses in Lucknow, with clear scope, phased growth and support. Call us.",

  keywords: [
    "Lucknow website development company for small business",
    "website development for small business Lucknow",
    "small business website Lucknow",
    "website for small business in Lucknow",
    "small business web development Lucknow",
    "affordable website for small business Lucknow",
    "small business e-commerce website Lucknow",
    "first website for my business Lucknow",
    "website for local business Lucknow",
    "small business website checklist",
    "how to get a website for small business",
    "website for shop Lucknow",
    "website for startup Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-company-for-small-business",
  },

  openGraph: {
    title: "Website Development Company for Small Business Lucknow",
    description:
      "Zentrix Infotech builds simple, professional, mobile-friendly websites for small businesses in Lucknow, with clear scope, phased growth and support. Call us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-company-for-small-business",
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
    title: "Website Development Company for Small Business Lucknow",
    description:
      "Zentrix Infotech builds simple, professional, mobile-friendly websites for small businesses in Lucknow, with clear scope, phased growth and support. Call us.",
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