import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Digital Marketing Services in Moradabad | Zentrix",
  description:
    "Get affordable digital marketing services in Moradabad from Zentrix Infotech. SEO, social media, PPC and web solutions that fit your budget and bring leads.",
  keywords:
    "affordable digital marketing services Moradabad, affordable digital marketing company Moradabad, cheap digital marketing Moradabad, low cost digital marketing agency Moradabad, budget digital marketing Moradabad, digital marketing packages Moradabad, affordable SEO services Moradabad, affordable social media marketing Moradabad, PPC services Moradabad, digital marketing for small business Moradabad, digital marketing company in Moradabad, best digital marketing agency Moradabad, local SEO Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-digital-marketing-services-moradabad",
  },

  openGraph: {
    title: "Affordable Digital Marketing Services in Moradabad | Zentrix",
    description:
      "Get affordable digital marketing services in Moradabad from Zentrix Infotech. SEO, social media, PPC and web solutions that fit your budget and bring leads.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-digital-marketing-services-moradabad",
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
    title: "Affordable Digital Marketing Services in Moradabad | Zentrix",
    description:
      "Get affordable digital marketing services in Moradabad from Zentrix Infotech. SEO, social media, PPC and web solutions that fit your budget and bring leads.",
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