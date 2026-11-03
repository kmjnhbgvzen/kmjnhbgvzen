import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Company Moradabad | Zentrix Infotech",
  description:
    "Looking for an enterprise software development company in Moradabad? Zentrix Infotech builds secure, scalable ERP, CRM and custom systems. 250+ projects, 4.7/5 rating.",
  keywords:
    "enterprise software development company moradabad, enterprise software development moradabad, enterprise software company moradabad, custom enterprise software moradabad, enterprise application development moradabad, ERP development company moradabad, CRM development moradabad, business software solutions moradabad, enterprise software solutions india, scalable software development moradabad, software development company moradabad, IT solutions company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-moradabad",
  },

  openGraph: {
    title: "Enterprise Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Looking for an enterprise software development company in Moradabad? Zentrix Infotech builds secure, scalable ERP, CRM and custom systems. 250+ projects, 4.7/5 rating.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-moradabad",
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
    title: "Enterprise Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Looking for an enterprise software development company in Moradabad? Zentrix Infotech builds secure, scalable ERP, CRM and custom systems. 250+ projects, 4.7/5 rating.",
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