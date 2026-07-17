import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Reputation Management in Ayodhya - Zentrix Infotech",
  description:
    "Protect your brand with expert online reputation management in Ayodhya. Zentrix Infotech offers review management, ORM strategy, and brand monitoring. Get a free consultation today.",
  keywords:
    "online reputation management in Ayodhya, ORM services Ayodhya, reputation management agency Ayodhya, review management company Ayodhya, brand reputation services Ayodhya, negative review management Ayodhya, Zentrix Infotech Ayodhya, online reputation company Uttar Pradesh, business reputation management Ayodhya, Google review management Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-ayodhya",
  },
  openGraph: {
    title: "Online Reputation Management in Ayodhya - Zentrix Infotech",
    description:
      "Protect your brand with expert online reputation management in Ayodhya. Zentrix Infotech offers review management, ORM strategy, and brand monitoring. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-ayodhya",
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
    title: "Online Reputation Management in Ayodhya - Zentrix Infotech",
    description:
      "Protect your brand with expert online reputation management in Ayodhya. Zentrix Infotech offers review management, ORM strategy, and brand monitoring. Get a free consultation today.",
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