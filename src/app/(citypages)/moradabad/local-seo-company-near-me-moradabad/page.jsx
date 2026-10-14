import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Company Near Me in Moradabad | Zentrix Infotech",
  description:
    "Searching for a local SEO company near you in Moradabad? Learn how local SEO works, what to look for and how Zentrix Infotech boosts calls and visits.",
  keywords:
    "local SEO company near me Moradabad, local SEO company Moradabad, local SEO services near me, SEO company near me Moradabad, Google Business Profile optimization Moradabad, Google Maps ranking Moradabad, near me searches Moradabad, local SEO for small business Moradabad, local listing management Moradabad, local SEO expert Moradabad, Zentrix Infotech local SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/local-seo-company-near-me-moradabad",
  },

  openGraph: {
    title: "Local SEO Company Near Me in Moradabad | Zentrix Infotech",
    description:
      "Searching for a local SEO company near you in Moradabad? Learn how local SEO works, what to look for and how Zentrix Infotech boosts calls and visits.",
    url: "https://www.zentrixinfotech.com/moradabad/local-seo-company-near-me-moradabad",
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
    title: "Local SEO Company Near Me in Moradabad | Zentrix Infotech",
    description:
      "Searching for a local SEO company near you in Moradabad? Learn how local SEO works, what to look for and how Zentrix Infotech boosts calls and visits.",
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