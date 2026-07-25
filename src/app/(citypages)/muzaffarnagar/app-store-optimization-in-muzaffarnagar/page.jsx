import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization Services in Muzaffarnagar | Zentrix Infotech",
  description:
    "Zentrix Infotech offers expert App Store Optimization (ASO) services in Muzaffarnagar to boost app rankings, downloads & visibility on Google Play and App Store. Get a free quote today.",
  keywords:
    "app store optimization in Muzaffarnagar, ASO services Muzaffarnagar, app marketing agency Muzaffarnagar, Google Play optimization Muzaffarnagar, app ranking services Muzaffarnagar, mobile app marketing company Muzaffarnagar, app download growth Muzaffarnagar, App Store SEO Muzaffarnagar, mobile app development company Muzaffarnagar, digital marketing agency Muzaffarnagar, affordable ASO services Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/app-store-optimization-in-muzaffarnagar",
  },
  openGraph: {
    title: "App Store Optimization Services in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers expert App Store Optimization (ASO) services in Muzaffarnagar to boost app rankings, downloads & visibility on Google Play and App Store. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/app-store-optimization-in-muzaffarnagar",
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
    title: "App Store Optimization Services in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers expert App Store Optimization (ASO) services in Muzaffarnagar to boost app rankings, downloads & visibility on Google Play and App Store. Get a free quote today.",
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