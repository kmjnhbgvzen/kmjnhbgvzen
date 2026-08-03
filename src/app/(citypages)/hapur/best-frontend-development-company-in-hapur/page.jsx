import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Frontend Development Company in Hapur | UI Experts You Can Trust",
  description:
    "Looking for the best frontend development company in Hapur? Get fast, responsive, user-friendly websites and web apps built by an experienced UI team.",
  keywords:
    "best frontend development company in Hapur, frontend development company Hapur, frontend developers near me, UI development company Hapur, responsive website development Hapur, HTML CSS JavaScript company Hapur, front end web design company, frontend agency Hapur, web application UI company, business website development company Hapur, cross browser development Hapur, frontend outsourcing company India",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/best-frontend-development-company-hapur",
  },
  openGraph: {
    title: "Best Frontend Development Company in Hapur | UI Experts You Can Trust",
    description:
      "Looking for the best frontend development company in Hapur? Get fast, responsive, user-friendly websites and web apps built by an experienced UI team.",
    url: "https://www.zentrixinfotech.com/hapur/best-frontend-development-company-hapur",
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
    title: "Best Frontend Development Company in Hapur | UI Experts You Can Trust",
    description:
      "Looking for the best frontend development company in Hapur? Get fast, responsive, user-friendly websites and web apps built by an experienced UI team.",
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