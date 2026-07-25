import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Agency in Muzaffarnagar | Best FB Ads Services",
  description:
    "Looking for a Facebook Ads Agency in Muzaffarnagar? Get expert Facebook advertising, lead generation & ROI-driven campaigns for local businesses. Call now!",
  keywords:
    "Facebook ads agency in Muzaffarnagar, Facebook advertising services Muzaffarnagar, FB ads company Muzaffarnagar, social media marketing Muzaffarnagar, Facebook marketing agency near me, Facebook ads expert Muzaffarnagar, digital marketing agency Muzaffarnagar, Facebook lead generation Muzaffarnagar, best Facebook ads company UP, local business Facebook ads",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/facebook-ads-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Facebook Ads Agency in Muzaffarnagar | Best FB Ads Services",
    description:
      "Looking for a Facebook Ads Agency in Muzaffarnagar? Get expert Facebook advertising, lead generation & ROI-driven campaigns for local businesses. Call now!",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/facebook-ads-agency-in-muzaffarnagar",
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
    title: "Facebook Ads Agency in Muzaffarnagar | Best FB Ads Services",
    description:
      "Looking for a Facebook Ads Agency in Muzaffarnagar? Get expert Facebook advertising, lead generation & ROI-driven campaigns for local businesses. Call now!",
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