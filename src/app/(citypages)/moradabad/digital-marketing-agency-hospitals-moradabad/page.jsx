import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency for Hospitals in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a digital marketing agency for hospitals in Moradabad. Check your hospital’s digital readiness and plan SEO, ads, social media and reviews. Call now.",
  keywords:
    "digital marketing agency hospitals Moradabad, hospital digital marketing Moradabad, digital marketing for hospitals Moradabad, hospital marketing agency Moradabad, healthcare digital marketing Moradabad, hospital website and SEO Moradabad, hospital social media marketing, hospital online reputation Moradabad, hospital marketing company, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-agency-hospitals-moradabad",
  },

  openGraph: {
    title: "Digital Marketing Agency for Hospitals in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a digital marketing agency for hospitals in Moradabad. Check your hospital’s digital readiness and plan SEO, ads, social media and reviews. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-agency-hospitals-moradabad",
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
    title: "Digital Marketing Agency for Hospitals in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a digital marketing agency for hospitals in Moradabad. Check your hospital’s digital readiness and plan SEO, ads, social media and reviews. Call now.",
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