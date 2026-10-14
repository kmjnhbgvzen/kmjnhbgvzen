import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best SEO Company in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best SEO company in Moradabad? Learn what sets a top SEO company apart, what to compare and how Zentrix Infotech helps you grow.",
  keywords:
    "best SEO company in Moradabad, top SEO company Moradabad, best SEO agency Moradabad, SEO company in Moradabad, SEO services in Moradabad, local SEO Moradabad, trusted SEO company Moradabad, affordable SEO company Moradabad, SEO experts Moradabad, hire SEO company Moradabad, SEO for small business Moradabad, Google Business Profile optimization Moradabad, Zentrix Infotech SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-seo-company-in-moradabad",
  },

  openGraph: {
    title: "Best SEO Company in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best SEO company in Moradabad? Learn what sets a top SEO company apart, what to compare and how Zentrix Infotech helps you grow.",
    url: "https://www.zentrixinfotech.com/moradabad/best-seo-company-in-moradabad",
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
    title: "Best SEO Company in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best SEO company in Moradabad? Learn what sets a top SEO company apart, what to compare and how Zentrix Infotech helps you grow.",
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