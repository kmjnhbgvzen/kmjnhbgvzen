import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company Pricing | Zentrix Infotech",
  description:
    "Understand mobile app development company pricing. See what affects cost, how pricing models work and how Zentrix Infotech gives clear, itemized app quotes.",
  keywords:
    "mobile app development company pricing, mobile app development pricing, mobile app development cost, app development pricing models, mobile app development company cost India, how much does mobile app development cost, mobile app development price factors, affordable mobile app development pricing, custom mobile app development cost, Android app development cost, iOS app development cost, cross platform app development cost, mobile app development quote, mobile app development company Moradabad pricing, Zentrix Infotech mobile app development pricing",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-pricing",
  },

  openGraph: {
    title: "Mobile App Development Company Pricing | Zentrix Infotech",
    description:
      "Understand mobile app development company pricing. See what affects cost, how pricing models work and how Zentrix Infotech gives clear, itemized app quotes.",
    url:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-pricing",
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
    title: "Mobile App Development Company Pricing | Zentrix Infotech",
    description:
      "Understand mobile app development company pricing. See what affects cost, how pricing models work and how Zentrix Infotech gives clear, itemized app quotes.",
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