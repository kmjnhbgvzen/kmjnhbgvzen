import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Business App Development Cost | Zentrix Infotech",
  description:
    "Get clear, transparent estimates for custom business app development cost. Learn pricing for MVP, mobile, web, and enterprise business apps from Zentrix Infotech.",
  keywords:
    "custom business app development cost, business app development pricing, mobile app development cost India, custom app development estimate, enterprise app development price, affordable business app developer, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/custom-business-app-development-cost",
  },
  openGraph: {
    title: "Custom Business App Development Cost | Zentrix Infotech",
    description:
      "Get clear, transparent estimates for custom business app development cost. Learn pricing for MVP, mobile, web, and enterprise business apps from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/custom-business-app-development-cost",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Business App Development Cost | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business App Development Cost | Zentrix Infotech",
    description:
      "Get clear, transparent estimates for custom business app development cost. Learn pricing for MVP, mobile, web, and enterprise business apps from Zentrix Infotech.",
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
