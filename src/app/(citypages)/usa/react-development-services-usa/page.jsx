import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "React Development Services USA | Custom React Web Apps",
  description:
    "Professional React development services in USA. Fast, scalable, and interactive web applications built by expert React developers. Get a free consultation and quote today.",
  keywords:
    "React development services USA, React development company, hire React developers USA, custom React web application development, React JS development agency, React frontend development services, React SaaS development, React web app development company, best React developers USA, React consulting services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/react-development-services-usa",
  },
  openGraph: {
    title: "React Development Services USA | Custom React Web Apps",
    description:
      "Professional React development services in USA. Fast, scalable, and interactive web applications built by expert React developers. Get a free consultation and quote today.",
    url: "https://www.zentrixinfotech.com/usa/react-development-services-usa",
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
    title: "React Development Services USA | Custom React Web Apps",
    description:
      "Professional React development services in USA. Fast, scalable, and interactive web applications built by expert React developers. Get a free consultation and quote today.",
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