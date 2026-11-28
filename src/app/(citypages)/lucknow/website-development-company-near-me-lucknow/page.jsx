import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company Near Me in Lucknow | Zentrix",

  description:
    "Looking for a website development company near you in Lucknow? Zentrix Infotech builds fast, SEO-ready websites and supports you by call, video and WhatsApp.",

  keywords: [
    "website development company near me Lucknow",
    "website development company near me",
    "website developers near me Lucknow",
    "web development company near me Lucknow",
    "website development company in Lucknow",
    "local website developers Lucknow",
    "custom website development Lucknow",
    "e-commerce website development Lucknow",
    "SEO-friendly website development Lucknow",
    "website designer near me Lucknow",
    "hire website developer Lucknow",
    "website development services Lucknow",
    "website for small business Lucknow",
    "near me SEO website",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-development-company-near-me-lucknow",
  },

  openGraph: {
    title: "Website Development Company Near Me in Lucknow | Zentrix",
    description:
      "Looking for a website development company near you in Lucknow? Zentrix Infotech builds fast, SEO-ready websites and supports you by call, video and WhatsApp.",
    url:
      "https://www.zentrixinfotech.com/lucknow/website-development-company-near-me-lucknow",
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
    title: "Website Development Company Near Me in Lucknow | Zentrix",
    description:
      "Looking for a website development company near you in Lucknow? Zentrix Infotech builds fast, SEO-ready websites and supports you by call, video and WhatsApp.",
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