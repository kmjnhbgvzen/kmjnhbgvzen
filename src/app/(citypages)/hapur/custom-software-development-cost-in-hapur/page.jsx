import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Custom Software Development Cost in Hapur | 2026 Pricing Guide",
  description:
    "Wondering about custom software development cost in Hapur? Get realistic price ranges, pricing models & what actually drives your project budget.",
  keywords:
    "custom software development cost in Hapur, software development pricing India, custom software price India, software project cost estimate, ERP development cost, business automation software cost, dedicated developer monthly rate India, fixed price vs hourly software, software development budget guide, affordable software company Hapur, MVP development cost India, enterprise software pricing India",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/custom-software-development-cost-hapur",
  },
  openGraph: {
    title: "Custom Software Development Cost in Hapur | 2026 Pricing Guide",
    description:
      "Wondering about custom software development cost in Hapur? Get realistic price ranges, pricing models & what actually drives your project budget.",
    url: "https://www.zentrixinfotech.com/hapur/custom-software-development-cost-hapur",
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
    title: "Custom Software Development Cost in Hapur | 2026 Pricing Guide",
    description:
      "Wondering about custom software development cost in Hapur? Get realistic price ranges, pricing models & what actually drives your project budget.",
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