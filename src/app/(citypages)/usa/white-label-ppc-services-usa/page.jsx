import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "White Label PPC Services USA",
  description:
    "Reliable white label PPC services in the USA for agencies. Deliver expert Google Ads management under your brand without hiring an in-house team.",
  keywords:
    "white label ppc services usa, white label ppc agency, white label google ads management, white label ppc for agencies, outsource ppc management usa, private label ppc services, white label paid search services, reseller ppc services usa, white label digital marketing usa, white label ppc partner, white label ad management, white label ppc company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/white-label-ppc-services-usa",
  },
  openGraph: {
    title: "White Label PPC Services USA",
    description:
      "Reliable white label PPC services in the USA for agencies. Deliver expert Google Ads management under your brand without hiring an in-house team.",
    url: "https://www.zentrixinfotech.com/usa/white-label-ppc-services-usa",
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
    title: "White Label PPC Services USA",
    description:
      "Reliable white label PPC services in the USA for agencies. Deliver expert Google Ads management under your brand without hiring an in-house team.",
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