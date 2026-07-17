import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Influencer Marketing Agency in Dubai | Authentic Brand Growth",
  description:
    "Partner with a leading influencer marketing agency in Dubai to connect with the right creators, boost brand trust, and drive real sales through authentic campaigns.",
  keywords:
    "influencer marketing agency in Dubai, influencer marketing Dubai, influencer agency UAE, Instagram influencer agency Dubai, TikTok influencer marketing Dubai, influencer collaboration agency UAE, best influencer marketing company Dubai, influencer campaign management Dubai, UAE influencer network agency, influencer marketing services Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/influencer-marketing-agency-dubai",
  },

  openGraph: {
    title: "Best Influencer Marketing Agency in Dubai | Authentic Brand Growth",
    description:
      "Partner with a leading influencer marketing agency in Dubai to connect with the right creators, boost brand trust, and drive real sales through authentic campaigns.",
    url: "https://www.zentrixinfotech.com/dubai/influencer-marketing-agency-dubai",
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
    title: "Best Influencer Marketing Agency in Dubai | Authentic Brand Growth",
    description:
      "Partner with a leading influencer marketing agency in Dubai to connect with the right creators, boost brand trust, and drive real sales through authentic campaigns.",
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