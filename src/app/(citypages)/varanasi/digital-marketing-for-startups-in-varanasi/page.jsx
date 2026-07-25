import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Startups in Varanasi | Zentrix Infotech",
  description:
    "Launch and grow your startup in Varanasi with result-driven digital marketing from Zentrix Infotech. SEO, social media, and paid ads built to generate real customers.",
  keywords:
    "digital marketing for startups in Varanasi, startup marketing agency Varanasi, digital marketing company Varanasi, SEO for startups Varanasi, social media marketing Varanasi, branding for startups Varanasi, online marketing for new businesses Varanasi, startup growth agency Varanasi, performance marketing Varanasi, digital marketing services for small business Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-startups-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Startups in Varanasi | Zentrix Infotech",
    description:
      "Launch and grow your startup in Varanasi with result-driven digital marketing from Zentrix Infotech. SEO, social media, and paid ads built to generate real customers.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-startups-in-varanasi",
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
    title: "Digital Marketing for Startups in Varanasi | Zentrix Infotech",
    description:
      "Launch and grow your startup in Varanasi with result-driven digital marketing from Zentrix Infotech. SEO, social media, and paid ads built to generate real customers.",
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