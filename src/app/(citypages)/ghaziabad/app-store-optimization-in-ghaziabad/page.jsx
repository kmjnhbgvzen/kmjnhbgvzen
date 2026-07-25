import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization Services in Ghaziabad | Zentrix Infotech",
  description:
    "Professional App Store Optimization in Ghaziabad to boost app rankings, downloads, and visibility on Google Play and App Store. Get a free consultation.",
  keywords:
    "App Store Optimization in Ghaziabad, ASO services Ghaziabad, app ranking optimization Ghaziabad, mobile app marketing Ghaziabad, Google Play optimization Ghaziabad, App Store SEO Ghaziabad, best ASO company Ghaziabad, app download growth services Ghaziabad, ASO services near me, app store keyword optimization Ghaziabad, app visibility services Ghaziabad, mobile app growth agency Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/app-store-optimization-in-ghaziabad",
  },
  openGraph: {
    title: "App Store Optimization Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional App Store Optimization in Ghaziabad to boost app rankings, downloads, and visibility on Google Play and App Store. Get a free consultation.",
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
    title: "App Store Optimization Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional App Store Optimization in Ghaziabad to boost app rankings, downloads, and visibility on Google Play and App Store. Get a free consultation.",
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