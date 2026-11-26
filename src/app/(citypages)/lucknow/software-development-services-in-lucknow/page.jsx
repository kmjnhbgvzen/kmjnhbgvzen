import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Services in Lucknow | Zentrix Infotech",

  description:
    "Need software development services in Lucknow? Zentrix Infotech offers custom software, web and mobile app development. 250+ projects, 4.7/5 rating. Get a quote.",

  keywords:
    "software development services in lucknow, custom software development services lucknow, software development company in lucknow, business software development lucknow, web application development services lucknow, mobile app development services lucknow, enterprise software solutions lucknow, software outsourcing services lucknow, erp and crm software development lucknow, software development services uttar pradesh, bespoke software development lucknow, software services near me lucknow, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/software-development-services-in-lucknow",
  },

  openGraph: {
    title:
      "Software Development Services in Lucknow | Zentrix Infotech",
    description:
      "Need software development services in Lucknow? Zentrix Infotech offers custom software, web and mobile app development. 250+ projects, 4.7/5 rating. Get a quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/software-development-services-in-lucknow",
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
      "Software Development Services in Lucknow | Zentrix Infotech",
    description:
      "Need software development services in Lucknow? Zentrix Infotech offers custom software, web and mobile app development. 250+ projects, 4.7/5 rating. Get a quote.",
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