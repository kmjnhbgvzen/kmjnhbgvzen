import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Saharanpur | Zentrix Infotech",
  description:
    "Zentrix Infotech is a YouTube marketing agency in Saharanpur helping brands grow channels, run video ads & turn views into real customers. Get started.",
  keywords:
    "youtube marketing agency in Saharanpur, youtube marketing company saharanpur, youtube channel growth services, youtube video seo services india, youtube ads agency saharanpur, youtube promotion services india, youtube marketing packages saharanpur, video marketing agency uttar pradesh, youtube channel management services, youtube advertising cost india, best youtube marketing agency india, youtube seo optimization services, youtube subscriber growth services, digital marketing agency saharanpur, youtube content strategy services, video seo company india",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/youtube-marketing-agency-saharanpur",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Zentrix Infotech is a YouTube marketing agency in Saharanpur helping brands grow channels, run video ads & turn views into real customers. Get started.",
    url: "https://www.zentrixinfotech.com/saharanpur/youtube-marketing-agency-saharanpur",
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
    title: "YouTube Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Zentrix Infotech is a YouTube marketing agency in Saharanpur helping brands grow channels, run video ads & turn views into real customers. Get started.",
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