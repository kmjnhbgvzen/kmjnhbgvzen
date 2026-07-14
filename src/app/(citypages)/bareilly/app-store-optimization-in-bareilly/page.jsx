import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization Services in Bareilly | Zentrix Infotech",
  description:
    "Get more app downloads with expert App Store Optimization services in Bareilly by Zentrix Infotech. Rank higher, boost installs, and grow your app users.",
  keywords:
    "app store optimization in Bareilly, ASO services Bareilly, app store optimization company Bareilly, mobile app marketing Bareilly, app ranking services Bareilly, Play Store optimization Bareilly, App Store SEO company, best ASO agency near me, app download growth services, mobile app promotion Bareilly, affordable ASO services Bareilly, app marketing agency Bareilly",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/app-store-optimization-services-bareilly",
  },

  openGraph: {
    title: "App Store Optimization Services in Bareilly | Zentrix Infotech",
    description:
      "Get more app downloads with expert App Store Optimization services in Bareilly by Zentrix Infotech. Rank higher, boost installs, and grow your app users.",
    url: "https://www.zentrixinfotech.com/bareilly/app-store-optimization-services-bareilly",
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
    title: "App Store Optimization Services in Bareilly | Zentrix Infotech",
    description:
      "Get more app downloads with expert App Store Optimization services in Bareilly by Zentrix Infotech. Rank higher, boost installs, and grow your app users.",
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