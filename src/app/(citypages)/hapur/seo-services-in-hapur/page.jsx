import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Hapur | Affordable & Result-Driven SEO Company",
  description:
    "Looking for professional SEO services in Hapur? Improve your Google rankings, drive organic traffic, and grow your business with expert local SEO solutions.",
  keywords:
    "SEO services in Hapur, SEO company Hapur, local SEO Hapur, SEO agency Hapur, affordable SEO services Hapur, digital marketing Hapur, website SEO Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/seo-services-in-hapur",
  },
  openGraph: {
    title: "SEO Services in Hapur | Affordable & Result-Driven SEO Company",
    description:
      "Looking for professional SEO services in Hapur? Improve your Google rankings, drive organic traffic, and grow your business with expert local SEO solutions.",
    url: "https://www.zentrixinfotech.com/hapur/seo-services-in-hapur",
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
    title: "SEO Services in Hapur | Affordable & Result-Driven SEO Company",
    description:
      "Looking for professional SEO services in Hapur? Improve your Google rankings, drive organic traffic, and grow your business with expert local SEO solutions.",
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