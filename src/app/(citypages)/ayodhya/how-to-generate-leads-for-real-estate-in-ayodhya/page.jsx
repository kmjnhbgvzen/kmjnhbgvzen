import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "How to Generate Leads for Real Estate in Ayodhya (2026 Guide)",
  description:
    "Learn how to generate leads for real estate in Ayodhya with proven local SEO, digital ads, and offline strategies to attract genuine buyers.",
  keywords:
    "how to generate leads for real estate in Ayodhya, real estate leads Ayodhya, property leads Ayodhya, real estate marketing Ayodhya, real estate digital marketing Ayodhya, property marketing Ayodhya, real estate SEO Ayodhya, real estate advertising Ayodhya, buy property Ayodhya leads, real estate agency Ayodhya, real estate marketing company Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/how-to-generate-leads-for-real-estate-in-ayodhya",
  },
  openGraph: {
    title: "How to Generate Leads for Real Estate in Ayodhya (2026 Guide)",
    description:
      "Learn how to generate leads for real estate in Ayodhya with proven local SEO, digital ads, and offline strategies to attract genuine buyers.",
    url: "https://www.zentrixinfotech.com/ayodhya/how-to-generate-leads-for-real-estate-in-ayodhya",
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
    title: "How to Generate Leads for Real Estate in Ayodhya (2026 Guide)",
    description:
      "Learn how to generate leads for real estate in Ayodhya with proven local SEO, digital ads, and offline strategies to attract genuine buyers.",
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