import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Integrate New Module in Existing Software | Zentrix Infotech",
  description:
    "Existing software missing a key module? Zentrix Infotech offers FREE assistance to integrate new modules into your existing software. Discuss it today.",
  keywords:
    "integrate new module in existing software, integrate a new module into existing software, add module to existing software, add new module to software, software module integration, existing software module integration, integrate new functionality into existing software, add functionality to existing software, software integration services, software customization services, software modification services, existing software customization, module integration services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/integrate-new-module-in-existing-software",
  },
  openGraph: {
    title: "Integrate New Module in Existing Software | Zentrix Infotech",
    description:
      "Existing software missing a key module? Zentrix Infotech offers FREE assistance to integrate new modules into your existing software. Discuss it today.",
    url: "https://www.zentrixinfotech.com/integrate-new-module-in-existing-software",
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
    title: "Integrate New Module in Existing Software | Zentrix Infotech",
    description:
      "Existing software missing a key module? Zentrix Infotech offers FREE assistance to integrate new modules into your existing software. Discuss it today.",
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