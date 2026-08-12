import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Ayodhya Reputation Management Packages",
  description:
    "Compare reputation management packages for Ayodhya businesses, from basic monitoring to full-service plans, and find the right fit for your brand.",
  keywords:
    "Ayodhya reputation management packages, reputation management package Ayodhya, ORM package tiers, reputation management plans Ayodhya, basic ORM package, premium reputation management package, review management package Ayodhya, reputation management package inclusions, business reputation package, ORM package comparison, digital marketing package Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/reputation-management-packages",
  },
  openGraph: {
    title: "Ayodhya Reputation Management Packages",
    description:
      "Compare reputation management packages for Ayodhya businesses, from basic monitoring to full-service plans, and find the right fit for your brand.",
    url: "https://www.zentrixinfotech.com/ayodhya/reputation-management-packages",
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
    title: "Ayodhya Reputation Management Packages",
    description:
      "Compare reputation management packages for Ayodhya businesses, from basic monitoring to full-service plans, and find the right fit for your brand.",
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