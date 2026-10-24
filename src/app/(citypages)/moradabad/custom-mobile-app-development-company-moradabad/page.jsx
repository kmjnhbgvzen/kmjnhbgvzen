import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Custom Mobile App Development Company Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a custom mobile app development company in Moradabad. We build secure, tailor-made Android and iOS apps for local businesses and startups.",
  keywords:
    "custom mobile app development company Moradabad, mobile app development company in Moradabad, custom app development Moradabad, Android app development company Moradabad, iOS app development company Moradabad, mobile app developers in Moradabad, best app development company in Moradabad, affordable mobile app development Moradabad, app development company Moradabad Uttar Pradesh, custom mobile app development services Moradabad, e-commerce app development Moradabad, mobile app development for startups Moradabad, cross platform app development Moradabad, Moradabad app development company near me, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-mobile-app-development-company-moradabad",
  },

  openGraph: {
    title:
      "Custom Mobile App Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a custom mobile app development company in Moradabad. We build secure, tailor-made Android and iOS apps for local businesses and startups.",
    url:
      "https://www.zentrixinfotech.com/moradabad/custom-mobile-app-development-company-moradabad",
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
      "Custom Mobile App Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a custom mobile app development company in Moradabad. We build secure, tailor-made Android and iOS apps for local businesses and startups.",
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