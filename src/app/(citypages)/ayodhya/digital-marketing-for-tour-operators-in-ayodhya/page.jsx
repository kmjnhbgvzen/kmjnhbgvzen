import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Tour Operators in Ayodhya - Zentrix Infotech",
  description:
    "Grow your travel business with expert digital marketing for tour operators in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
  keywords:
    "digital marketing for tour operators in Ayodhya, travel agency marketing Ayodhya, tour package SEO Ayodhya, tourism marketing company Ayodhya, travel agency website development Ayodhya, pilgrimage tour marketing Ayodhya, Zentrix Infotech Ayodhya, tour operator digital marketing Uttar Pradesh, travel business marketing agency Ayodhya, sightseeing tour marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-tour-operators-in-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing for Tour Operators in Ayodhya - Zentrix Infotech",
    description:
      "Grow your travel business with expert digital marketing for tour operators in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-tour-operators-in-ayodhya",
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
    title: "Digital Marketing for Tour Operators in Ayodhya - Zentrix Infotech",
    description:
      "Grow your travel business with expert digital marketing for tour operators in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
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