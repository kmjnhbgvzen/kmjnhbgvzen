import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Agency in Lucknow | Zentrix Infotech",

  description:
    "Need a website development agency in Lucknow? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for businesses. Call us to get started.",

  keywords: [
    "website development agency in Lucknow",
    "website development company Lucknow",
    "web development agency Lucknow",
    "website developers in Lucknow",
    "custom website development Lucknow",
    "business website development Lucknow",
    "e-commerce website development Lucknow",
    "responsive website development Lucknow",
    "SEO-friendly website development Lucknow",
    "hire website developer Lucknow",
    "website development services Lucknow",
    "website for small business Lucknow",
    "website redesign Lucknow",
    "professional website development services",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-development-agency-in-lucknow",
  },

  openGraph: {
    title: "Website Development Agency in Lucknow | Zentrix Infotech",
    description:
      "Need a website development agency in Lucknow? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for businesses. Call us to get started.",
    url: "https://www.zentrixinfotech.com/lucknow/website-development-agency-in-lucknow",
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
    title: "Website Development Agency in Lucknow | Zentrix Infotech",
    description:
      "Need a website development agency in Lucknow? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for businesses. Call us to get started.",
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