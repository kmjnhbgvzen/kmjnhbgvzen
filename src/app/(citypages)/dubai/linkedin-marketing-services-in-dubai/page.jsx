import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best LinkedIn Marketing Services in Dubai | B2B Lead Generation Experts",
  description:
    "Get expert LinkedIn marketing services in Dubai for B2B lead generation, company page growth, and targeted ads that turn connections into clients.",
  keywords:
    "LinkedIn marketing services in Dubai, LinkedIn marketing Dubai, LinkedIn ads agency UAE, B2B marketing agency Dubai, LinkedIn lead generation Dubai, LinkedIn company page management UAE, LinkedIn advertising services Dubai, LinkedIn marketing company UAE, professional networking marketing Dubai, LinkedIn growth agency Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/linkedin-marketing-services-dubai",
  },

  openGraph: {
    title: "Best LinkedIn Marketing Services in Dubai | B2B Lead Generation Experts",
    description:
      "Get expert LinkedIn marketing services in Dubai for B2B lead generation, company page growth, and targeted ads that turn connections into clients.",
    url: "https://www.zentrixinfotech.com/dubai/linkedin-marketing-services-dubai",
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
    title: "Best LinkedIn Marketing Services in Dubai | B2B Lead Generation Experts",
    description:
      "Get expert LinkedIn marketing services in Dubai for B2B lead generation, company page growth, and targeted ads that turn connections into clients.",
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