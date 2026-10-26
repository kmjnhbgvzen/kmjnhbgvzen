import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Cheap Mobile App Developers Moradabad | Zentrix Infotech",
  description:
    "Need cheap mobile app developers in Moradabad without poor quality? Zentrix Infotech builds low-cost Android and iOS apps with honest pricing. Call +91 72488 00839.",
  keywords:
    "cheap mobile app developers moradabad, cheap app developers moradabad, low cost mobile app developer moradabad, budget app developers moradabad, cheap android app developer moradabad, cheap ios app developer moradabad, cheap app development company moradabad, hire cheap app developer moradabad, affordable mobile app developers moradabad, freelance app developer moradabad, app developer near me moradabad, mobile app development company moradabad, low budget app development moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/cheap-mobile-app-developers-moradabad",
  },

  openGraph: {
    title: "Cheap Mobile App Developers Moradabad | Zentrix Infotech",
    description:
      "Need cheap mobile app developers in Moradabad without poor quality? Zentrix Infotech builds low-cost Android and iOS apps with honest pricing. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/cheap-mobile-app-developers-moradabad",
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
    title: "Cheap Mobile App Developers Moradabad | Zentrix Infotech",
    description:
      "Need cheap mobile app developers in Moradabad without poor quality? Zentrix Infotech builds low-cost Android and iOS apps with honest pricing. Call +91 72488 00839.",
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