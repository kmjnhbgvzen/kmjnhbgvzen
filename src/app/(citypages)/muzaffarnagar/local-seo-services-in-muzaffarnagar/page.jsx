import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Muzaffarnagar | Zentrix Infotech",
  description:
    "Get found by nearby customers with expert local SEO services in Muzaffarnagar. Zentrix Infotech optimizes Google Business Profile, citations & rankings.",
  keywords:
    "local seo services in muzaffarnagar, local seo company muzaffarnagar, google business profile optimization muzaffarnagar, local seo agency near me, seo services muzaffarnagar, google maps ranking services, local search optimization up, small business seo muzaffarnagar, best local seo company, near me seo services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/muzaffarnagar/local-seo-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "Local SEO Services in Muzaffarnagar | Zentrix Infotech",
    description:
      "Get found by nearby customers with expert local SEO services in Muzaffarnagar. Zentrix Infotech optimizes Google Business Profile, citations & rankings.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/local-seo-services-in-muzaffarnagar",
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
    title: "Local SEO Services in Muzaffarnagar | Zentrix Infotech",
    description:
      "Get found by nearby customers with expert local SEO services in Muzaffarnagar. Zentrix Infotech optimizes Google Business Profile, citations & rankings.",
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