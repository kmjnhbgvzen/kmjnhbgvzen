import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Ghaziabad | Grow Followers & Sales",
  description:
    "Top Instagram Marketing Agency in Ghaziabad for reels, ads, and content that build real engagement. Grow followers, leads, and sales. Get a free strategy call.",
  keywords:
    "Instagram marketing agency in Ghaziabad, Instagram marketing company Ghaziabad, Instagram ads agency Ghaziabad, Instagram reels marketing Ghaziabad, social media marketing agency Ghaziabad, Instagram growth services Ghaziabad, best Instagram marketing agency Ghaziabad, Instagram influencer marketing Ghaziabad, Instagram marketing services near me, digital marketing agency Ghaziabad Instagram, Instagram content creation Ghaziabad, Instagram promotion company Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/instagram-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Instagram Marketing Agency in Ghaziabad | Grow Followers & Sales",
    description:
      "Top Instagram Marketing Agency in Ghaziabad for reels, ads, and content that build real engagement. Grow followers, leads, and sales. Get a free strategy call.",
    url: "https://www.zentrixinfotech.com/ghaziabad/instagram-marketing-agency-in-ghaziabad",
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
    title: "Instagram Marketing Agency in Ghaziabad | Grow Followers & Sales",
    description:
      "Top Instagram Marketing Agency in Ghaziabad for reels, ads, and content that build real engagement. Grow followers, leads, and sales. Get a free strategy call.",
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