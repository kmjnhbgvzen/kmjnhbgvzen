import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development Services Price in Moradabad | Zentrix",
  description:
    "See web development services price in Moradabad, service by service. Learn what each option costs, what is included and how to get a clear quote from Zentrix.",
  keywords:
    "Moradabad web development services price, web development services price in Moradabad, web development price Moradabad, web development charges Moradabad, website development rates Moradabad, ecommerce website price Moradabad, web application development price Moradabad, website redesign price Moradabad, website maintenance price Moradabad, web development packages Moradabad, affordable web development Moradabad, website development cost Moradabad, web development company in Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-web-development-services-price",
  },

  openGraph: {
    title: "Web Development Services Price in Moradabad | Zentrix",
    description:
      "See web development services price in Moradabad, service by service. Learn what each option costs, what is included and how to get a clear quote from Zentrix.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-web-development-services-price",
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
    title: "Web Development Services Price in Moradabad | Zentrix",
    description:
      "See web development services price in Moradabad, service by service. Learn what each option costs, what is included and how to get a clear quote from Zentrix.",
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