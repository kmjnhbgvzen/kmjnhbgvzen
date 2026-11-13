import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best Medical Marketing Company in Moradabad | Zentrix Infotech",
  description:
    "Searching for the best medical marketing company in Moradabad? Use our 10-point proof test and see why clinics and hospitals choose Zentrix Infotech for growth.",
  keywords:
    "best medical marketing company in Moradabad, best medical marketing company Moradabad, top medical marketing company Moradabad, best healthcare marketing company Moradabad, best marketing company for doctors Moradabad, best hospital marketing company Moradabad, medical marketing company reviews Moradabad, how to choose medical marketing company, trusted medical marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-medical-marketing-company-in-moradabad",
  },

  openGraph: {
    title:
      "Best Medical Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Searching for the best medical marketing company in Moradabad? Use our 10-point proof test and see why clinics and hospitals choose Zentrix Infotech for growth.",
    url: "https://www.zentrixinfotech.com/moradabad/best-medical-marketing-company-in-moradabad",
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
      "Best Medical Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Searching for the best medical marketing company in Moradabad? Use our 10-point proof test and see why clinics and hospitals choose Zentrix Infotech for growth.",
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