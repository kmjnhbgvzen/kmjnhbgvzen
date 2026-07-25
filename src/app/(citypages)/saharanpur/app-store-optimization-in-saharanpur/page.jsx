import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization in Saharanpur | Zentrix Infotech",
  description:
    "Need app store optimization in Saharanpur? Improve app visibility, keyword rankings, and installs with ASO services designed for growth.",
  keywords:
    "app store optimization in Saharanpur, ASO services Saharanpur, app listing optimization, mobile app SEO, Play Store optimization, App Store optimization, app ranking services Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/app-store-optimization-in-saharanpur",
  },
  openGraph: {
    title: "App Store Optimization in Saharanpur | Zentrix Infotech",
    description:
      "Need app store optimization in Saharanpur? Improve app visibility, keyword rankings, and installs with ASO services designed for growth.",
    url: "https://www.zentrixinfotech.com/saharanpur/app-store-optimization-in-saharanpur",
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
    title: "App Store Optimization in Saharanpur | Zentrix Infotech",
    description:
      "Need app store optimization in Saharanpur? Improve app visibility, keyword rankings, and installs with ASO services designed for growth.",
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