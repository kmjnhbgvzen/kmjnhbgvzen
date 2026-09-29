import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Services India | Zentrix",
  description:
    "Zentrix Infotech offers enterprise software development services in India: custom ERP, CRM, cloud and mobile solutions built to scale. Get a free consultation.",
  keywords:
    "enterprise software development services India, enterprise software development company India, custom enterprise software development, enterprise application development India, ERP software development India, CRM software development company, enterprise mobile app development, cloud-based enterprise solutions, enterprise software modernization, custom software development company India, business software solutions India, software development company Moradabad, software development company Ghaziabad, enterprise digital transformation India, scalable software solutions for enterprises",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/enterprise-software-development-services-india",
  },
  openGraph: {
    title: "Enterprise Software Development Services India | Zentrix",
    description:
      "Zentrix Infotech offers enterprise software development services in India: custom ERP, CRM, cloud and mobile solutions built to scale. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/enterprise-software-development-services-india",
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
    title: "Enterprise Software Development Services India | Zentrix",
    description:
      "Zentrix Infotech offers enterprise software development services in India: custom ERP, CRM, cloud and mobile solutions built to scale. Get a free consultation.",
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
