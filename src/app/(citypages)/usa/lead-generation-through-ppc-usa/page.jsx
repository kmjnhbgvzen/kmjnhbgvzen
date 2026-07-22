import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Through PPC USA | Expert Paid Search Lead Ads",
  description:
    "Generate qualified leads with expert PPC campaigns built for US businesses. Get targeted search, social, and remarketing strategies designed to fill your pipeline with real prospects.",
  keywords:
    "lead generation through ppc usa, ppc lead generation agency usa, ppc for lead generation, pay per click lead generation services, ppc leads agency usa, best ppc lead generation company usa, paid search lead generation, ppc lead gen experts usa, b2b ppc lead generation, local ppc lead generation usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/lead-generation-through-ppc-usa",
  },
  openGraph: {
    title: "Lead Generation Through PPC USA | Expert Paid Search Lead Ads",
    description:
      "Generate qualified leads with expert PPC campaigns built for US businesses. Get targeted search, social, and remarketing strategies designed to fill your pipeline with real prospects.",
    url: "https://www.zentrixinfotech.com/usa/lead-generation-through-ppc-usa",
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
    title: "Lead Generation Through PPC USA | Expert Paid Search Lead Ads",
    description:
      "Generate qualified leads with expert PPC campaigns built for US businesses. Get targeted search, social, and remarketing strategies designed to fill your pipeline with real prospects.",
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