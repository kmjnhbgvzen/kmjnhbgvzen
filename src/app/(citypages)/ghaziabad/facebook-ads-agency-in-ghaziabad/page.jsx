import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Trusted Facebook Ads agency in Ghaziabad delivering targeted campaigns, lower ad costs, and higher conversions for local businesses. Get a free strategy call.",
  keywords:
    "Facebook Ads agency in Ghaziabad, Facebook advertising company Ghaziabad, Facebook Ads management Ghaziabad, social media advertising agency Ghaziabad, Meta Ads agency Ghaziabad, Facebook marketing services Ghaziabad, best Facebook Ads company Ghaziabad, Instagram Facebook Ads agency Ghaziabad, Facebook Ads agency near me, lead generation Facebook Ads Ghaziabad, ecommerce Facebook Ads Ghaziabad, local business Facebook Ads Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/facebook-ads-agency-ghaziabad",
  },
  openGraph: {
    title: "Facebook Ads Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Trusted Facebook Ads agency in Ghaziabad delivering targeted campaigns, lower ad costs, and higher conversions for local businesses. Get a free strategy call.",
    url: "https://www.zentrixinfotech.com/ghaziabad/facebook-ads-agency-ghaziabad",
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
    title: "Facebook Ads Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Trusted Facebook Ads agency in Ghaziabad delivering targeted campaigns, lower ad costs, and higher conversions for local businesses. Get a free strategy call.",
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