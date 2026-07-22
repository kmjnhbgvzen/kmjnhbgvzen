import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WordPress Development Services USA | Zentrix Infotech",
  description:
    "Zentrix Infotech offers professional WordPress development services for USA businesses, delivering custom, fast, secure, and SEO-friendly websites built on WordPress.",
  keywords:
    "WordPress development services USA, WordPress developers for US business, custom WordPress website development USA, hire WordPress developer USA, WordPress ecommerce development USA, WordPress website design company USA, affordable WordPress development USA, WordPress theme customization services, WordPress plugin development USA, best WordPress development company for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/wordpress-development-services-usa",
  },
  openGraph: {
    title: "WordPress Development Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers professional WordPress development services for USA businesses, delivering custom, fast, secure, and SEO-friendly websites built on WordPress.",
    url: "https://www.zentrixinfotech.com/usa/wordpress-development-services-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech offers professional WordPress development services for USA businesses, delivering custom, fast, secure, and SEO-friendly websites built on WordPress.",
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