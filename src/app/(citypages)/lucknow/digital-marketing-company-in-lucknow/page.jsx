import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Company in Lucknow | Zentrix Infotech",
  description:
    "Looking for a digital marketing company in Lucknow? Zentrix Infotech offers SEO, social media and paid ads with a website-first approach. Get a free quote.",
  keywords:
    "Digital Marketing Company in Lucknow, digital marketing agency in Lucknow, digital marketing services in Lucknow, SEO services in Lucknow, local SEO company in Lucknow, social media marketing company in Lucknow, Google Ads management in Lucknow, Facebook and Instagram ads in Lucknow, affordable digital marketing company in Lucknow, digital marketing for small business in Lucknow, performance marketing in Lucknow, lead generation company in Lucknow, online marketing company in Lucknow, website-first digital marketing, SEO and web development together, local search visibility, Google Business Profile optimization, lead generation campaigns, social media advertising, conversion tracking, marketing reports, how to choose a digital marketing company in Lucknow, digital marketing cost in Lucknow, how long does SEO take",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/digital-marketing-company-in-lucknow",
  },

  openGraph: {
    title: "Digital Marketing Company in Lucknow | Zentrix Infotech",
    description:
      "Looking for a digital marketing company in Lucknow? Zentrix Infotech offers SEO, social media and paid ads with a website-first approach. Get a free quote.",
    url: "https://www.zentrixinfotech.com/lucknow/digital-marketing-company-in-lucknow",
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
    title: "Digital Marketing Company in Lucknow | Zentrix Infotech",
    description:
      "Looking for a digital marketing company in Lucknow? Zentrix Infotech offers SEO, social media and paid ads with a website-first approach. Get a free quote.",
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