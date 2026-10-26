import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company Moradabad Reviews | Zentrix Infotech",
  description:
    "Read mobile app development company Moradabad reviews and learn how to judge a developer. See why clients trust Zentrix Infotech. Call +91 72488 00839 today.",
  keywords:
    "mobile app development company moradabad reviews, app development company moradabad reviews, best mobile app development company moradabad, mobile app developers moradabad reviews, app development company reviews moradabad, top rated app development company moradabad, mobile app development company moradabad, android app development company moradabad, ios app development company moradabad, custom app development moradabad, trusted app developers moradabad, app development client testimonials moradabad, Zentrix Infotech reviews, Zentrix Infotech mobile app development",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-moradabad-reviews",
  },

  openGraph: {
    title: "Mobile App Development Company Moradabad Reviews | Zentrix Infotech",
    description:
      "Read mobile app development company Moradabad reviews and learn how to judge a developer. See why clients trust Zentrix Infotech. Call +91 72488 00839 today.",
    url: "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-moradabad-reviews",
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
    title: "Mobile App Development Company Moradabad Reviews | Zentrix Infotech",
    description:
      "Read mobile app development company Moradabad reviews and learn how to judge a developer. See why clients trust Zentrix Infotech. Call +91 72488 00839 today.",
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