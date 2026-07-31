import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya Near Me – Get a Free Quote Today",
  description:
    "Looking for a digital marketing agency in Ayodhya near me? Compare services, pricing, and packages, and get a free quote from a trusted UP-based team today.",
  keywords:
    "digital marketing agency in ayodhya near me, digital marketing agency near me ayodhya, best digital marketing company near me, seo services near me ayodhya, digital marketing packages ayodhya, get a quote digital marketing ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-near-me",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya Near Me – Get a Free Quote Today",
    description:
      "Looking for a digital marketing agency in Ayodhya near me? Compare services, pricing, and packages, and get a free quote from a trusted UP-based team today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya-near-me",
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
    title: "Digital Marketing Agency in Ayodhya Near Me – Get a Free Quote Today",
    description:
      "Looking for a digital marketing agency in Ayodhya near me? Compare services, pricing, and packages, and get a free quote from a trusted UP-based team today.",
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