import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Hapur | Local Creator Campaigns",
  description:
    "Looking for an influencer marketing agency in Hapur? Zentrix Infotech connects brands with the right creators to boost trust, reach & sales.",
  keywords:
    "influencer marketing agency in Hapur, influencer marketing company Hapur, local influencer marketing services, micro influencer agency near me, Instagram influencer marketing company, influencer marketing for small business, influencer marketing agency UP, brand collaboration agency Hapur, social media influencer agency, influencer campaign management company, digital marketing agency Hapur, influencer marketing for e-commerce, influencer marketing strategy company, best influencer agency Delhi NCR, creator marketing agency",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/influencer-marketing-agency-hapur",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Hapur | Local Creator Campaigns",
    description:
      "Looking for an influencer marketing agency in Hapur? Zentrix Infotech connects brands with the right creators to boost trust, reach & sales.",
    url: "https://www.zentrixinfotech.com/hapur/influencer-marketing-agency-hapur",
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
    title: "Influencer Marketing Agency in Hapur | Local Creator Campaigns",
    description:
      "Looking for an influencer marketing agency in Hapur? Zentrix Infotech connects brands with the right creators to boost trust, reach & sales.",
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