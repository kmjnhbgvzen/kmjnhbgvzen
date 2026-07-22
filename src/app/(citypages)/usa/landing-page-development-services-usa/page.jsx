import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Landing Page Development Services USA | Zentrix Infotech",
  description:
    "Zentrix Infotech builds high-converting landing pages for USA businesses, designed with fast load times, clear messaging, and strong calls-to-action that drive results.",
  keywords:
    "landing page development services USA, landing page design company USA, hire landing page developer USA, high converting landing page development, custom landing page design USA, PPC landing page development company, affordable landing page development USA, landing page development for startups, best landing page design agency USA, lead generation landing page development",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/landing-page-development-services-usa",
  },
  openGraph: {
    title: "Landing Page Development Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech builds high-converting landing pages for USA businesses, designed with fast load times, clear messaging, and strong calls-to-action that drive results.",
    url: "https://www.zentrixinfotech.com/usa/landing-page-development-services-usa",
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
    title: "Landing Page Development Services USA | Zentrix Infotech",
    description:
      "Zentrix Infotech builds high-converting landing pages for USA businesses, designed with fast load times, clear messaging, and strong calls-to-action that drive results.",
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