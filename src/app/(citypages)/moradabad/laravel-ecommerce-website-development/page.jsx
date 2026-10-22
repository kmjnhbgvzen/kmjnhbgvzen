import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Laravel Ecommerce Website Development | Zentrix Infotech",
  description:
    "Secure, scalable Laravel ecommerce website development by Zentrix Infotech. Custom online stores, payments, admin panels and support. Get a free quote today.",
  keywords:
    "Laravel ecommerce website development, Laravel ecommerce development company, Laravel ecommerce developer India, custom Laravel ecommerce website, Laravel online store development, Laravel multi-vendor marketplace, Laravel ecommerce development services, PHP ecommerce website development, secure ecommerce website development, scalable ecommerce solutions, Laravel ecommerce website cost, hire Laravel developers, custom ecommerce development India, Laravel B2B ecommerce, ecommerce development company Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/laravel-ecommerce-website-development",
  },

  openGraph: {
    title: "Laravel Ecommerce Website Development in Moradabad | Zentrix Infotech",
    description:
      "Secure, scalable Laravel ecommerce website development by Zentrix Infotech. Custom online stores, payments, admin panels and support. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/laravel-ecommerce-website-development",
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
    title: "Laravel Ecommerce Website Development | Zentrix Infotech",
    description:
      "Secure, scalable Laravel ecommerce website development by Zentrix Infotech. Custom online stores, payments, admin panels and support. Get a free quote today.",
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