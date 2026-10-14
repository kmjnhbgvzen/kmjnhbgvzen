import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire Local SEO Company in Moradabad | Zentrix Infotech",
  description:
    "Ready to hire a local SEO company in Moradabad? Learn when to hire, how to choose, what to expect and how Zentrix Infotech grows your local visibility.",
  keywords:
    "hire local SEO company in Moradabad, hire local SEO company Moradabad, local SEO company Moradabad, local SEO services Moradabad, hire local SEO agency Moradabad, local SEO for small business Moradabad, Google Business Profile management Moradabad, Google Maps ranking Moradabad, trusted local SEO company Moradabad, Zentrix Infotech local SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-local-seo-company-in-moradabad",
  },

  openGraph: {
    title: "Hire Local SEO Company in Moradabad | Zentrix Infotech",
    description:
      "Ready to hire a local SEO company in Moradabad? Learn when to hire, how to choose, what to expect and how Zentrix Infotech grows your local visibility.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-local-seo-company-in-moradabad",
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
    title: "Hire Local SEO Company in Moradabad | Zentrix Infotech",
    description:
      "Ready to hire a local SEO company in Moradabad? Learn when to hire, how to choose, what to expect and how Zentrix Infotech grows your local visibility.",
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