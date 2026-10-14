import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire SEO Expert in Moradabad | Zentrix Infotech",
  description:
    "Want to hire an SEO expert in Moradabad? Learn when to hire, what to expect, how to brief them and how Zentrix Infotech delivers measurable SEO growth.",
  keywords:
    "hire SEO expert Moradabad, hire SEO expert in Moradabad, SEO expert for hire Moradabad, hire SEO specialist Moradabad, hire SEO consultant Moradabad, hire local SEO expert Moradabad, SEO expert cost Moradabad, dedicated SEO expert Moradabad, SEO services Moradabad, SEO company Moradabad, Zentrix Infotech SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-seo-expert-moradabad",
  },

  openGraph: {
    title: "Hire SEO Expert in Moradabad | Zentrix Infotech",
    description:
      "Want to hire an SEO expert in Moradabad? Learn when to hire, what to expect, how to brief them and how Zentrix Infotech delivers measurable SEO growth.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-seo-expert-moradabad",
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
    title: "Hire SEO Expert in Moradabad | Zentrix Infotech",
    description:
      "Want to hire an SEO expert in Moradabad? Learn when to hire, what to expect, how to brief them and how Zentrix Infotech delivers measurable SEO growth.",
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