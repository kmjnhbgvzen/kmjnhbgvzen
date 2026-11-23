import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Lucknow | Zentrix Infotech",
  description:
    "Need a website development company in Lucknow? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites on React and Next.js. Request a free quote.",
  keywords:
    "Website Development Company in Lucknow, Website Designing Company in Lucknow, Website Developers in Lucknow, Professional Website Development Services in Lucknow, Custom Website Development in Lucknow, Affordable Website Development Company in Lucknow, Business Website Development in Lucknow, Ecommerce Website Development in Lucknow, Responsive Website Development in Lucknow, Corporate Website Development in Lucknow, Website Development Services in Lucknow, SEO Friendly Website Development in Lucknow, Website Redesign Company in Lucknow, Custom Web Application Development in Lucknow, Professional Website Designers in Lucknow, Best Website Development Company in Lucknow, business website design, custom web solutions, mobile-friendly websites, SEO-friendly website structure, website performance optimization, user experience design, conversion-focused website, website maintenance and support, scalable web applications, lead generation website, website security and performance, how to choose a website development company in Lucknow, cost of website development in Lucknow, custom website development for small businesses, ecommerce website development services in Lucknow, how can a business website generate more inquiries",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-development-company-in-lucknow",
  },

  openGraph: {
    title: "Website Development Company in Lucknow | Zentrix Infotech",
    description:
      "Need a website development company in Lucknow? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites on React and Next.js. Request a free quote.",
    url: "https://www.zentrixinfotech.com/lucknow/website-development-company-in-lucknow",
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
    title: "Website Development Company in Lucknow | Zentrix Infotech",
    description:
      "Need a website development company in Lucknow? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites on React and Next.js. Request a free quote.",
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