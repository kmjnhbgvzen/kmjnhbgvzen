import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Online Reputation Management Strategy for Ayodhya Businesses",
  description:
    "Build an effective online reputation management strategy for your Ayodhya business with this step-by-step guide covering reviews, SEO, and trust.",
  keywords:
    "online reputation management strategy Ayodhya, ORM strategy Ayodhya, reputation management plan Ayodhya, brand reputation strategy Ayodhya, online review strategy Ayodhya, reputation management steps Ayodhya, hotel reputation strategy Ayodhya, hospital reputation strategy Ayodhya, local business reputation Ayodhya, reputation building strategy Ayodhya, digital reputation strategy Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-strategy-ayodhya",
  },
  openGraph: {
    title: "Online Reputation Management Strategy for Ayodhya Businesses",
    description:
      "Build an effective online reputation management strategy for your Ayodhya business with this step-by-step guide covering reviews, SEO, and trust.",
    url: "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-strategy-ayodhya",
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
    title: "Online Reputation Management Strategy for Ayodhya Businesses",
    description:
      "Build an effective online reputation management strategy for your Ayodhya business with this step-by-step guide covering reviews, SEO, and trust.",
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