import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best WordPress Developers in Hapur | Custom WordPress Website Experts",
  description:
    "Looking for the best WordPress developers in Hapur? Get custom website design, theme development, plugin setup & ongoing support to grow your business online.",
  keywords:
    "best WordPress developers in Hapur, WordPress developer Hapur, WordPress website design Hapur, custom WordPress development, WordPress expert near me, WordPress plugin development Hapur, business website development Hapur, WordPress SEO optimization, WordPress maintenance support, affordable WordPress developer Hapur, WooCommerce developer Hapur, responsive website design Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/best-wordpress-developers-hapur",
  },
  openGraph: {
    title: "Best WordPress Developers in Hapur | Custom WordPress Website Experts",
    description:
      "Looking for the best WordPress developers in Hapur? Get custom website design, theme development, plugin setup & ongoing support to grow your business online.",
    url: "https://www.zentrixinfotech.com/hapur/best-wordpress-developers-hapur",
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
    title: "Best WordPress Developers in Hapur | Custom WordPress Website Experts",
    description:
      "Looking for the best WordPress developers in Hapur? Get custom website design, theme development, plugin setup & ongoing support to grow your business online.",
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