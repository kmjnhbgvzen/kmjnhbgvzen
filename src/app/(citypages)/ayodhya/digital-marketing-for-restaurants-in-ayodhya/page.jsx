import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Ayodhya - Zentrix Infotech",
  description:
    "Grow your restaurant business with expert digital marketing for restaurants in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
  keywords:
    "digital marketing for restaurants in Ayodhya, restaurant marketing agency Ayodhya, restaurant SEO services Ayodhya, restaurant digital marketing company Ayodhya, restaurant website development Ayodhya, restaurant social media marketing Ayodhya, food business marketing Ayodhya, Zentrix Infotech Ayodhya, restaurant advertising agency Ayodhya, food and beverage marketing Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-restaurants-in-ayodhya",
  },
  openGraph: {
    title:
      "Digital Marketing for Restaurants in Ayodhya - Zentrix Infotech",
    description:
      "Grow your restaurant business with expert digital marketing for restaurants in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-for-restaurants-in-ayodhya",
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
    title:
      "Digital Marketing for Restaurants in Ayodhya - Zentrix Infotech",
    description:
      "Grow your restaurant business with expert digital marketing for restaurants in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
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