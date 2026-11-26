import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best Software Company in Lucknow | Custom Software | Zentrix",

  description:
    "Searching for the best software company in Lucknow? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects, 4.7/5 rating. Free quote.",

  keywords:
    "best software company in lucknow, software company in lucknow, software development company in lucknow, top software company in lucknow, custom software development company in lucknow, business software solutions lucknow, enterprise software development lucknow, web application development lucknow, mobile app development company lucknow, erp software development lucknow, software company near me lucknow, hire software developers lucknow, IT company in lucknow, software company in uttar pradesh, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-software-company-in-lucknow",
  },

  openGraph: {
    title:
      "Best Software Company in Lucknow | Custom Software | Zentrix",
    description:
      "Searching for the best software company in Lucknow? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects, 4.7/5 rating. Free quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/best-software-company-in-lucknow",
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
      "Best Software Company in Lucknow | Custom Software | Zentrix",
    description:
      "Searching for the best software company in Lucknow? Zentrix Infotech builds custom software, web and mobile apps. 250+ projects, 4.7/5 rating. Free quote.",
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