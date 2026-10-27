import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best iOS App Development Company in India | Zentrix",
  description:
    "Learn what makes the best iOS app development company in India and why businesses trust Zentrix Infotech for secure, high-quality iPhone and iPad apps. Get a free quote.",
  keywords:
    "best iOS app development company in India, top iOS app development company India, iOS app development company India, iPhone app development company India, custom iOS app development India, hire iOS app developers India, iOS app development services India, trusted iOS app development company, affordable iOS app development India, enterprise iOS app development India, iOS app development for startups India, how to choose iOS app development company, Swift app development company India, iOS app development company in Moradabad, App Store app launch services India",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-iOS-app-development-company-in-india",
  },


  openGraph: {
    title: "Best iOS App Development Company in India | Zentrix",
    description:
      "Learn what makes the best iOS app development company in India and why businesses trust Zentrix Infotech for secure, high-quality iPhone and iPad apps. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/best-iOS-app-development-company-in-india",
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
    title: "Best iOS App Development Company in India | Zentrix",
    description:
      "Learn what makes the best iOS app development company in India and why businesses trust Zentrix Infotech for secure, high-quality iPhone and iPad apps. Get a free quote.",
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