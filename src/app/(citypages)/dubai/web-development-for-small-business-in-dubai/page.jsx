import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Small Business in Dubai | Affordable Websites",
  description:
    "Affordable web development for small businesses in Dubai. Custom, mobile-friendly, SEO-ready websites designed to attract customers and grow sales.",
  keywords:
    "web development for small business in Dubai, small business website design Dubai, affordable web development Dubai, small business website development UAE, website design for startups Dubai, cheap website development Dubai, local business website Dubai, small business SEO Dubai, hire web developer for small business Dubai, best website company for small business Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-small-business-in-dubai",
  },

  openGraph: {
    title: "Web Development for Small Business in Dubai | Affordable Websites",
    description:
      "Affordable web development for small businesses in Dubai. Custom, mobile-friendly, SEO-ready websites designed to attract customers and grow sales.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-small-business-in-dubai",
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
    title: "Web Development for Small Business in Dubai | Affordable Websites",
    description:
      "Affordable web development for small businesses in Dubai. Custom, mobile-friendly, SEO-ready websites designed to attract customers and grow sales.",
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