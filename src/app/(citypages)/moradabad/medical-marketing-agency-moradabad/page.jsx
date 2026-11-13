import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Medical Marketing Agency in Moradabad | Zentrix Infotech",
  description:
    "Looking for a medical marketing agency in Moradabad? Zentrix Infotech helps clinics, hospitals and diagnostic centres get more patients with websites, SEO and ads.",
  keywords:
    "medical marketing agency Moradabad, medical marketing agency near me, healthcare marketing agency Moradabad, clinic marketing agency Moradabad, medical SEO agency Moradabad, medical advertising agency Moradabad, diagnostic centre marketing Moradabad, pharmacy marketing Moradabad, patient acquisition agency Moradabad, medical website design Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-agency-moradabad",
  },

  openGraph: {
    title:
      "Medical Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Looking for a medical marketing agency in Moradabad? Zentrix Infotech helps clinics, hospitals and diagnostic centres get more patients with websites, SEO and ads.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-agency-moradabad",
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
    title:
      "Medical Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Looking for a medical marketing agency in Moradabad? Zentrix Infotech helps clinics, hospitals and diagnostic centres get more patients with websites, SEO and ads.",
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