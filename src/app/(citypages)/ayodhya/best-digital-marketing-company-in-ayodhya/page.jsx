import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Ayodhya | Compare Top Agencies & Services",
  description:
    "Searching for the best digital marketing company in Ayodhya? Learn exactly what separates top agencies from average ones, and how to choose the right one for your business.",
  keywords:
    "best digital marketing company in Ayodhya, top digital marketing agency Ayodhya, digital marketing company near me, best SEO company Ayodhya, best web development company Ayodhya, digital marketing services Ayodhya, trusted marketing agency Ayodhya, affordable digital marketing Ayodhya, online marketing experts Ayodhya, digital marketing consultant Ayodhya",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/best-digital-marketing-company-in-ayodhya",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Ayodhya | Compare Top Agencies & Services",
    description:
      "Searching for the best digital marketing company in Ayodhya? Learn exactly what separates top agencies from average ones, and how to choose the right one for your business.",
    url: "https://www.zentrixinfotech.com/ayodhya/best-digital-marketing-company-in-ayodhya",
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
    title: "Best Digital Marketing Company in Ayodhya | Compare Top Agencies & Services",
    description:
      "Searching for the best digital marketing company in Ayodhya? Learn exactly what separates top agencies from average ones, and how to choose the right one for your business.",
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