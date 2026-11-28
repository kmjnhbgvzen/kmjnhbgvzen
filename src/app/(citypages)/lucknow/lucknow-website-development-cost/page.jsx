import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lucknow Website Development Cost | Zentrix Infotech",

  description:
    "Wondering about website development cost in Lucknow? See what drives the price, how to get an accurate quote and what Zentrix Infotech includes. Call us.",

  keywords: [
    "Lucknow website development cost",
    "website development cost in Lucknow",
    "website development price Lucknow",
    "how much does a website cost in Lucknow",
    "website design and development cost Lucknow",
    "e-commerce website cost Lucknow",
    "small business website cost Lucknow",
    "website development quote Lucknow",
    "website cost factors",
    "website maintenance cost",
    "website development budget planning",
    "affordable website development Lucknow",
    "cost of custom website",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-cost",
  },

  openGraph: {
    title: "Lucknow Website Development Cost | Zentrix Infotech",
    description:
      "Wondering about website development cost in Lucknow? See what drives the price, how to get an accurate quote and what Zentrix Infotech includes. Call us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-cost",
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
    title: "Lucknow Website Development Cost | Zentrix Infotech",
    description:
      "Wondering about website development cost in Lucknow? See what drives the price, how to get an accurate quote and what Zentrix Infotech includes. Call us.",
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