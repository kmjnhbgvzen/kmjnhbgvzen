import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Agency Near Me in Moradabad | Zentrix Infotech",
  description:
    "Looking for a doctor marketing agency near you in Moradabad? Learn how to choose a local agency and meet the Zentrix Infotech team at Buddhi Vihar. Call +91 72488 00839.",
  keywords:
    "doctor marketing agency near me Moradabad, doctor marketing agency near me, doctor marketing company near me, healthcare marketing agency near me Moradabad, clinic marketing agency Moradabad, local doctor marketing agency, medical marketing agency near me, digital marketing for doctors Moradabad, doctor marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-near-me-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Agency Near Me in Moradabad | Zentrix Infotech",
    description:
      "Looking for a doctor marketing agency near you in Moradabad? Learn how to choose a local agency and meet the Zentrix Infotech team at Buddhi Vihar. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-near-me-moradabad",
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
    title: "Doctor Marketing Agency Near Me in Moradabad | Zentrix Infotech",
    description:
      "Looking for a doctor marketing agency near you in Moradabad? Learn how to choose a local agency and meet the Zentrix Infotech team at Buddhi Vihar. Call +91 72488 00839.",
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