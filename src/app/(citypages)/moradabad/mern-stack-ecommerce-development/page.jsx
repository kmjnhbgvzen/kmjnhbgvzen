import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "MERN Stack Ecommerce Development Company | Zentrix Infotech",
  description:
    "Custom MERN stack ecommerce development by Zentrix Infotech. Scalable online stores with MongoDB, Express, React and Node.js, built for growth. Get a free quote.",
  keywords:
    "MERN stack ecommerce development, MERN stack ecommerce website, MERN stack development company, MERN stack developer India, custom ecommerce website development, MongoDB Express React Node ecommerce, MERN ecommerce development services, scalable ecommerce website development, multi-vendor marketplace development, custom online store development, ecommerce development company India, full stack ecommerce development, MERN stack ecommerce cost, hire MERN stack developers, ecommerce development company Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mern-stack-ecommerce-development",
  },

  openGraph: {
    title: "MERN Stack Ecommerce Development Company | Zentrix Infotech",
    description:
      "Custom MERN stack ecommerce development by Zentrix Infotech. Scalable online stores with MongoDB, Express, React and Node.js, built for growth. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/mern-stack-ecommerce-development",
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
    title: "MERN Stack Ecommerce Development Company | Zentrix Infotech",
    description:
      "Custom MERN stack ecommerce development by Zentrix Infotech. Scalable online stores with MongoDB, Express, React and Node.js, built for growth. Get a free quote.",
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