import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development for Small Business in Moradabad | Zentrix",
  description:
    "Small business in Moradabad? Zentrix Infotech builds affordable, practical software and apps in phases, so you start small and grow. Book a free consultation.",
  keywords:
    "software development company for small business in Moradabad, small business software Moradabad, affordable software development Moradabad, custom software for small business, small business app development Moradabad, business automation Moradabad, billing and inventory software Moradabad, small business website and software, software for shops Moradabad, software for small manufacturers Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-for-small-business-in-moradabad",
  },


  openGraph: {
    title: "Software Development for Small Business in Moradabad | Zentrix",
    description:
      "Small business in Moradabad? Zentrix Infotech builds affordable, practical software and apps in phases, so you start small and grow. Book a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-for-small-business-in-moradabad",
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
    title: "Software Development for Small Business in Moradabad | Zentrix",
    description:
      "Small business in Moradabad? Zentrix Infotech builds affordable, practical software and apps in phases, so you start small and grow. Book a free consultation.",
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