import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Online Reputation Management Services in Ayodhya Reviews 2026 | Zentrix Infotech",
  description:
    "Looking for honest reviews on online reputation management services in Ayodhya? Discover Zentrix Infotech's proven ORM solutions, pricing, process & real client feedback.",
  keywords:
    "online reputation management services Ayodhya reviews, best ORM agency Ayodhya, Zentrix Infotech Ayodhya reviews, online reputation management Uttar Pradesh, reputation management company Ayodhya, ORM services near Ayodhya, brand reputation management Ayodhya, online reputation repair Ayodhya, digital marketing agency Ayodhya ORM, Zentrix Infotech reputation management, reputation management agency near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-services-ayodhya-reviews",
  },
  openGraph: {
    title: "Online Reputation Management Services in Ayodhya Reviews 2026 | Zentrix Infotech",
    description:
      "Looking for honest reviews on online reputation management services in Ayodhya? Discover Zentrix Infotech's proven ORM solutions, pricing, process & real client feedback.",
    url: "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-services-ayodhya-reviews",
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
    title: "Online Reputation Management Services in Ayodhya Reviews 2026 | Zentrix Infotech",
    description:
      "Looking for honest reviews on online reputation management services in Ayodhya? Discover Zentrix Infotech's proven ORM solutions, pricing, process & real client feedback.",
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