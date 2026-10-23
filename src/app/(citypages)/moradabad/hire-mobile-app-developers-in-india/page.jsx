import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hire Mobile App Developers in India | Zentrix Infotech",
  description:
    "Hire dedicated mobile app developers in India from Zentrix Infotech. Skilled Android, iOS and cross-platform experts, flexible hiring models and transparent pricing.",
  keywords:
    "hire mobile app developers in India, hire dedicated mobile app developers India, hire android app developers India, hire iOS app developers India, hire Flutter developers India, hire React Native developers India, mobile app developers for hire, dedicated app development team India, hire app developers for startups, hire offshore mobile app developers, affordable mobile app developers India, mobile app developers in Moradabad, hire mobile app developers on monthly basis, hire app developers near me, mobile app development outsourcing India",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-developers-in-india",
  },

  openGraph: {
    title: "Hire Mobile App Developers in India | Zentrix Infotech",
    description:
      "Hire dedicated mobile app developers in India from Zentrix Infotech. Skilled Android, iOS and cross-platform experts, flexible hiring models and transparent pricing.",
    url: "https://www.zentrixinfotech.com/moradabad/hire-mobile-app-developers-in-india",
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
    title: "Hire Mobile App Developers in India | Zentrix Infotech",
    description:
      "Hire dedicated mobile app developers in India from Zentrix Infotech. Skilled Android, iOS and cross-platform experts, flexible hiring models and transparent pricing.",
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