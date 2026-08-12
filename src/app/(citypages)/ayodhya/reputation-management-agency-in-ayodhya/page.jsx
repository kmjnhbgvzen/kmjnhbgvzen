import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Reputation Management Agency in Ayodhya | Zentrix Infotech",
  description:
    "Looking for a reliable reputation management agency serving Ayodhya? Explore Zentrix Infotech's ORM services, process, and contact details.",
  keywords:
    "reputation management agency in Ayodhya, Zentrix Infotech reputation management, ORM agency Ayodhya, brand reputation agency Ayodhya, reputation management company contact Ayodhya, Zentrix Infotech Ayodhya services, online reputation agency Uttar Pradesh, reputation management agency near Ayodhya, hire reputation management agency Ayodhya, Zentrix Infotech digital marketing, reputation repair agency Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/reputation-management-agency-in-ayodhya",
  },
  openGraph: {
    title: "Reputation Management Agency in Ayodhya | Zentrix Infotech",
    description:
      "Looking for a reliable reputation management agency serving Ayodhya? Explore Zentrix Infotech's ORM services, process, and contact details.",
    url: "https://www.zentrixinfotech.com/ayodhya/reputation-management-agency-in-ayodhya",
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
    title: "Reputation Management Agency in Ayodhya | Zentrix Infotech",
    description:
      "Looking for a reliable reputation management agency serving Ayodhya? Explore Zentrix Infotech's ORM services, process, and contact details.",
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