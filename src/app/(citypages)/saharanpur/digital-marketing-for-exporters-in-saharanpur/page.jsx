import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Exporters in Saharanpur | Get Buyers",
  description:
    "Reach international buyers with expert digital marketing for exporters in Saharanpur. SEO, B2B leads, LinkedIn & export marketplaces. Free quote today!",
  keywords:
    "digital marketing for wood handicraft exporters Saharanpur, export marketing company in Saharanpur, B2B digital marketing agency Saharanpur, international buyer lead generation Saharanpur, digital marketing for manufacturers Saharanpur, export SEO services Saharanpur, LinkedIn marketing for exporters Saharanpur, Indiamart TradeIndia optimization Saharanpur, digital marketing for handicraft business Saharanpur, best digital marketing agency for exporters UP, online marketing for export business Saharanpur, how to get international buyers online Saharanpur, digital marketing for paper mills Saharanpur, export business website marketing Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-exporters-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Exporters in Saharanpur | Get Buyers",
    description:
      "Reach international buyers with expert digital marketing for exporters in Saharanpur. SEO, B2B leads, LinkedIn & export marketplaces. Free quote today!",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-exporters-saharanpur",
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
    title: "Digital Marketing for Exporters in Saharanpur | Get Buyers",
    description:
      "Reach international buyers with expert digital marketing for exporters in Saharanpur. SEO, B2B leads, LinkedIn & export marketplaces. Free quote today!",
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