import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Leading influencer marketing agency in Ghaziabad connecting brands with local and niche influencers to boost reach, trust, and sales. Get a free consultation.",
  keywords:
    "influencer marketing agency in Ghaziabad, influencer marketing company Ghaziabad, influencer collaboration services Ghaziabad, social media influencer agency Ghaziabad, brand influencer marketing Ghaziabad, best influencer marketing company Ghaziabad, influencer marketing services near me, micro influencer marketing Ghaziabad, local influencer marketing Ghaziabad, Instagram influencer marketing Ghaziabad, ecommerce influencer marketing Ghaziabad, influencer campaign management Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/influencer-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Leading influencer marketing agency in Ghaziabad connecting brands with local and niche influencers to boost reach, trust, and sales. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/influencer-marketing-agency-in-ghaziabad",
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
    title: "Influencer Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Leading influencer marketing agency in Ghaziabad connecting brands with local and niche influencers to boost reach, trust, and sales. Get a free consultation.",
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