import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Solutions Provider Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is an enterprise software solutions provider in Moradabad. ERP, CRM, cloud and custom systems that solve real problems. 250+ projects, 4.7/5 rating.",
  keywords:
    "enterprise software solutions provider moradabad, enterprise software solutions moradabad, enterprise solutions provider moradabad, enterprise IT solutions moradabad, business software solutions provider moradabad, ERP solutions provider moradabad, CRM solutions provider moradabad, custom enterprise solutions moradabad, cloud solutions provider moradabad, enterprise software development company moradabad, IT solutions company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-solutions-provider-moradabad",
  },

  openGraph: {
    title: "Enterprise Software Solutions Provider Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an enterprise software solutions provider in Moradabad. ERP, CRM, cloud and custom systems that solve real problems. 250+ projects, 4.7/5 rating.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-solutions-provider-moradabad",
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
    title: "Enterprise Software Solutions Provider Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an enterprise software solutions provider in Moradabad. ERP, CRM, cloud and custom systems that solve real problems. 250+ projects, 4.7/5 rating.",
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