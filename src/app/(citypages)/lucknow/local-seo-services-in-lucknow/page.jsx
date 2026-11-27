import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Local SEO Services in Lucknow: Maps & Reviews | Zentrix",


  description:
    "Explore local SEO services in Lucknow: Google Business Profile, reviews, local pages, listings and tracking. Zentrix Infotech plans around your goals.",


  keywords:
    "local SEO services in Lucknow, local SEO services Lucknow, local SEO company Lucknow, Google Business Profile services, local SEO for small business, local listing management, review management services, map ranking services, local SEO packages, Google Maps SEO, NAP consistency, local pages, local SEO audit, mobile SEO, SEO services Lucknow, near me SEO, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/local-seo-services-in-lucknow",
  },


  openGraph: {
    title: "Local SEO Services in Lucknow: Maps & Reviews | Zentrix",
    description:
      "Explore local SEO services in Lucknow: Google Business Profile, reviews, local pages, listings and tracking. Zentrix Infotech plans around your goals.",
    url:
      "https://www.zentrixinfotech.com/lucknow/local-seo-services-in-lucknow",
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
    title: "Local SEO Services in Lucknow: Maps & Reviews | Zentrix",
    description:
      "Explore local SEO services in Lucknow: Google Business Profile, reviews, local pages, listings and tracking. Zentrix Infotech plans around your goals.",
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