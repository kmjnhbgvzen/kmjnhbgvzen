import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Saharanpur | Zentrix Infotech",
  description:
    "Looking for a branding agency in Saharanpur? Zentrix Infotech offers logo design, brand identity, and digital branding solutions that grow your business.",
  keywords:
    "branding agency in Saharanpur, branding company in Saharanpur, logo design agency Saharanpur, brand identity design Saharanpur, best branding agency Saharanpur, digital branding services Saharanpur, brand strategy company Saharanpur, corporate branding agency Saharanpur, graphic design agency Saharanpur, packaging design Saharanpur, rebranding agency Saharanpur, creative branding solutions Saharanpur, branding and marketing agency Saharanpur, startup branding agency Saharanpur, brand consultancy Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/branding-agency-saharanpur",
  },
  openGraph: {
    title: "Branding Agency in Saharanpur | Zentrix Infotech",
    description:
      "Looking for a branding agency in Saharanpur? Zentrix Infotech offers logo design, brand identity, and digital branding solutions that grow your business.",
    url: "https://www.zentrixinfotech.com/saharanpur/branding-agency-saharanpur",
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
    title: "Branding Agency in Saharanpur | Zentrix Infotech",
    description:
      "Looking for a branding agency in Saharanpur? Zentrix Infotech offers logo design, brand identity, and digital branding solutions that grow your business.",
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