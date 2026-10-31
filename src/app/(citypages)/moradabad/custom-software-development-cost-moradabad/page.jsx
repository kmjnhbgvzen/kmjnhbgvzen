import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Development Cost Moradabad | Zentrix Infotech",
  description:
    "See what custom software really costs in Moradabad: price by project type, cost by development phase and smart ways to save. Get a free quote from Zentrix Infotech.",
  keywords:
    "custom software development cost moradabad, cost of custom software in moradabad, custom software cost by project type, custom ERP cost moradabad, custom CRM cost moradabad, e-commerce website cost moradabad, school management software cost, hospital software cost india, mobile app development cost moradabad, software development cost breakdown, how much does custom software cost, custom software budget planning, software development company moradabad, affordable custom software moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-development-cost-moradabad",
  },

  openGraph: {
    title: "Custom Software Development Cost Moradabad | Zentrix Infotech",
    description:
      "See what custom software really costs in Moradabad: price by project type, cost by development phase and smart ways to save. Get a free quote from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-software-development-cost-moradabad",
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
    title: "Custom Software Development Cost Moradabad | Zentrix Infotech",
    description:
      "See what custom software really costs in Moradabad: price by project type, cost by development phase and smart ways to save. Get a free quote from Zentrix Infotech.",
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