import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Maintenance Services USA | Reliable Ongoing Support",
  description:
    "Professional website maintenance services in USA. Regular updates, security monitoring, backups, and performance optimization to keep your site running smoothly. Get a free quote today.",
  keywords:
    "website maintenance services USA, website support and maintenance company, monthly website maintenance plans, WordPress maintenance services USA, website security monitoring services, ongoing website support company, affordable website maintenance USA, website update and backup services, ecommerce website maintenance services, best website maintenance company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/website-maintenance-services-usa",
  },
  openGraph: {
    title: "Website Maintenance Services USA | Reliable Ongoing Support",
    description:
      "Professional website maintenance services in USA. Regular updates, security monitoring, backups, and performance optimization to keep your site running smoothly. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/usa/website-maintenance-services-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Maintenance Services USA | Reliable Ongoing Support",
    description:
      "Professional website maintenance services in USA. Regular updates, security monitoring, backups, and performance optimization to keep your site running smoothly. Get a free quote today.",
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