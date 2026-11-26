import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company Near Me Lucknow | Zentrix",

  description:
    "Searching for a software development company near you in Lucknow? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects. Call for a quote.",

  keywords:
    "software development company near me lucknow, software company near me lucknow, software development company in lucknow, local software company lucknow, custom software development near me, software developers near me lucknow, IT company near me lucknow, web and mobile app development lucknow, business software company lucknow, hire software developers lucknow, software development services lucknow, software company uttar pradesh, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/software-development-company-near-me-lucknow",
  },

  openGraph: {
    title:
      "Software Development Company Near Me Lucknow | Zentrix",
    description:
      "Searching for a software development company near you in Lucknow? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects. Call for a quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/software-development-company-near-me-lucknow",
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
    title:
      "Software Development Company Near Me Lucknow | Zentrix",
    description:
      "Searching for a software development company near you in Lucknow? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects. Call for a quote.",
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