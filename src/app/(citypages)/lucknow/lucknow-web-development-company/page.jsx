import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lucknow Web Development Company | Zentrix Infotech",

  description:
    "Zentrix Infotech is a web development company serving Lucknow businesses with fast, secure, SEO-ready websites, e-commerce stores and custom web applications.",

  keywords: [
    "Lucknow web development company",
    "web development company in Lucknow",
    "web development services Lucknow",
    "custom web development Lucknow",
    "web application development Lucknow",
    "e-commerce web development Lucknow",
    "responsive web development Lucknow",
    "SEO-friendly web development Lucknow",
    "front end and back end development Lucknow",
    "web developers Lucknow",
    "hire web developers Lucknow",
    "web development for small business Lucknow",
    "website maintenance Lucknow",
    "web development agency Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-web-development-company",
  },

  openGraph: {
    title: "Lucknow Web Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a web development company serving Lucknow businesses with fast, secure, SEO-ready websites, e-commerce stores and custom web applications.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-web-development-company",
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
    title: "Lucknow Web Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a web development company serving Lucknow businesses with fast, secure, SEO-ready websites, e-commerce stores and custom web applications.",
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