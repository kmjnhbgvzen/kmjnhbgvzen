import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile Responsive Website Development USA | Fast & Adaptive Sites",
  description:
    "Professional mobile responsive website development in USA. Fast, adaptive, SEO-friendly websites that work perfectly across all devices. Get a free quote today.",
  keywords:
    "mobile responsive website development USA, responsive web design company, mobile friendly website development, responsive website development agency, mobile optimized website design USA, responsive web design services, mobile first website development, adaptive website design company, responsive ecommerce website development, best responsive web developers",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/mobile-responsive-website-development-usa",
  },
  openGraph: {
    title: "Mobile Responsive Website Development USA | Fast & Adaptive Sites",
    description:
      "Professional mobile responsive website development in USA. Fast, adaptive, SEO-friendly websites that work perfectly across all devices. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/usa/mobile-responsive-website-development-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Responsive Website Development USA | Fast & Adaptive Sites",
    description:
      "Professional mobile responsive website development in USA. Fast, adaptive, SEO-friendly websites that work perfectly across all devices. Get a free quote today.",
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