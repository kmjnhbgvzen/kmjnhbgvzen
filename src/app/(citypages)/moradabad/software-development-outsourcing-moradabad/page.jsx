import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Outsourcing in Moradabad | Zentrix Infotech",
  description:
    "Outsource software development in Moradabad to Zentrix Infotech. Build web, mobile, cloud and custom business software without hiring a full in-house team. 250+ projects, 4.7/5 rating.",
  keywords:
    "software development outsourcing moradabad, outsource software development moradabad, software outsourcing company moradabad, outsourcing software development india, hire software development team moradabad, dedicated development team moradabad, custom software outsourcing moradabad, web development outsourcing moradabad, mobile app development outsourcing moradabad, IT outsourcing company moradabad, software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-outsourcing-moradabad",
  },

  openGraph: {
    title:
      "Software Development Outsourcing in Moradabad | Zentrix Infotech",
    description:
      "Outsource software development in Moradabad to Zentrix Infotech. Build web, mobile, cloud and custom business software without hiring a full in-house team. 250+ projects, 4.7/5 rating.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-outsourcing-moradabad",
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
    title:
      "Software Development Outsourcing in Moradabad | Zentrix Infotech",
    description:
      "Outsource software development in Moradabad to Zentrix Infotech. Build web, mobile, cloud and custom business software without hiring a full in-house team. 250+ projects, 4.7/5 rating.",
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