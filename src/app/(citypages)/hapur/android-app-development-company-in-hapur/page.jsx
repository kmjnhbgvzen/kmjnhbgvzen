import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Android App Development Company in Hapur | Custom App Experts",
  description:
    "Hire a trusted Android app development company in Hapur for custom apps, seamless UI, Play Store launch & ongoing support to grow your business.",
  keywords:
    "Android app development company in Hapur, Android app developer Hapur, mobile app development company Hapur, custom Android app development, hire Android developer near me, app development company UP, Play Store app development, Kotlin app developer Hapur, Android app design company, business app development Hapur, app development cost India, mobile app maintenance services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/android-app-development-company-hapur",
  },
  openGraph: {
    title: "Android App Development Company in Hapur | Custom App Experts",
    description:
      "Hire a trusted Android app development company in Hapur for custom apps, seamless UI, Play Store launch & ongoing support to grow your business.",
    url: "https://www.zentrixinfotech.com/hapur/android-app-development-company-hapur",
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
    title: "Android App Development Company in Hapur | Custom App Experts",
    description:
      "Hire a trusted Android app development company in Hapur for custom apps, seamless UI, Play Store launch & ongoing support to grow your business.",
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