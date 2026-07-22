import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Services for Ecommerce USA",
  description:
    "Scale your online store with expert PPC services for ecommerce in the USA. Get targeted Google Shopping, search, and remarketing campaigns designed to increase sales and ROAS.",
  keywords:
    "ppc services for ecommerce usa, ecommerce ppc agency usa, ppc management for online stores, google shopping ads services usa, ecommerce ppc experts usa, best ppc agency for ecommerce usa, ppc advertising for online stores, ecommerce paid search services, shopify ppc services, WooCommerce ppc management",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/ppc-services-for-ecommerce-usa",
  },
  openGraph: {
    title: "PPC Services for Ecommerce USA",
    description:
      "Scale your online store with expert PPC services for ecommerce in the USA. Get targeted Google Shopping, search, and remarketing campaigns designed to increase sales and ROAS.",
    url: "https://www.zentrixinfotech.com/usa/ppc-services-for-ecommerce-usa",
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
    title: "PPC Services for Ecommerce USA",
    description:
      "Scale your online store with expert PPC services for ecommerce in the USA. Get targeted Google Shopping, search, and remarketing campaigns designed to increase sales and ROAS.",
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