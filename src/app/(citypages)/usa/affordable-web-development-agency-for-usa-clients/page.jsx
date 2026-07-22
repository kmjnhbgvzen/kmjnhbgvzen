import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Web Development Agency for USA Clients | Quality Sites",
  description:
    "Looking for an affordable web development agency for USA clients? Get professional, budget-friendly websites without compromising quality. Get a free quote today.",
  keywords:
    "affordable web development agency for USA clients, affordable website development company USA, budget friendly web development agency, cheap website development company USA, low cost web design services USA, affordable custom website development, small business web development agency, cost effective website development company, affordable ecommerce website development, best affordable web developers USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/affordable-web-development-agency-for-usa-clients",
  },
  openGraph: {
    title: "Affordable Web Development Agency for USA Clients | Quality Sites",
    description:
      "Looking for an affordable web development agency for USA clients? Get professional, budget-friendly websites without compromising quality. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/usa/affordable-web-development-agency-for-usa-clients",
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
    title: "Affordable Web Development Agency for USA Clients | Quality Sites",
    description:
      "Looking for an affordable web development agency for USA clients? Get professional, budget-friendly websites without compromising quality. Get a free quote today.",
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