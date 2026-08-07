import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Services in Ayodhya | Zentrix Infotech",
  description:
    "Looking for the best Digital Marketing Services in Ayodhya? Get expert SEO, Google Ads, social media & website marketing to grow your business online. Free consultation.",
  keywords:
    "digital marketing services in Ayodhya, digital marketing company in Ayodhya, best digital marketing agency Ayodhya, SEO services in Ayodhya, social media marketing Ayodhya, PPC services Ayodhya, website designing company Ayodhya, online marketing company Ayodhya, local SEO Ayodhya, digital marketing agency near me, affordable digital marketing services Ayodhya, hotel digital marketing Ayodhya, tourism marketing Ayodhya, Google Ads agency Ayodhya, digital marketing consultant Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-services-in-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing Services in Ayodhya | Zentrix Infotech",
    description:
      "Looking for the best Digital Marketing Services in Ayodhya? Get expert SEO, Google Ads, social media & website marketing to grow your business online. Free consultation.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-services-in-ayodhya",
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
    title: "Digital Marketing Services in Ayodhya | Zentrix Infotech",
    description:
      "Looking for the best Digital Marketing Services in Ayodhya? Get expert SEO, Google Ads, social media & website marketing to grow your business online. Free consultation.",
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