import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Pilgrimage Tourism in Ayodhya - Zentrix Infotech",
  description:
    "Grow your pilgrimage tourism business with expert digital marketing in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
  keywords:
    "digital marketing for pilgrimage tourism in Ayodhya, pilgrimage tourism marketing agency Ayodhya, pilgrimage travel SEO Ayodhya, spiritual travel marketing Ayodhya, dharamshala digital marketing Ayodhya, pilgrim services marketing company Ayodhya, Zentrix Infotech Ayodhya, pilgrimage business marketing Uttar Pradesh, temple visit marketing Ayodhya, devotee travel marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-pilgrimage-tourism-in-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing for Pilgrimage Tourism in Ayodhya - Zentrix Infotech",
    description:
      "Grow your pilgrimage tourism business with expert digital marketing in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-pilgrimage-tourism-in-ayodhya",
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
    title: "Digital Marketing for Pilgrimage Tourism in Ayodhya - Zentrix Infotech",
    description:
      "Grow your pilgrimage tourism business with expert digital marketing in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
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