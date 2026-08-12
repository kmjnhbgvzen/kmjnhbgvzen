import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "How to Generate Leads for Real Estate Business in Ayodhya",
  description:
    "Learn how to generate leads for your real estate business in Ayodhya with a step-by-step funnel, tools, and strategies to build steady sales.",
  keywords:
    "how to generate leads for real estate business in Ayodhya, real estate business leads Ayodhya, real estate lead funnel Ayodhya, property business marketing Ayodhya, real estate broker leads Ayodhya, real estate builder marketing Ayodhya, real estate CRM Ayodhya, real estate business growth Ayodhya, property agent leads Ayodhya, real estate sales funnel Ayodhya, real estate marketing strategy Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/how-to-generate-leads-for-real-estate-business-in-ayodhya",
  },
  openGraph: {
    title: "How to Generate Leads for Real Estate Business in Ayodhya",
    description:
      "Learn how to generate leads for your real estate business in Ayodhya with a step-by-step funnel, tools, and strategies to build steady sales.",
    url: "https://www.zentrixinfotech.com/ayodhya/how-to-generate-leads-for-real-estate-business-in-ayodhya",
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
    title: "How to Generate Leads for Real Estate Business in Ayodhya",
    description:
      "Learn how to generate leads for your real estate business in Ayodhya with a step-by-step funnel, tools, and strategies to build steady sales.",
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