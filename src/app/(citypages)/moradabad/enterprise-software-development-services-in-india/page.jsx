import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Services in India | Zentrix",
  description:
    "Zentrix Infotech delivers secure, scalable enterprise software development services in India: ERP, CRM, portals, cloud and integrations. Get a free consultation.",
  keywords:
    "enterprise software development services in india, enterprise software development company india, custom enterprise software india, enterprise application development india, enterprise software solutions india, ERP development services india, enterprise software development India cost, cloud based enterprise software india, enterprise software integration india, enterprise software development Moradabad, hire enterprise software developers india, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-services-in-india",
  },

  openGraph: {
    title: "Enterprise Software Development Services in India | Zentrix",
    description:
      "Zentrix Infotech delivers secure, scalable enterprise software development services in India: ERP, CRM, portals, cloud and integrations. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-services-in-india",
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
    title: "Enterprise Software Development Services in India | Zentrix",
    description:
      "Zentrix Infotech delivers secure, scalable enterprise software development services in India: ERP, CRM, portals, cloud and integrations. Get a free consultation.",
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