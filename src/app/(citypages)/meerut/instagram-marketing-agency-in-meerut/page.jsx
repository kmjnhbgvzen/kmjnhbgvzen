import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Meerut | Grow Followers, Engagement & Sales",
  description:
    "Looking for a trusted Instagram marketing agency in Meerut? We handle content, reels, ads & growth strategy to build your brand and generate real leads. Get a free consultation today.",
  keywords:
    "Instagram marketing agency in Meerut, Instagram marketing company Meerut, Instagram growth agency Meerut, Instagram ads agency Meerut, Instagram reels agency Meerut, social media marketing Meerut, Instagram page management services, Instagram marketing for small business, best social media agency Uttar Pradesh, Instagram content creation Meerut, Instagram lead generation Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/instagram-marketing-agency-in-meerut",
  },
  openGraph: {
    title: "Instagram Marketing Agency in Meerut | Grow Followers, Engagement & Sales",
    description:
      "Looking for a trusted Instagram marketing agency in Meerut? We handle content, reels, ads & growth strategy to build your brand and generate real leads. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/instagram-marketing-agency-in-meerut",
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
    title: "Instagram Marketing Agency in Meerut | Grow Followers, Engagement & Sales",
    description:
      "Looking for a trusted Instagram marketing agency in Meerut? We handle content, reels, ads & growth strategy to build your brand and generate real leads. Get a free consultation today.",
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