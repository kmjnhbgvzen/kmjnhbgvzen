import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Meerut | Grow Your Brand with Top Local Influencers",
  description:
    "Looking for a trusted influencer marketing agency in Meerut? We connect brands with the right Instagram, YouTube & micro-influencers to boost reach, engagement & sales. Get a free strategy call today.",
  keywords:
    "influencer marketing agency in Meerut, influencer marketing company Meerut, best influencer marketing agency Uttar Pradesh, Instagram influencer marketing Meerut, YouTube influencer marketing Meerut, micro influencer agency Meerut, social media influencer marketing services, influencer marketing for small business Meerut, brand promotion agency Meerut, digital marketing agency Meerut, local influencer marketing services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/influencer-marketing-agency-in-meerut",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Meerut | Grow Your Brand with Top Local Influencers",
    description:
      "Looking for a trusted influencer marketing agency in Meerut? We connect brands with the right Instagram, YouTube & micro-influencers to boost reach, engagement & sales. Get a free strategy call today.",
    url: "https://www.zentrixinfotech.com/meerut/influencer-marketing-agency-in-meerut",
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
    title: "Influencer Marketing Agency in Meerut | Grow Your Brand with Top Local Influencers",
    description:
      "Looking for a trusted influencer marketing agency in Meerut? We connect brands with the right Instagram, YouTube & micro-influencers to boost reach, engagement & sales. Get a free strategy call today.",
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