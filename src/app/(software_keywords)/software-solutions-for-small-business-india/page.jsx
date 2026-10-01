import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Solutions for Small Business India | Zentrix Infotech",
  description:
    "Discover the best software solutions for small business in India. Learn what to build, how to start affordably and how Zentrix Infotech can help you grow.",
  keywords:
    "software solutions for small business India, small business software India, custom software for small business, affordable software for startups, business management software India, small business website development, mobile app for small business, e-commerce solutions for small business, cloud software for small business, digital transformation for MSMEs, software development company in Moradabad, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/software-solutions-for-small-business-india",
  },
  openGraph: {
    title: "Software Solutions for Small Business India | Zentrix Infotech",
    description:
      "Discover the best software solutions for small business in India. Learn what to build, how to start affordably and how Zentrix Infotech can help you grow.",
    url: "https://www.zentrixinfotech.com/software-solutions-for-small-business-india",
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
    title: "Software Solutions for Small Business India | Zentrix Infotech",
    description:
      "Discover the best software solutions for small business in India. Learn what to build, how to start affordably and how Zentrix Infotech can help you grow.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function SoftwareSolutionsSmallBusinessIndiaPage() {
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
