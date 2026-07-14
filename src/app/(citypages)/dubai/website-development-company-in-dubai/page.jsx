import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Dubai | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted website development company in Dubai building fast, custom, mobile-friendly websites that convert visitors into customers.",
  keywords:
    "website development company in Dubai, web development company dubai, website design company dubai, custom website development dubai, ecommerce website development dubai, best web development company in uae, website development services dubai, corporate website development dubai, responsive web design dubai, wordpress development company dubai, website designing company dubai, affordable web development dubai, business website development dubai, web app development company dubai, website development agency uae, professional website developers dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/website-development-company-in-dubai",
  },

  openGraph: {
    title: "Website Development Company in Dubai | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted website development company in Dubai building fast, custom, mobile-friendly websites that convert visitors into customers.",
    url: "https://www.zentrixinfotech.com/dubai/website-development-company-in-dubai",
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
    title: "Website Development Company in Dubai | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted website development company in Dubai building fast, custom, mobile-friendly websites that convert visitors into customers.",
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