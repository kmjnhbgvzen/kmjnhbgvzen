import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Website Development in Dubai | Expert Web Developers",
  description:
    "Get professional custom website development in Dubai. Tailored design, fast performance, mobile-friendly & SEO-optimized websites built for real business growth.",
  keywords:
    "custom website development in Dubai, website development company Dubai, custom web design Dubai, hire web developer Dubai, business website development UAE, professional website development services Dubai, custom web application development Dubai, responsive website design Dubai, ecommerce website development Dubai, best website design company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/custom-website-development-in-dubai",
  },

  openGraph: {
    title: "Custom Website Development in Dubai | Expert Web Developers",
    description:
      "Get professional custom website development in Dubai. Tailored design, fast performance, mobile-friendly & SEO-optimized websites built for real business growth.",
    url: "https://www.zentrixinfotech.com/dubai/custom-website-development-in-dubai",
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
    title: "Custom Website Development in Dubai | Expert Web Developers",
    description:
      "Get professional custom website development in Dubai. Tailored design, fast performance, mobile-friendly & SEO-optimized websites built for real business growth.",
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