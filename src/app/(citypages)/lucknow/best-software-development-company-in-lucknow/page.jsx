import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Software Development Company in Lucknow | Zentrix",

  description:
    "Looking for the best software development company in Lucknow? Learn what to check before you hire, and how Zentrix Infotech works. Get a free consultation.",

  keywords:
    "Best Software Development Company in Lucknow, top software development company in Lucknow, best software company in Lucknow, custom software development company in Lucknow, best custom software developers in Lucknow, software development services in Lucknow, professional software development company in Lucknow, affordable software development company in Lucknow, business software development in Lucknow, web application development company in Lucknow, software outsourcing company in Lucknow, enterprise software development in Lucknow, how to choose a software development company in Lucknow, questions to ask a software development company, how to read a software development proposal, custom software cost in Lucknow, software project phases, software ownership and source code, software maintenance and support, start-small software pilot, scalable software architecture, software integration",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-software-development-company-in-lucknow",
  },

  openGraph: {
    title: "Best Software Development Company in Lucknow | Zentrix",
    description:
      "Looking for the best software development company in Lucknow? Learn what to check before you hire, and how Zentrix Infotech works. Get a free consultation.",
    url:
      "https://www.zentrixinfotech.com/lucknow/best-software-development-company-in-lucknow",
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
    title: "Best Software Development Company in Lucknow | Zentrix",
    description:
      "Looking for the best software development company in Lucknow? Learn what to check before you hire, and how Zentrix Infotech works. Get a free consultation.",
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