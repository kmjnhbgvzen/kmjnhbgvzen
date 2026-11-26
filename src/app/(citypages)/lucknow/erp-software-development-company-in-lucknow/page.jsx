import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "ERP Software Development Company in Lucknow | Zentrix",

  description:
    "Need an ERP software development company in Lucknow? Zentrix Infotech builds custom ERP systems for your workflow. 250+ projects, 4.7/5 rating. Get a free quote.",

  keywords:
    "erp software development company in lucknow, custom erp software development lucknow, erp development services lucknow, erp software company lucknow, erp solutions for small business lucknow, manufacturing erp software lucknow, school erp software development lucknow, inventory and billing software lucknow, erp and crm software development lucknow, web based erp software lucknow, hire erp developers lucknow, erp software uttar pradesh, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/erp-software-development-company-in-lucknow",
  },

  openGraph: {
    title:
      "ERP Software Development Company in Lucknow | Zentrix",
    description:
      "Need an ERP software development company in Lucknow? Zentrix Infotech builds custom ERP systems for your workflow. 250+ projects, 4.7/5 rating. Get a free quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/erp-software-development-company-in-lucknow",
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
      "ERP Software Development Company in Lucknow | Zentrix",
    description:
      "Need an ERP software development company in Lucknow? Zentrix Infotech builds custom ERP systems for your workflow. 250+ projects, 4.7/5 rating. Get a free quote.",
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