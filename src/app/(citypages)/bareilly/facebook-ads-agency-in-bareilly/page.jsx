import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Agency in Bareilly | Zentrix Infotech",
  description:
    "Get more leads with expert Facebook Ads services in Bareilly by Zentrix Infotech. Targeted campaigns, better ROI & real business growth for local brands.",
  keywords:
    "Facebook Ads agency in Bareilly, Facebook Ads company Bareilly, Facebook marketing services Bareilly, Facebook Ads for small business Bareilly, best Facebook Ads agency near me, Meta Ads agency Bareilly, Facebook Ads management services, paid advertising agency Bareilly, lead generation Facebook Ads Bareilly, affordable Facebook Ads company, social media advertising agency Bareilly, Facebook Ads for local business",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/facebook-ads-agency-bareilly",
  },

  openGraph: {
    title: "Facebook Ads Agency in Bareilly | Zentrix Infotech",
    description:
      "Get more leads with expert Facebook Ads services in Bareilly by Zentrix Infotech. Targeted campaigns, better ROI & real business growth for local brands.",
    url: "https://www.zentrixinfotech.com/bareilly/facebook-ads-agency-bareilly",
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
    title: "Facebook Ads Agency in Bareilly | Zentrix Infotech",
    description:
      "Get more leads with expert Facebook Ads services in Bareilly by Zentrix Infotech. Targeted campaigns, better ROI & real business growth for local brands.",
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