import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Add New Features to Existing Software | Zentrix",
  description:
    "Software working fine but missing key features? Zentrix Infotech offers FREE assistance to explore adding new features to your existing software.",
  keywords:
    "add new features to existing software, add features to existing software, add new functionality to existing software, customize existing software, modify existing software, software feature addition, software customization services, existing software customization, software modification services, upgrade existing software, add features to my software, customize my software, software feature development",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/add-new-features-to-existing-software",
  },
  openGraph: {
    title: "Add New Features to Existing Software | Zentrix",
    description:
      "Software working fine but missing key features? Zentrix Infotech offers FREE assistance to explore adding new features to your existing software.",
    url: "https://www.zentrixinfotech.com/add-new-features-to-existing-software",
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
    title: "Add New Features to Existing Software | Zentrix",
    description:
      "Software working fine but missing key features? Zentrix Infotech offers FREE assistance to explore adding new features to your existing software.",
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