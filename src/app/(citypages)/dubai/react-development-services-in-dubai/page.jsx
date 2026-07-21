import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "React Development Services in Dubai | Zentrix Infotech",
  description:
    "Hire expert React developers in Dubai. Zentrix Infotech builds fast, scalable, custom React websites and web applications designed to perform, rank, and convert.",
  keywords:
    "React development services Dubai, React development company Dubai, hire React developers Dubai, React JS web development UAE, custom React web app development, React website development company, best React development company UAE, React e-commerce development Dubai, React JS agency Dubai, enterprise React development services",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/react-development-services-in-dubai",
  },

  openGraph: {
    title: "React Development Services in Dubai | Zentrix Infotech",
    description:
      "Hire expert React developers in Dubai. Zentrix Infotech builds fast, scalable, custom React websites and web applications designed to perform, rank, and convert.",
    url: "https://www.zentrixinfotech.com/dubai/react-development-services-in-dubai",
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
    title: "React Development Services in Dubai | Zentrix Infotech",
    description:
      "Hire expert React developers in Dubai. Zentrix Infotech builds fast, scalable, custom React websites and web applications designed to perform, rank, and convert.",
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