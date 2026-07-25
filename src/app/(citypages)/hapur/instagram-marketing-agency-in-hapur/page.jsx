import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Hapur | Grow Followers & Sales",
  description:
    "Looking for an Instagram marketing agency in Hapur? Zentrix Infotech creates content, ads & strategy that grow followers, engagement, and real sales.",
  keywords:
    "Instagram marketing agency in Hapur, Instagram marketing company Hapur, social media marketing agency Hapur, Instagram ads agency, Instagram growth services near me, Instagram reels marketing company, social media management agency UP, Instagram marketing for small business, e-commerce Instagram marketing services, Instagram page management company, influencer marketing agency Hapur, Instagram content creation agency, best social media agency Delhi NCR, Instagram marketing strategy company, digital marketing agency Hapur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/instagram-marketing-agency-in-hapur",
  },
  openGraph: {
    title: "Instagram Marketing Agency in Hapur | Grow Followers & Sales",
    description:
      "Looking for an Instagram marketing agency in Hapur? Zentrix Infotech creates content, ads & strategy that grow followers, engagement, and real sales.",
    url: "https://www.zentrixinfotech.com/hapur/instagram-marketing-agency-in-hapur",
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
    title: "Instagram Marketing Agency in Hapur | Grow Followers & Sales",
    description:
      "Looking for an Instagram marketing agency in Hapur? Zentrix Infotech creates content, ads & strategy that grow followers, engagement, and real sales.",
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