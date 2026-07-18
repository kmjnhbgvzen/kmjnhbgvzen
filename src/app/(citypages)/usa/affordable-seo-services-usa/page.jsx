import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable SEO Services in USA",
  description:
    "Looking for affordable SEO services in the USA? Get expert on-page, off-page & local SEO that boosts rankings, traffic & leads without breaking your budget.",
  keywords:
    "affordable SEO services USA, cheap SEO services USA, best SEO company USA, low cost SEO packages, small business SEO USA, local SEO services USA, affordable SEO agency, SEO services for startups, monthly SEO packages USA, budget friendly SEO compan",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/affordable-seo-services-usa",
  },
  openGraph: {
    title: "Affordable SEO Services in USA",
    description:
      "Looking for affordable SEO services in the USA? Get expert on-page, off-page & local SEO that boosts rankings, traffic & leads without breaking your budget.",
    url: "https://www.zentrixinfotech.com/usa/affordable-seo-services-usa",
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
    title: "Affordable SEO Services in USA",
    description:
      "Looking for affordable SEO services in the USA? Get expert on-page, off-page & local SEO that boosts rankings, traffic & leads without breaking your budget.",
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