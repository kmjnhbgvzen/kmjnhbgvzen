import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Ayodhya | Custom, Fast & Mobile-Friendly Websites",
  description:
    "Looking for a trusted website development company in Ayodhya? Get custom, mobile-friendly, and SEO-ready websites for hotels, businesses, and e-commerce brands.",
  keywords:
    "website development company in Ayodhya, web design Ayodhya, website designing company Ayodhya, custom website development Ayodhya, ecommerce website development Ayodhya, business website Ayodhya, responsive web design Ayodhya, hotel website development, affordable website development company, best web developers near me",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/website-development-company-in-ayodhya",
  },
  openGraph: {
    title: "Website Development Company in Ayodhya | Custom, Fast & Mobile-Friendly Websites",
    description:
      "Looking for a trusted website development company in Ayodhya? Get custom, mobile-friendly, and SEO-ready websites for hotels, businesses, and e-commerce brands.",
    url: "https://www.zentrixinfotech.com/ayodhya/website-development-company-in-ayodhya",
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
    title: "Website Development Company in Ayodhya | Custom, Fast & Mobile-Friendly Websites",
    description:
      "Looking for a trusted website development company in Ayodhya? Get custom, mobile-friendly, and SEO-ready websites for hotels, businesses, and e-commerce brands.",
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