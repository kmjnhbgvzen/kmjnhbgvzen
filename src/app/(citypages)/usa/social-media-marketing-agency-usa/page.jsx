import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency USA | Grow Engagement, Reach & Sales",
  description:
    "Partner with a results-driven social media marketing agency in the USA. Get expert content strategy, paid ads, community management, and influencer marketing that drives growth.",
  keywords:
    "social media marketing agency USA, social media marketing services America, best social media agency USA, Instagram marketing agency USA, Facebook ads agency USA, social media management company, influencer marketing agency USA, paid social advertising agency, small business social media marketing, enterprise social media agency USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/social-media-marketing-agency-usa",
  },
  openGraph: {
    title: "Social Media Marketing Agency USA | Grow Engagement, Reach & Sales",
    description:
      "Partner with a results-driven social media marketing agency in the USA. Get expert content strategy, paid ads, community management, and influencer marketing that drives growth.",
    url: "https://www.zentrixinfotech.com/usa/social-media-marketing-agency-usa",
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
    title: "Social Media Marketing Agency USA | Grow Engagement, Reach & Sales",
    description:
      "Partner with a results-driven social media marketing agency in the USA. Get expert content strategy, paid ads, community management, and influencer marketing that drives growth.",
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