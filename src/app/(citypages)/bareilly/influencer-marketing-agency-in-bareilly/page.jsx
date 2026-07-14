import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Bareilly | Zentrix Infotech",
  description:
    "Reach real customers with a trusted influencer marketing agency in Bareilly. Zentrix Infotech connects your brand with the right voices for genuine growth.",
  keywords:
    "influencer marketing agency in Bareilly, influencer marketing company Bareilly, local influencer marketing services, micro influencer agency Bareilly, brand collaboration agency Bareilly, influencer marketing for small business, best influencer marketing agency near me, social media influencer services Bareilly, influencer campaign management, affordable influencer marketing Bareilly, digital marketing agency Bareilly, influencer outreach services",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/influencer-marketing-agency-bareilly",
  },

  openGraph: {
    title: "Influencer Marketing Agency in Bareilly | Zentrix Infotech",
    description:
      "Reach real customers with a trusted influencer marketing agency in Bareilly. Zentrix Infotech connects your brand with the right voices for genuine growth.",
    url: "https://www.zentrixinfotech.com/bareilly/influencer-marketing-agency-bareilly",
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
    title: "Influencer Marketing Agency in Bareilly | Zentrix Infotech",
    description:
      "Reach real customers with a trusted influencer marketing agency in Bareilly. Zentrix Infotech connects your brand with the right voices for genuine growth.",
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