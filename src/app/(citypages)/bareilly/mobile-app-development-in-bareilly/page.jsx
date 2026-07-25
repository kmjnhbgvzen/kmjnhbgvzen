import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development in Bareilly | Android & iOS App Company",
  description:
    "Build a powerful Android or iOS app with a trusted mobile app development company in Bareilly — custom apps, UI/UX design and end-to-end development support.",
  keywords:
    "mobile app development in Bareilly, app development company Bareilly, android app development Bareilly, iOS app development company, custom mobile app development, mobile app development agency India, best app development company Bareilly, cross platform app development, mobile app design and development, hire app developers Bareilly, on demand app development services",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/mobile-app-development-in-bareilly",
  },

  openGraph: {
    title: "Mobile App Development in Bareilly | Android & iOS App Company",
    description:
      "Build a powerful Android or iOS app with a trusted mobile app development company in Bareilly — custom apps, UI/UX design and end-to-end development support.",
    url: "https://www.zentrixinfotech.com/bareilly/mobile-app-development-in-bareilly",
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
    title: "Mobile App Development in Bareilly | Android & iOS App Company",
    description:
      "Build a powerful Android or iOS app with a trusted mobile app development company in Bareilly — custom apps, UI/UX design and end-to-end development support.",
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