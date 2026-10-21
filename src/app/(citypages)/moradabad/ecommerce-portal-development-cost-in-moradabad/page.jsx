import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Portal Development Cost in Moradabad | Zentrix",
  description:
    "Wondering about ecommerce portal development cost in Moradabad? Learn what affects pricing and get a clear, transparent quote from Zentrix Infotech today.",
  keywords:
    "ecommerce portal development cost in moradabad, ecommerce portal development moradabad, ecommerce portal development company moradabad, ecommerce website cost moradabad, online shopping portal development cost, multi vendor marketplace development cost, b2b ecommerce portal development, custom ecommerce portal development, ecommerce portal pricing india, how much does an ecommerce portal cost, ecommerce portal features and cost, affordable ecommerce portal development, ecommerce development quote moradabad, ecommerce portal for small business, ecommerce portal with payment gateway, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-portal-development-cost-in-moradabad",
  },

  openGraph: {
    title: "Ecommerce Portal Development Cost in Moradabad | Zentrix",
    description:
      "Wondering about ecommerce portal development cost in Moradabad? Learn what affects pricing and get a clear, transparent quote from Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-portal-development-cost-in-moradabad",
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
    title: "Ecommerce Portal Development Cost in Moradabad | Zentrix",
    description:
      "Wondering about ecommerce portal development cost in Moradabad? Learn what affects pricing and get a clear, transparent quote from Zentrix Infotech today.",
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