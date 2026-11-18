import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Strategy in Moradabad | Zentrix Infotech",
  description:
    "Build a doctor marketing strategy for Moradabad: positioning, patient funnel, channels, KPIs and a 12-month roadmap. Get a custom plan from Zentrix Infotech today.",
  keywords:
    "doctor marketing strategy Moradabad, doctor marketing plan Moradabad, clinic marketing strategy Moradabad, healthcare marketing strategy Moradabad, digital marketing strategy for doctors, patient acquisition strategy Moradabad, doctor branding strategy, local marketing strategy for clinics, medical marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-strategy-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Strategy in Moradabad | Zentrix Infotech",
    description:
      "Build a doctor marketing strategy for Moradabad: positioning, patient funnel, channels, KPIs and a 12-month roadmap. Get a custom plan from Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-strategy-moradabad",
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
    title: "Doctor Marketing Strategy in Moradabad | Zentrix Infotech",
    description:
      "Build a doctor marketing strategy for Moradabad: positioning, patient funnel, channels, KPIs and a 12-month roadmap. Get a custom plan from Zentrix Infotech today.",
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