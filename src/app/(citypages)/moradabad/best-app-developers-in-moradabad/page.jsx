import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best App Developers in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best app developers in Moradabad? Zentrix Infotech builds fast, secure Android, iOS and cross-platform apps with proven results and clear pricing.",
  keywords:
    "best app developers in Moradabad, top app developers Moradabad, best mobile app developers Moradabad, best Android app developers Moradabad, best iOS app developers Moradabad, best app development team Moradabad, trusted app developers Moradabad, experienced app developers near me, best app developers for startups, custom app developers Moradabad, app developers with portfolio, reliable app development partner, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-app-developers-in-moradabad",
  },

  openGraph: {
    title:
      "Best App Developers in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best app developers in Moradabad? Zentrix Infotech builds fast, secure Android, iOS and cross-platform apps with proven results and clear pricing.",
    url: "https://www.zentrixinfotech.com/moradabad/best-app-developers-in-moradabad",
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
      "Best App Developers in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best app developers in Moradabad? Zentrix Infotech builds fast, secure Android, iOS and cross-platform apps with proven results and clear pricing.",
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