import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development in Saharanpur | Android & iOS Apps",
  description:
    "Custom Android, iOS & cross-platform app development in Saharanpur. Affordable pricing, on-time delivery, post-launch support. Get a free quote today!",
  keywords:
    "mobile app development in Saharanpur, mobile app development company in Saharanpur, android app development Saharanpur, iOS app development Saharanpur, app developers in Saharanpur, best app development company Saharanpur UP, custom mobile app development near me, e-commerce app development Saharanpur, hybrid app development company Saharanpur, app development for small business Saharanpur, affordable app development services Saharanpur, affordable mobile app development company in Saharanpur for startups, best android and iOS app developers near Saharanpur, how much does app development cost in Saharanpur, custom app development company for wood handicraft business Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/mobile-app-development-saharanpur",
  },
  openGraph: {
    title: "Mobile App Development in Saharanpur | Android & iOS Apps",
    description:
      "Custom Android, iOS & cross-platform app development in Saharanpur. Affordable pricing, on-time delivery, post-launch support. Get a free quote today!",
    url: "https://www.zentrixinfotech.com/saharanpur/mobile-app-development-saharanpur",
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
    title: "Mobile App Development in Saharanpur | Android & iOS Apps",
    description:
      "Custom Android, iOS & cross-platform app development in Saharanpur. Affordable pricing, on-time delivery, post-launch support. Get a free quote today!",
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