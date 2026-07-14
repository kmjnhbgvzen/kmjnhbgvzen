import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "App Store Optimization in Meerut | Boost App Rankings & Downloads",
  description:
    "Improve your app's visibility with expert App Store Optimization in Meerut. Rank higher on Google Play and App Store with proven ASO strategies.",
  keywords:
    "app store optimization in Meerut, ASO services Meerut, app ranking optimization, Google Play Store optimization Meerut, mobile app marketing Meerut, app store SEO, increase app downloads, app visibility optimization, ASO agency Meerut, mobile app growth strategy",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/app-store-optimization-in-meerut",
  },
  openGraph: {
    title: "App Store Optimization in Meerut | Boost App Rankings & Downloads",
    description:
      "Improve your app's visibility with expert App Store Optimization in Meerut. Rank higher on Google Play and App Store with proven ASO strategies.",
    url: "https://www.zentrixinfotech.com/meerut/app-store-optimization-in-meerut",
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
    title: "App Store Optimization in Meerut | Boost App Rankings & Downloads",
    description:
      "Improve your app's visibility with expert App Store Optimization in Meerut. Rank higher on Google Play and App Store with proven ASO strategies.",
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