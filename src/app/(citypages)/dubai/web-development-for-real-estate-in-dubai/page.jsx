import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Real Estate in Dubai | Property Websites",
  description:
    "Custom web development for real estate businesses in Dubai. Property listing websites, IDX/MLS integration, lead capture & SEO-ready design that sells.",
  keywords:
    "web development for real estate in Dubai, real estate website development Dubai, property listing website Dubai, real estate web design UAE, real estate agency website development, IDX MLS website Dubai, hire real estate web developer Dubai, real estate portal development Dubai, property website SEO Dubai, best real estate website company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-real-estate-in-dubai",
  },

  openGraph: {
    title: "Web Development for Real Estate in Dubai | Property Websites",
    description:
      "Custom web development for real estate businesses in Dubai. Property listing websites, IDX/MLS integration, lead capture & SEO-ready design that sells.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-real-estate-in-dubai",
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
    title: "Web Development for Real Estate in Dubai | Property Websites",
    description:
      "Custom web development for real estate businesses in Dubai. Property listing websites, IDX/MLS integration, lead capture & SEO-ready design that sells.",
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