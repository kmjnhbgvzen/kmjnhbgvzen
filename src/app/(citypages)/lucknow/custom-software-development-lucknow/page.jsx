import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Custom Software Development in Lucknow | Zentrix Infotech",

  description:
    "Need custom software development in Lucknow? Zentrix Infotech builds tailor-made business software, web and mobile apps. 250+ projects, 4.7/5 rating. Get a quote.",

  keywords:
    "custom software development lucknow, custom software development company in lucknow, custom software development services lucknow, bespoke software development lucknow, tailor made software lucknow, custom business software lucknow, custom web application development lucknow, custom mobile app development lucknow, custom erp and crm software lucknow, software development company in lucknow, custom software vs ready made software, custom software for small business lucknow, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/custom-software-development-lucknow",
  },

  openGraph: {
    title:
      "Custom Software Development in Lucknow | Zentrix Infotech",
    description:
      "Need custom software development in Lucknow? Zentrix Infotech builds tailor-made business software, web and mobile apps. 250+ projects, 4.7/5 rating. Get a quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/custom-software-development-lucknow",
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
      "Custom Software Development in Lucknow | Zentrix Infotech",
    description:
      "Need custom software development in Lucknow? Zentrix Infotech builds tailor-made business software, web and mobile apps. 250+ projects, 4.7/5 rating. Get a quote.",
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