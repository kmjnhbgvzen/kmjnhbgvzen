import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "On-Page SEO Services USA | Boost Rankings & Organic Traffic",
  description:
    "Expert on-page SEO services for businesses in the USA. Improve keyword optimization, content structure, and technical page elements to rank higher on Google. Get a free audit.",
  keywords:
    "on-page seo services usa, on-page seo company usa, on-page optimization services, on-page seo experts usa, website on-page seo, technical on-page seo usa, best on-page seo agency usa, on-page seo audit services, google on-page ranking factors, on-page seo consultant",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/on-page-seo-services-usa",
  },
  openGraph: {
    title: "On-Page SEO Services USA | Boost Rankings & Organic Traffic",
    description:
      "Expert on-page SEO services for businesses in the USA. Improve keyword optimization, content structure, and technical page elements to rank higher on Google. Get a free audit.",
    url: "https://www.zentrixinfotech.com/usa/on-page-seo-services-usa",
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
    title: "On-Page SEO Services USA | Boost Rankings & Organic Traffic",
    description:
      "Expert on-page SEO services for businesses in the USA. Improve keyword optimization, content structure, and technical page elements to rank higher on Google. Get a free audit.",
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