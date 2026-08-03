import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Services in Hapur | Custom Business Solutions",
  description:
    "Get reliable software development services in Hapur — custom ERP, CRM, automation tools & business software built to solve real operational problems.",
  keywords:
    "software development services in Hapur, custom software development company Hapur, ERP software development Hapur, CRM development services, business automation software Hapur, enterprise software company UP, software development company near me, custom application development India, legacy software modernization, inventory management software Hapur, software development cost India, IT solutions company Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/software-development-services-hapur",
  },
  openGraph: {
    title: "Software Development Services in Hapur | Custom Business Solutions",
    description:
      "Get reliable software development services in Hapur — custom ERP, CRM, automation tools & business software built to solve real operational problems.",
    url: "https://www.zentrixinfotech.com/hapur/software-development-services-hapur",
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
    title: "Software Development Services in Hapur | Custom Business Solutions",
    description:
      "Get reliable software development services in Hapur — custom ERP, CRM, automation tools & business software built to solve real operational problems.",
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