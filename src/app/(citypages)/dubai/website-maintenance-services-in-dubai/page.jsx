import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Maintenance Services in Dubai | Zentrix Infotech",
  description:
    "Keep your website fast, secure, and updated with professional website maintenance services in Dubai. Zentrix Infotech handles updates, security, speed, and support so you don't have to.",
  keywords:
    "website maintenance services Dubai, website maintenance company Dubai, website support services UAE, monthly website maintenance Dubai, website updates and security Dubai, WordPress maintenance services Dubai, ongoing website support UAE, affordable website maintenance company, website care plans Dubai, website management services UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/website-maintenance-services-in-dubai",
  },

  openGraph: {
    title: "Website Maintenance Services in Dubai | Zentrix Infotech",
    description:
      "Keep your website fast, secure, and updated with professional website maintenance services in Dubai. Zentrix Infotech handles updates, security, speed, and support so you don't have to.",
    url: "https://www.zentrixinfotech.com/dubai/website-maintenance-services-in-dubai",
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
    title: "Website Maintenance Services in Dubai | Zentrix Infotech",
    description:
      "Keep your website fast, secure, and updated with professional website maintenance services in Dubai. Zentrix Infotech handles updates, security, speed, and support so you don't have to.",
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