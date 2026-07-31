import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya, Uttar Pradesh – Zentrix Infotech",
  description:
    "Zentrix Infotech is a digital marketing agency serving Ayodhya, Uttar Pradesh, offering SEO, social media, web development, and ad management. Contact us today.",
  keywords:
    "digital marketing agency in ayodhya uttar pradesh, zentrix infotech ayodhya, digital marketing company ayodhya up, seo agency ayodhya uttar pradesh, web development company ayodhya, contact digital marketing agency ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-uttar-pradesh",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya, Uttar Pradesh – Zentrix Infotech",
    description:
      "Zentrix Infotech is a digital marketing agency serving Ayodhya, Uttar Pradesh, offering SEO, social media, web development, and ad management. Contact us today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-uttar-pradesh",
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
    title: "Digital Marketing Agency in Ayodhya, Uttar Pradesh – Zentrix Infotech",
    description:
      "Zentrix Infotech is a digital marketing agency serving Ayodhya, Uttar Pradesh, offering SEO, social media, web development, and ad management. Contact us today.",
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