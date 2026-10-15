import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Website Development Company Moradabad | Zentrix",
  description:
    "Zentrix Infotech is an affordable website development company in Moradabad. Get fast, SEO-ready, mobile-friendly websites at transparent prices. Call today.",
  keywords:
    "affordable website development company in Moradabad, affordable website development Moradabad, cheap website development Moradabad, low cost website design Moradabad, budget website development company Moradabad, website development company in Moradabad, website designing company Moradabad, web development services Moradabad, ecommerce website development Moradabad, business website development Moradabad, small business website Moradabad, website development cost in Moradabad, best website developer in Moradabad, responsive website design Moradabad, SEO friendly website development Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-website-development-company-in-moradabad",
  },

  openGraph: {
    title: "Affordable Website Development Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an affordable website development company in Moradabad. Get fast, SEO-ready, mobile-friendly websites at transparent prices. Call today.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-website-development-company-in-moradabad",
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
    title: "Affordable Website Development Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an affordable website development company in Moradabad. Get fast, SEO-ready, mobile-friendly websites at transparent prices. Call today.",
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