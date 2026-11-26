import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Web and Software Development Company in Lucknow | Zentrix",

  description:
    "Looking for a web and software development company in Lucknow? Zentrix Infotech builds websites, custom software and mobile apps. 250+ projects. Get a free quote.",

  keywords:
    "web and software development company lucknow, web development and software development company in lucknow, website and software development services lucknow, custom software development lucknow, web application development lucknow, mobile app development lucknow, website development company in lucknow, software development company in lucknow, business website and software solutions lucknow, IT company in lucknow, full service web and software company lucknow, hire web and software developers lucknow, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/web-and-software-development-company-lucknow",
  },

  openGraph: {
    title:
      "Web and Software Development Company in Lucknow | Zentrix",
    description:
      "Looking for a web and software development company in Lucknow? Zentrix Infotech builds websites, custom software and mobile apps. 250+ projects. Get a free quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/web-and-software-development-company-lucknow",
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
      "Web and Software Development Company in Lucknow | Zentrix",
    description:
      "Looking for a web and software development company in Lucknow? Zentrix Infotech builds websites, custom software and mobile apps. 250+ projects. Get a free quote.",
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