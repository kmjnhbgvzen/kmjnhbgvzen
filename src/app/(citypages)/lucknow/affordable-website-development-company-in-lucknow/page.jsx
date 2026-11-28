import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Website Development Lucknow | Zentrix Infotech",

  description:
    "Get a professional website at a fair price in Lucknow. Zentrix Infotech offers phased, budget-friendly website development with clear scope and written quotes.",

  keywords: [
    "affordable website development company in Lucknow",
    "affordable website development Lucknow",
    "budget-friendly website development Lucknow",
    "small business website Lucknow",
    "website development company Lucknow",
    "affordable web development services Lucknow",
    "low budget e-commerce website Lucknow",
    "professional website at fair price Lucknow",
    "website development cost Lucknow",
    "how to plan a website budget",
    "phased website development",
    "affordable website design Lucknow",
    "website development for startups Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/affordable-website-development-company-in-lucknow",
  },

  openGraph: {
    title: "Affordable Website Development Lucknow | Zentrix Infotech",
    description:
      "Get a professional website at a fair price in Lucknow. Zentrix Infotech offers phased, budget-friendly website development with clear scope and written quotes.",
    url:
      "https://www.zentrixinfotech.com/lucknow/affordable-website-development-company-in-lucknow",
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
    title: "Affordable Website Development Lucknow | Zentrix Infotech",
    description:
      "Get a professional website at a fair price in Lucknow. Zentrix Infotech offers phased, budget-friendly website development with clear scope and written quotes.",
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