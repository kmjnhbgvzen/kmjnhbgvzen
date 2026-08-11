import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization in Ghaziabad | ASO Services for App Growth",
  description:
    "Get expert App Store Optimization in Ghaziabad to rank higher on Google Play & Apple App Store. Boost app downloads, visibility & organic installs. Free ASO audit available.",
  keywords:
    "App Store Optimization in Ghaziabad, ASO services in Ghaziabad, app store optimization company Ghaziabad, mobile app marketing Ghaziabad, Google Play Store optimization, Apple App Store ranking services, increase app downloads Ghaziabad, app ranking optimization company, ASO agency near me, app visibility optimization services, mobile app growth agency Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/app-store-optimization-in-ghaziabad",
  },
  openGraph: {
    title: "App Store Optimization in Ghaziabad | ASO Services for App Growth",
    description:
      "Get expert App Store Optimization in Ghaziabad to rank higher on Google Play & Apple App Store. Boost app downloads, visibility & organic installs. Free ASO audit available.",
    url: "https://www.zentrixinfotech.com/ghaziabad/app-store-optimization-in-ghaziabad",
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
    title: "App Store Optimization in Ghaziabad | ASO Services for App Growth",
    description:
      "Get expert App Store Optimization in Ghaziabad to rank higher on Google Play & Apple App Store. Boost app downloads, visibility & organic installs. Free ASO audit available.",
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