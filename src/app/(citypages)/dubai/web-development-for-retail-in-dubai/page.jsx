import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Retail in Dubai | Retail Website Experts",
  description:
    "Custom web development for retail businesses in Dubai. Online stores, in-store integration, mobile-friendly design & SEO to boost retail sales.",
  keywords:
    "web development for retail in Dubai, retail website development Dubai, retail web design UAE, retail store website company Dubai, online retail store development Dubai, retail ecommerce website Dubai, POS integrated website Dubai, retail SEO services Dubai, hire retail web developer Dubai, best retail website company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-retail-in-dubai",
  },

  openGraph: {
    title: "Web Development for Retail in Dubai | Retail Website Experts",
    description:
      "Custom web development for retail businesses in Dubai. Online stores, in-store integration, mobile-friendly design & SEO to boost retail sales.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-retail-in-dubai",
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
    title: "Web Development for Retail in Dubai | Retail Website Experts",
    description:
      "Custom web development for retail businesses in Dubai. Online stores, in-store integration, mobile-friendly design & SEO to boost retail sales.",
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