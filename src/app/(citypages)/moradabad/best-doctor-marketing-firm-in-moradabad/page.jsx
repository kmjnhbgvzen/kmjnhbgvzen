import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Doctor Marketing Firm in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best doctor marketing firm in Moradabad? Learn what to check, what to delegate and what to expect in 60 days. Call Zentrix Infotech today.",
  keywords:
    "best doctor marketing firm Moradabad, doctor marketing company Moradabad, doctor marketing agency Moradabad, digital marketing for doctors Moradabad, clinic marketing Moradabad, doctor branding Moradabad, medical marketing Moradabad, doctor SEO Moradabad, patient acquisition for doctors, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-doctor-marketing-firm-in-moradabad",
  },

  openGraph: {
    title: "Best Doctor Marketing Firm in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best doctor marketing firm in Moradabad? Learn what to check, what to delegate and what to expect in 60 days. Call Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/best-doctor-marketing-firm-in-moradabad",
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
    title: "Best Doctor Marketing Firm in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best doctor marketing firm in Moradabad? Learn what to check, what to delegate and what to expect in 60 days. Call Zentrix Infotech today.",
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