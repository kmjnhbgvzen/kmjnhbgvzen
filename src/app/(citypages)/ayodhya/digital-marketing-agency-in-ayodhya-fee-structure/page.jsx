import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya Fee Structure – Full Guide 2026",
  description:
    "Understand how digital marketing agency fee structures work in Ayodhya, including pricing models, typical cost ranges, and what to check before you pay.",
  keywords:
    "digital marketing agency in ayodhya fee structure, digital marketing pricing ayodhya, seo pricing ayodhya, digital marketing cost uttar pradesh, digital marketing packages ayodhya, monthly retainer digital marketing",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-fee-structure",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya Fee Structure – Full Guide 2026",
    description:
      "Understand how digital marketing agency fee structures work in Ayodhya, including pricing models, typical cost ranges, and what to check before you pay.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-fee-structure",
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
    title: "Digital Marketing Agency in Ayodhya Fee Structure – Full Guide 2026",
    description:
      "Understand how digital marketing agency fee structures work in Ayodhya, including pricing models, typical cost ranges, and what to check before you pay.",
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