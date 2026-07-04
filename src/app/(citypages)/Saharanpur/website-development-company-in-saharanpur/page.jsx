import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Saharanpur | Custom Web Design Experts",
  description:
    "Looking for a trusted website development company in Saharanpur? Get custom, mobile-friendly, SEO-ready websites for businesses of all sizes. Free consultation.",
  keywords:
    "website development company in Saharanpur, web design company Saharanpur, website designing services Saharanpur, custom website development Saharanpur, ecommerce website development Saharanpur, affordable web development Saharanpur, best web developers in Saharanpur, business website design UP, responsive website design Saharanpur, local SEO services Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/website-development-company-in-saharanpur",
  },
  openGraph: {
    title: "Website Development Company in Saharanpur | Custom Web Design Experts",
    description:
      "Looking for a trusted website development company in Saharanpur? Get custom, mobile-friendly, SEO-ready websites for businesses of all sizes. Free consultation.",
    url: "https://www.zentrixinfotech.com/cities/saharanpur/website-development-company-in-saharanpur",
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
    title: "Website Development Company in Saharanpur | Custom Web Design Experts",
    description:
      "Looking for a trusted website development company in Saharanpur? Get custom, mobile-friendly, SEO-ready websites for businesses of all sizes. Free consultation.",
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