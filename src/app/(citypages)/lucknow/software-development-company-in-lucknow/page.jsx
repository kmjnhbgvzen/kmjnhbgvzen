import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Development Company in Lucknow – Free Quote",
  description:
    "Custom software, web and mobile apps for Lucknow businesses. 250+ projects, 4.7/5 rating. Get a free consultation and quote from Zentrix Infotech today.",
  keywords:
    "software development company in Lucknow, custom software development Lucknow, software company in Lucknow, Lucknow software developers, web application development Lucknow, mobile app development Lucknow, ERP software development Lucknow, CRM software development Lucknow, hire software developers Lucknow, business software solutions Lucknow, software development services Uttar Pradesh, software company Lucknow near me, best software developer in Lucknow, software banane wali company Lucknow, custom software cost Lucknow, app development company Lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/software-development-company-in-lucknow",
  },

  openGraph: {
    title: "Software Development Company in Lucknow – Free Quote",
    description:
      "Custom software, web and mobile apps for Lucknow businesses. 250+ projects, 4.7/5 rating. Get a free consultation and quote from Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/lucknow/software-development-company-in-lucknow",
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
    title: "Software Development Company in Lucknow – Free Quote",
    description:
      "Custom software, web and mobile apps for Lucknow businesses. 250+ projects, 4.7/5 rating. Get a free consultation and quote from Zentrix Infotech today.",
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