import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Cloud Migration Services in Hapur | Secure & Affordable (2026)",
  description:
    "Looking for reliable cloud migration services in Hapur? Compare process, cost & providers to move your business data to the cloud safely and affordably.",
  keywords:
    "cloud migration services in Hapur, cloud migration company Hapur, cloud computing services for small business, data migration to cloud India, cloud hosting services Hapur, business cloud solutions Uttar Pradesh, server to cloud migration, affordable cloud migration services, cloud backup solutions small business, cloud solutions company near me",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/cloud-migration-services-in-hapur",
  },
  openGraph: {
    title: "Cloud Migration Services in Hapur | Secure & Affordable (2026)",
    description:
      "Looking for reliable cloud migration services in Hapur? Compare process, cost & providers to move your business data to the cloud safely and affordably.",
    url: "https://www.zentrixinfotech.com/hapur/cloud-migration-services-in-hapur",
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
    title: "Cloud Migration Services in Hapur | Secure & Affordable (2026)",
    description:
      "Looking for reliable cloud migration services in Hapur? Compare process, cost & providers to move your business data to the cloud safely and affordably.",
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