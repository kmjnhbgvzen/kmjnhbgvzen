import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Saharanpur | Zentrix Infotech",
  description:
    "Looking for a trusted website development company in Saharanpur? Get custom, mobile-friendly, SEO-ready websites for businesses of all sizes.",
  keywords:
    "website development company in Saharanpur, web design company Saharanpur, custom website development Saharanpur, ecommerce website development Saharanpur, responsive website design Saharanpur, business website design UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/website-development-company-in-saharanpur",
  },
  openGraph: {
    title: "Website Development Company in Saharanpur | Zentrix Infotech",
    description:
      "Looking for a trusted website development company in Saharanpur? Get custom, mobile-friendly, SEO-ready websites for businesses of all sizes.",
    url: "https://www.zentrixinfotech.com/saharanpur/website-development-company-in-saharanpur",
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
    title: "Website Development Company in Saharanpur | Zentrix Infotech",
    description:
      "Looking for a trusted website development company in Saharanpur? Get custom, mobile-friendly, SEO-ready websites for businesses of all sizes.",
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