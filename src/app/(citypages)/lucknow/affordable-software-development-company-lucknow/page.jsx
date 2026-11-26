import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Software Development Company Lucknow | Zentrix",

  description:
    "Affordable software development company in Lucknow? Zentrix Infotech builds custom software, web and mobile apps with clear scope and phased budgets. Call now.",

  keywords:
    "affordable software development company in lucknow, affordable software company in lucknow, budget software development company lucknow, low cost software development lucknow, custom software development lucknow, software development services in lucknow, business software development lucknow, software development cost in lucknow, affordable web and mobile app development lucknow, software development company near me lucknow, best affordable software developers lucknow, custom software company lucknow, affordable custom software for small business lucknow, software company for startups in lucknow, how much does custom software cost in lucknow, software development outsourcing lucknow, affordable erp software development lucknow, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/affordable-software-development-company-lucknow",
  },

  openGraph: {
    title: "Affordable Software Development Company Lucknow | Zentrix",
    description:
      "Affordable software development company in Lucknow? Zentrix Infotech builds custom software, web and mobile apps with clear scope and phased budgets. Call now.",
    url: "https://www.zentrixinfotech.com/lucknow/affordable-software-development-company-lucknow",
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
    title: "Affordable Software Development Company Lucknow | Zentrix",
    description:
      "Affordable software development company in Lucknow? Zentrix Infotech builds custom software, web and mobile apps with clear scope and phased budgets. Call now.",
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