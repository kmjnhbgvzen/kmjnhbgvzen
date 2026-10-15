import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Cost in Moradabad | Zentrix Infotech",
  description:
    "Wondering about website development cost in Moradabad? Learn what affects pricing, typical budget ranges and how Zentrix Infotech gives a clear free quote.",
  keywords:
    "Moradabad website development cost, website development cost in Moradabad, website development price Moradabad, website design cost Moradabad, how much does a website cost in Moradabad, ecommerce website cost Moradabad, business website cost Moradabad, website development charges Moradabad, website development packages Moradabad, affordable website development Moradabad, website development company in Moradabad, website cost calculator India, web development pricing India, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-cost",
  },

  openGraph: {
    title: "Website Development Cost in Moradabad | Zentrix Infotech",
    description:
      "Wondering about website development cost in Moradabad? Learn what affects pricing, typical budget ranges and how Zentrix Infotech gives a clear free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-cost",
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
    title: "Website Development Cost in Moradabad | Zentrix Infotech",
    description:
      "Wondering about website development cost in Moradabad? Learn what affects pricing, typical budget ranges and how Zentrix Infotech gives a clear free quote.",
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