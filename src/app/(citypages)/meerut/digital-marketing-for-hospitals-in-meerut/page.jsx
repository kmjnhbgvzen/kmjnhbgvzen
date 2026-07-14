import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Meerut | Grow Patient Appointments",
  description:
    "Build patient trust and appointments with digital marketing for hospitals in Meerut — SEO, Google Ads, and reputation management strategies that work.",
  keywords:
    "digital marketing for hospitals in Meerut, hospital marketing Meerut, healthcare digital marketing agency, SEO for hospitals, Google Ads for clinics, hospital reputation management, patient appointment marketing, healthcare marketing strategy Meerut, hospital Google My Business, medical marketing agency Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/digital-marketing-for-hospitals-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Meerut | Grow Patient Appointments",
    description:
      "Build patient trust and appointments with digital marketing for hospitals in Meerut — SEO, Google Ads, and reputation management strategies that work.",
    url: "https://www.zentrixinfotech.com/meerut/digital-marketing-for-hospitals-in-meerut",
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
    title: "Digital Marketing for Hospitals in Meerut | Grow Patient Appointments",
    description:
      "Build patient trust and appointments with digital marketing for hospitals in Meerut — SEO, Google Ads, and reputation management strategies that work.",
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