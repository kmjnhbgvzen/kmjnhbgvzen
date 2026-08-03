import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best ERP Software for Small Business in Hapur (2026 Guide)",
  description:
    "Looking for the best ERP software for small business in Hapur? Compare features, pricing & implementation tips to pick the right ERP for your company.",
  keywords:
    "best ERP software for small business in Hapur, ERP software Hapur, ERP for small business India, affordable ERP software, cloud ERP for small business, ERP implementation Hapur, inventory management software Hapur, accounting ERP software small business, ERP software company Uttar Pradesh, custom ERP software development",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/best-erp-software-small-business-hapur",
  },
  openGraph: {
    title: "Best ERP Software for Small Business in Hapur (2026 Guide)",
    description:
      "Looking for the best ERP software for small business in Hapur? Compare features, pricing & implementation tips to pick the right ERP for your company.",
    url: "https://www.zentrixinfotech.com/hapur/best-erp-software-small-business-hapur",
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
    title: "Best ERP Software for Small Business in Hapur (2026 Guide)",
    description:
      "Looking for the best ERP software for small business in Hapur? Compare features, pricing & implementation tips to pick the right ERP for your company.",
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