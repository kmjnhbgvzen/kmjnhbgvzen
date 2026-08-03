import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Top iOS App Development Companies in Hapur | Swift & iPhone App Experts",
  description:
    "Find top iOS app development companies in Hapur for premium iPhone apps, App Store launch, Swift development & reliable long-term support.",
  keywords:
    "top iOS app development companies in Hapur, iOS app developer Hapur, iPhone app development company, Swift developer Hapur, App Store app development, hire iOS developer near me, iOS app design company Hapur, custom iPhone app development, iOS app development cost India, mobile app development company UP, App Store optimization services, iOS app maintenance support",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/top-ios-app-development-companies-hapur",
  },
  openGraph: {
    title: "Top iOS App Development Companies in Hapur | Swift & iPhone App Experts",
    description:
      "Find top iOS app development companies in Hapur for premium iPhone apps, App Store launch, Swift development & reliable long-term support.",
    url: "https://www.zentrixinfotech.com/hapur/top-ios-app-development-companies-hapur",
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
    title: "Top iOS App Development Companies in Hapur | Swift & iPhone App Experts",
    description:
      "Find top iOS app development companies in Hapur for premium iPhone apps, App Store launch, Swift development & reliable long-term support.",
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