import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing for Hospitals in Moradabad | Zentrix Infotech",
  description:
    "Learn what the best digital marketing for hospitals in Moradabad looks like: key principles, strong vs average practice, seasonal plans and metrics. Talk to Zentrix Infotech.",
  keywords:
    "best digital marketing for hospitals in Moradabad, best hospital digital marketing Moradabad, hospital digital marketing best practices, digital marketing for hospitals Moradabad, hospital marketing strategy Moradabad, healthcare digital marketing Moradabad, hospital SEO and ads Moradabad, hospital social media marketing, hospital marketing company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-digital-marketing-for-hospitals-in-moradabad",
  },

  openGraph: {
    title: "Best Digital Marketing for Hospitals in Moradabad | Zentrix Infotech",
    description:
      "Learn what the best digital marketing for hospitals in Moradabad looks like: key principles, strong vs average practice, seasonal plans and metrics. Talk to Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/best-digital-marketing-for-hospitals-in-moradabad",
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
    title: "Best Digital Marketing for Hospitals in Moradabad | Zentrix Infotech",
    description:
      "Learn what the best digital marketing for hospitals in Moradabad looks like: key principles, strong vs average practice, seasonal plans and metrics. Talk to Zentrix Infotech.",
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