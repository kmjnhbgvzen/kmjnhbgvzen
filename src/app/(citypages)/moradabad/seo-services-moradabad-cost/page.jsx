import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services Cost in Moradabad | Zentrix Infotech",
  description:
    "What do SEO services cost in Moradabad? Learn what affects pricing, how plans are structured and how to get value. Get a free audit and custom quote from Zentrix.",
  keywords:
    "SEO services cost Moradabad, SEO cost in Moradabad, SEO pricing Moradabad, SEO charges Moradabad, monthly SEO cost Moradabad, how much does SEO cost in Moradabad, SEO price for small business Moradabad, local SEO cost Moradabad, SEO services price Moradabad, SEO quote Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-services-moradabad-cost",
  },

  openGraph: {
    title: "SEO Services Cost in Moradabad | Zentrix Infotech",
    description:
      "What do SEO services cost in Moradabad? Learn what affects pricing, how plans are structured and how to get value. Get a free audit and custom quote from Zentrix.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-services-moradabad-cost",
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
    title: "SEO Services Cost in Moradabad | Zentrix Infotech",
    description:
      "What do SEO services cost in Moradabad? Learn what affects pricing, how plans are structured and how to get value. Get a free audit and custom quote from Zentrix.",
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