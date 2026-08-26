import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Upgrade Old Software to New Requirements | Zentrix Infotech",
  description:
    "Old software still useful but outdated? Zentrix Infotech offers FREE assistance to upgrade old software to new requirements instead of replacing it.",
  keywords:
    "upgrade old software to new requirements, upgrade old software, upgrade existing software, update old software, modernize old software, update legacy software, upgrade outdated software, modify old software, software upgrade services, software customization services, software modification services, upgrade software with new features, update software according to business requirements, existing software upgrade",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/upgrade-old-software-to-new-requirements",
  },
  openGraph: {
    title: "Upgrade Old Software to New Requirements | Zentrix Infotech",
    description:
      "Old software still useful but outdated? Zentrix Infotech offers FREE assistance to upgrade old software to new requirements instead of replacing it.",
    url: "https://www.zentrixinfotech.com/upgrade-old-software-to-new-requirements",
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
    title: "Upgrade Old Software to New Requirements | Zentrix Infotech",
    description:
      "Old software still useful but outdated? Zentrix Infotech offers FREE assistance to upgrade old software to new requirements instead of replacing it.",
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
