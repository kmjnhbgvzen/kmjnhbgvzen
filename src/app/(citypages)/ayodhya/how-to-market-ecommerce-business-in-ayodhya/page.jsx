import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Market Ecommerce Business in Ayodhya",
  description:
    "Learn how to market your ecommerce business in Ayodhya with proven local SEO, social media, and ad strategies to grow sales and rank higher on Google.",
  keywords:
    "market ecommerce business in Ayodhya, ecommerce marketing Ayodhya, digital marketing in Ayodhya, online business Ayodhya, ecommerce SEO Ayodhya, sell products online Ayodhya, ecommerce growth strategy Ayodhya, local SEO Ayodhya, ecommerce marketing agency Ayodhya, grow online store Ayodhya, digital marketing company Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/how-to-market-ecommerce-business-in-ayodhya",
  },
  openGraph: {
    title: "How to Market Ecommerce Business in Ayodhya",
    description:
      "Learn how to market your ecommerce business in Ayodhya with proven local SEO, social media, and ad strategies to grow sales and rank higher on Google.",
    url: "https://www.zentrixinfotech.com/ayodhya/how-to-market-ecommerce-business-in-ayodhya",
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
    title: "How to Market Ecommerce Business in Ayodhya",
    description:
      "Learn how to market your ecommerce business in Ayodhya with proven local SEO, social media, and ad strategies to grow sales and rank higher on Google.",
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