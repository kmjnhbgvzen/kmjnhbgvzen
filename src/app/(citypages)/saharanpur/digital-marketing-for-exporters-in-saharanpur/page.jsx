import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Exporters in Saharanpur | Get Buyers Online",
  description:
    "Grow your export business with digital marketing for exporters in Saharanpur. Reach international buyers through SEO, LinkedIn, marketplace optimization, and paid campaigns.",
  keywords:
    "digital marketing for exporters in Saharanpur, export marketing company Saharanpur, B2B digital marketing agency Saharanpur, international buyer lead generation Saharanpur, digital marketing for wood handicraft exporters Saharanpur, export SEO services Saharanpur, LinkedIn marketing for exporters Saharanpur, marketplace optimization Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-exporters-in-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Exporters in Saharanpur | Get Buyers Online",
    description:
      "Grow your export business with digital marketing for exporters in Saharanpur. Reach international buyers through SEO, LinkedIn, marketplace optimization, and paid campaigns.",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-exporters-in-saharanpur",
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
    title: "Digital Marketing for Exporters in Saharanpur | Get Buyers Online",
    description:
      "Grow your export business with digital marketing for exporters in Saharanpur. Reach international buyers through SEO, LinkedIn, marketplace optimization, and paid campaigns.",
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