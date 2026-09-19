import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Business Software Development Services | Zentrix Infotech",
  description:
    "Accelerate growth with custom business software development services from Zentrix Infotech. We build scalable ERP, CRM, billing, and enterprise software solutions.",
  keywords:
    "business software development services, custom business software development, enterprise software development, business application development, custom ERP software, custom CRM development, business management software, software development company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/business-software-development-services",
  },
  openGraph: {
    title: "Business Software Development Services | Zentrix Infotech",
    description:
      "Accelerate growth with custom business software development services from Zentrix Infotech. We build scalable ERP, CRM, billing, and enterprise software solutions.",
    url: "https://www.zentrixinfotech.com/business-software-development-services",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Business Software Development Services | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Software Development Services | Zentrix Infotech",
    description:
      "Accelerate growth with custom business software development services from Zentrix Infotech. We build scalable ERP, CRM, billing, and enterprise software solutions.",
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
