import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Online Reputation Management Company in Ayodhya | Hire Now",
  description:
    "Protect and grow your brand with a trusted online reputation management company in Ayodhya. Fix negative reviews and build lasting trust online.",
  keywords:
    "online reputation management company in Ayodhya, ORM company Ayodhya, online reputation management services Ayodhya, brand reputation management Ayodhya, review management company Ayodhya, negative review removal Ayodhya, reputation management agency Ayodhya, hospital reputation management Ayodhya, hotel reputation management Ayodhya, business reputation management Ayodhya, digital marketing company Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-company-in-ayodhya",
  },
  openGraph: {
    title: "Online Reputation Management Company in Ayodhya | Hire Now",
    description:
      "Protect and grow your brand with a trusted online reputation management company in Ayodhya. Fix negative reviews and build lasting trust online.",
    url: "https://www.zentrixinfotech.com/ayodhya/online-reputation-management-company-in-ayodhya",
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
    title: "Online Reputation Management Company in Ayodhya | Hire Now",
    description:
      "Protect and grow your brand with a trusted online reputation management company in Ayodhya. Fix negative reviews and build lasting trust online.",
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