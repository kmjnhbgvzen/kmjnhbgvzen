import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Religious Tourism in Ayodhya - Zentrix Infotech",
  description:
    "Grow your religious tourism business with expert digital marketing in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
  keywords:
    "digital marketing for religious tourism in Ayodhya, religious tourism marketing agency Ayodhya, pilgrimage marketing services Ayodhya, spiritual tourism SEO Ayodhya, dharamshala marketing Ayodhya, temple tourism digital marketing Ayodhya, Zentrix Infotech Ayodhya, pilgrimage business marketing Uttar Pradesh, religious travel marketing company Ayodhya, devotee services marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-religious-tourism-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing for Religious Tourism in Ayodhya - Zentrix Infotech",
    description:
      "Grow your religious tourism business with expert digital marketing in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-religious-tourism-ayodhya",
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
    title: "Digital Marketing for Religious Tourism in Ayodhya - Zentrix Infotech",
    description:
      "Grow your religious tourism business with expert digital marketing in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
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