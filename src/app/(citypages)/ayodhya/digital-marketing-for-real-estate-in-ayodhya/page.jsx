import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Ayodhya - Zentrix Infotech",
  description:
    "Grow your real estate business with expert digital marketing for real estate in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
  keywords:
    "digital marketing for real estate in Ayodhya, real estate marketing agency Ayodhya, real estate SEO services Ayodhya, property marketing company Ayodhya, real estate website development Ayodhya, real estate lead generation Ayodhya, property dealer marketing Ayodhya, Zentrix Infotech Ayodhya, real estate digital marketing Uttar Pradesh, property investment marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-real-estate-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Ayodhya - Zentrix Infotech",
    description:
      "Grow your real estate business with expert digital marketing for real estate in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-real-estate-ayodhya",
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
    title: "Digital Marketing for Real Estate in Ayodhya - Zentrix Infotech",
    description:
      "Grow your real estate business with expert digital marketing for real estate in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services. Get a free consultation today.",
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