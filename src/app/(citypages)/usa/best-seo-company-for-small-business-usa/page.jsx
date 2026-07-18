import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best SEO Company for Small Business USA",
  description:
    "Searching for the best SEO company for small business in USA? Compare pricing, services & red flags before you hire, and get more local customers faster.",
  keywords:
    "best seo company for small business usa, small business seo services usa, affordable seo agency for small business, local seo company usa, top seo agencies for small business, seo services for startups, small business seo experts, budget seo company usa, seo agency near me, digital marketing company for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/best-seo-company-for-small-business-usa",
  },
  openGraph: {
    title: "Best SEO Company for Small Business USA",
    description:
      "Searching for the best SEO company for small business in USA? Compare pricing, services & red flags before you hire, and get more local customers faster.",
    url: "https://www.zentrixinfotech.com/usa/best-seo-company-for-small-business-usa",
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
    title: "Best SEO Company for Small Business USA",
    description:
      "Searching for the best SEO company for small business in USA? Compare pricing, services & red flags before you hire, and get more local customers faster.",
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