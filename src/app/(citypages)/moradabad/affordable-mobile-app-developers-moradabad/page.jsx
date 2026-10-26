import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Mobile App Developers Moradabad | Zentrix Infotech",
  description:
    "Hire affordable mobile app developers in Moradabad who deliver real value. Smart budgeting, clear pricing and quality apps. Call Zentrix Infotech: +91 72488 00839.",
  keywords:
    "affordable mobile app developers moradabad, affordable app developers moradabad, affordable android developers moradabad, affordable ios developers moradabad, budget app developers moradabad, value for money app development moradabad, app development budget planning moradabad, small business app developers moradabad, startup app developers moradabad, app development roi moradabad, mobile app development company moradabad, hire mobile app developers moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-mobile-app-developers-moradabad",
  },

  openGraph: {
    title: "Affordable Mobile App Developers Moradabad | Zentrix Infotech",
    description:
      "Hire affordable mobile app developers in Moradabad who deliver real value. Smart budgeting, clear pricing and quality apps. Call Zentrix Infotech: +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-mobile-app-developers-moradabad",
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
    title: "Affordable Mobile App Developers Moradabad | Zentrix Infotech",
    description:
      "Hire affordable mobile app developers in Moradabad who deliver real value. Smart budgeting, clear pricing and quality apps. Call Zentrix Infotech: +91 72488 00839.",
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