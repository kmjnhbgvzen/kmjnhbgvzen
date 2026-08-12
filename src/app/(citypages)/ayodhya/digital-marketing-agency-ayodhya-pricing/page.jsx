import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya Price",
  description:
    "Wondering how much a Digital Marketing Agency in Ayodhya costs in 2026? Get a complete pricing guide covering SEO, social media, PPC and website packages.",
  keywords:
    "digital marketing agency in ayodhya price, digital marketing company ayodhya, seo services ayodhya cost, social media marketing agency ayodhya, ppc management ayodhya price, website development ayodhya cost, best digital marketing agency ayodhya, digital marketing packages ayodhya, affordable digital marketing ayodhya, local seo ayodhya, digital marketing agency near me ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-ayodhya-price",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya Price",
    description:
      "Wondering how much a Digital Marketing Agency in Ayodhya costs in 2026? Get a complete pricing guide covering SEO, social media, PPC and website packages.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-ayodhya-price",
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
    title: "Digital Marketing Agency in Ayodhya Price",
    description:
      "Wondering how much a Digital Marketing Agency in Ayodhya costs in 2026? Get a complete pricing guide covering SEO, social media, PPC and website packages.",
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