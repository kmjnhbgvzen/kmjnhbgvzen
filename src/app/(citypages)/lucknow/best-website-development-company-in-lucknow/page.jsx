import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Website Development Company Lucknow | Zentrix Infotech",

  description:
    "Searching for the best website development company in Lucknow? Learn how to choose the right one and see what Zentrix Infotech offers. Call to get started.",

  keywords: [
    "best website development company in Lucknow",
    "top website development company Lucknow",
    "best web development company Lucknow",
    "website development company in Lucknow",
    "best website developers in Lucknow",
    "custom website development Lucknow",
    "e-commerce website development Lucknow",
    "responsive website development Lucknow",
    "how to choose a website development company",
    "professional website development services",
    "website development services Lucknow",
    "hire website developer Lucknow",
    "SEO-friendly website development",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-website-development-company-in-lucknow",
  },

  openGraph: {
    title: "Best Website Development Company Lucknow | Zentrix Infotech",
    description:
      "Searching for the best website development company in Lucknow? Learn how to choose the right one and see what Zentrix Infotech offers. Call to get started.",
    url:
      "https://www.zentrixinfotech.com/lucknow/best-website-development-company-in-lucknow",
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
    title: "Best Website Development Company Lucknow | Zentrix Infotech",
    description:
      "Searching for the best website development company in Lucknow? Learn how to choose the right one and see what Zentrix Infotech offers. Call to get started.",
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