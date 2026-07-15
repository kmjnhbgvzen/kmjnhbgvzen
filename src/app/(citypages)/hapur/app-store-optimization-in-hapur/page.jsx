import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization in Hapur | Get More App Downloads",
  description:
    "Looking for app store optimization in Hapur? Zentrix Infotech helps businesses rank higher on app stores and get more organic app downloads.",
  keywords:
    "app store optimization in Hapur, ASO services Hapur, app store optimization company, mobile app marketing agency Hapur, Google Play optimization services, App Store optimization services near me, app ranking company UP, app download growth services, ASO agency Delhi NCR, app keyword optimization company, mobile app marketing services, app store listing optimization, best ASO agency, app promotion company Hapur, app visibility services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/app-store-optimization-hapur",
  },
  openGraph: {
    title: "App Store Optimization in Hapur | Get More App Downloads",
    description:
      "Looking for app store optimization in Hapur? Zentrix Infotech helps businesses rank higher on app stores and get more organic app downloads.",
    url: "https://www.zentrixinfotech.com/hapur/app-store-optimization-hapur",
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
    title: "App Store Optimization in Hapur | Get More App Downloads",
    description:
      "Looking for app store optimization in Hapur? Zentrix Infotech helps businesses rank higher on app stores and get more organic app downloads.",
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