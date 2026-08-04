import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Lead Generation Companies in Ayodhya",
  description:
    "Explore the best lead generation companies in Ayodhya, what makes them effective, and how to choose the right partner for consistent business leads.",
  keywords:
    "best lead generation companies in Ayodhya, lead generation company Ayodhya, lead generation agency Ayodhya, digital marketing company Ayodhya, real estate lead generation Ayodhya, business leads Ayodhya, top lead generation services Ayodhya, lead generation services Ayodhya, marketing agency Ayodhya, lead gen company near me Ayodhya, best digital marketing agency Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/best-lead-generation-companies-ayodhya",
  },
  openGraph: {
    title: "Best Lead Generation Companies in Ayodhya",
    description:
      "Explore the best lead generation companies in Ayodhya, what makes they effective, and how to choose the right partner for consistent business leads.",
    url: "https://www.zentrixinfotech.com/ayodhya/best-lead-generation-companies-ayodhya",
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
    title: "Best Lead Generation Companies in Ayodhya",
    description:
      "Explore the best lead generation companies in Ayodhya, what makes them effective, and how to choose the right partner for consistent business leads.",
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