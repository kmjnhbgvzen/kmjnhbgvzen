import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development in Ghaziabad | Android & iOS Experts",
  description:
    "Custom Mobile App Development in Ghaziabad for Android, iOS, and cross-platform apps. Scalable, secure, business-focused solutions. Get a free quote.",
  keywords:
    "mobile app development in Ghaziabad, mobile app development company Ghaziabad, Android app development Ghaziabad, iOS app development Ghaziabad, app development agency Ghaziabad, cross platform app development Ghaziabad, custom mobile app development Ghaziabad, ecommerce app development Ghaziabad, best app development company Ghaziabad, mobile app developers near me, Flutter app development Ghaziabad, app development services Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/mobile-app-development-ghaziabad",
  },
  openGraph: {
    title: "Mobile App Development in Ghaziabad | Android & iOS Experts",
    description:
      "Custom Mobile App Development in Ghaziabad for Android, iOS, and cross-platform apps. Scalable, secure, business-focused solutions. Get a free quote.",
    url: "https://www.zentrixinfotech.com/ghaziabad/mobile-app-development-ghaziabad",
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
    title: "Mobile App Development in Ghaziabad | Android & iOS Experts",
    description:
      "Custom Mobile App Development in Ghaziabad for Android, iOS, and cross-platform apps. Scalable, secure, business-focused solutions. Get a free quote.",
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