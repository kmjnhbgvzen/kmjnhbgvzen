import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Company in Moradabad Near Me | Zentrix",
  description:
    "Searching for an enterprise software development company in Moradabad near you? Zentrix Infotech builds secure ERP, CRM and custom systems. Visit us or book a free call.",
  keywords:
    "enterprise software development company in moradabad near me, enterprise software company moradabad near me, enterprise software developers near me moradabad, custom software company near me moradabad, ERP development company moradabad near me, local enterprise software company moradabad, enterprise application development moradabad, software development company moradabad, enterprise software development moradabad, enterprise software solutions moradabad, hire enterprise software developers moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-in-moradabad-near-me",
  },

  openGraph: {
    title: "Enterprise Software Company in Moradabad Near Me | Zentrix",
    description:
      "Searching for an enterprise software development company in Moradabad near you? Zentrix Infotech builds secure ERP, CRM and custom systems. Visit us or book a free call.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-in-moradabad-near-me",
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
    title: "Enterprise Software Company in Moradabad Near Me | Zentrix",
    description:
      "Searching for an enterprise software development company in Moradabad near you? Zentrix Infotech builds secure ERP, CRM and custom systems. Visit us or book a free call.",
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