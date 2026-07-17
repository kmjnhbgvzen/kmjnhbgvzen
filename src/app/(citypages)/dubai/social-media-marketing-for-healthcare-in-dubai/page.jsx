import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing for Healthcare in Dubai | Attract More Patients",
  description:
    "Grow your clinic or hospital with expert social media marketing in Dubai — trust-building content, targeted ads, and campaigns that drive appointments.",
  keywords:
    "social media marketing for healthcare in Dubai, healthcare marketing agency Dubai, clinic marketing agency UAE, hospital social media marketing Dubai, medical marketing agency Dubai, dental clinic marketing Dubai, healthcare digital marketing UAE, doctor marketing agency Dubai, healthcare ads agency Dubai, medical practice marketing UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-healthcare-in-dubai",
  },

  openGraph: {
    title: "Social Media Marketing for Healthcare in Dubai | Attract More Patients",
    description:
      "Grow your clinic or hospital with expert social media marketing in Dubai — trust-building content, targeted ads, and campaigns that drive appointments.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-marketing-for-healthcare-in-dubai",
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
    title: "Social Media Marketing for Healthcare in Dubai | Attract More Patients",
    description:
      "Grow your clinic or hospital with expert social media marketing in Dubai — trust-building content, targeted ads, and campaigns that drive appointments.",
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