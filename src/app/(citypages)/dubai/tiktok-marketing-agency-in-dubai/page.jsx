import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best TikTok Marketing Agency in Dubai | Viral Growth & Ads",
  description:
    "Work with a leading TikTok marketing agency in Dubai for viral content, influencer campaigns, and targeted ads that grow followers and sales fast.",
  keywords:
    "TikTok marketing agency in Dubai, TikTok marketing Dubai, TikTok ads agency UAE, TikTok growth agency Dubai, TikTok influencer marketing Dubai, TikTok management services UAE, TikTok video marketing Dubai, best TikTok agency UAE, TikTok content creation Dubai, TikTok promotion services Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/tiktok-marketing-agency-dubai",
  },

  openGraph: {
    title: "Best TikTok Marketing Agency in Dubai | Viral Growth & Ads",
    description:
      "Work with a leading TikTok marketing agency in Dubai for viral content, influencer campaigns, and targeted ads that grow followers and sales fast.",
    url: "https://www.zentrixinfotech.com/dubai/tiktok-marketing-agency-dubai",
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
    title: "Best TikTok Marketing Agency in Dubai | Viral Growth & Ads",
    description:
      "Work with a leading TikTok marketing agency in Dubai for viral content, influencer campaigns, and targeted ads that grow followers and sales fast.",
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