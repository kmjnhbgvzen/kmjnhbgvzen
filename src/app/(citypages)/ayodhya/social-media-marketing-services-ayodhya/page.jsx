import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Services Ayodhya – Grow Your Brand Online",
  description:
    "Explore social media marketing services in Ayodhya, what's included in each package, key benefits, and how to choose the right provider for your business.",
  keywords:
    "social media marketing services ayodhya, social media marketing company ayodhya, instagram marketing ayodhya, facebook marketing services ayodhya, social media agency ayodhya, best social media marketing ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-services-ayodhya",
  },
  openGraph: {
    title: "Social Media Marketing Services Ayodhya – Grow Your Brand Online",
    description:
      "Explore social media marketing services in Ayodhya, what's included in each package, key benefits, and how to choose the right provider for your business.",
    url: "https://www.zentrixinfotech.com/ayodhya/social-media-marketing-services-ayodhya",
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
    title: "Social Media Marketing Services Ayodhya – Grow Your Brand Online",
    description:
      "Explore social media marketing services in Ayodhya, what's included in each package, key benefits, and how to choose the right provider for your business.",
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