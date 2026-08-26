import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Customization Services in Moradabad | Zentrix Infotech",
  description:
    "Need to upgrade your existing software? ZentrixInfotech offers software customization services in Moradabad. Get a free consultation today.",
  keywords:
    "software customization company in Moradabad, software customization in Moradabad, software modification services in Moradabad, customize existing software in Moradabad, software development company in Moradabad, custom software services in Moradabad, customize my software Moradabad, existing software customization Moradabad, software modification company Moradabad, add features to existing software Moradabad, software upgrade services Moradabad, software integration services Moradabad, custom software development Moradabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-customization-services-in-moradabad",
  },
  openGraph: {
    title: "Software Customization Services in Moradabad | Zentrix Infotech",
    description:
      "Need to upgrade your existing software? ZentrixInfotech offers software customization services in Moradabad. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/moradabad/software-customization-services-in-moradabad",
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
    title: "Software Customization Services in Moradabad | Zentrix Infotech",
    description:
      "Need to upgrade your existing software? ZentrixInfotech offers software customization services in Moradabad. Get a free consultation today.",
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