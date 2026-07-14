import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization in Saharanpur | Rank Your App",
  description:
    "Expert App Store Optimization (ASO) services in Saharanpur. Rank higher on Play Store & App Store, get more organic downloads. Free consultation today!",
  keywords:
    "App Store Optimization in Saharanpur, ASO services in Saharanpur, App Store Optimization company Saharanpur, Play Store optimization services Saharanpur, ASO agency near me, mobile app ranking services Saharanpur, app keyword optimization Saharanpur, increase app downloads Saharanpur, App Store optimization for startups Saharanpur, Google Play optimization company UP, best ASO agency Saharanpur, app store listing optimization services, ASO for ecommerce app Saharanpur, app visibility optimization Saharanpur, organic app download growth services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/app-store-optimization-saharanpur",
  },
  openGraph: {
    title: "App Store Optimization in Saharanpur | Rank Your App",
    description:
      "Expert App Store Optimization (ASO) services in Saharanpur. Rank higher on Play Store & App Store, get more organic downloads. Free consultation today!",
    url: "https://www.zentrixinfotech.com/saharanpur/app-store-optimization-saharanpur",
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
    title: "App Store Optimization in Saharanpur | Rank Your App",
    description:
      "Expert App Store Optimization (ASO) services in Saharanpur. Rank higher on Play Store & App Store, get more organic downloads. Free consultation today!",
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