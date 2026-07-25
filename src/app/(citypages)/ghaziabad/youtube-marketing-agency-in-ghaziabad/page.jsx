import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Looking for a YouTube marketing agency in Ghaziabad? Zentrix Infotech offers video SEO, channel growth & ad campaigns to boost views, subscribers & sales.",
  keywords:
    "youtube marketing agency in ghaziabad, youtube marketing company ghaziabad, youtube seo services ghaziabad, youtube video marketing agency, youtube channel growth agency india, youtube ads agency ghaziabad, best youtube marketing agency near me, video marketing services ghaziabad, youtube promotion agency ghaziabad, digital marketing agency ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/youtube-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a YouTube marketing agency in Ghaziabad? Zentrix Infotech offers video SEO, channel growth & ad campaigns to boost views, subscribers & sales.",
    url: "https://www.zentrixinfotech.com/ghaziabad/youtube-marketing-agency-in-ghaziabad",
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
    title: "YouTube Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a YouTube marketing agency in Ghaziabad? Zentrix Infotech offers video SEO, channel growth & ad campaigns to boost views, subscribers & sales.",
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