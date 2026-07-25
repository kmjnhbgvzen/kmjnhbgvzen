import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Muzaffarnagar | Grow Followers & Sales",
  description:
    "Trusted Instagram Marketing Agency in Muzaffarnagar offering reels, ads, content strategy & growth management to boost engagement, leads, and sales.",
  keywords:
    "instagram marketing agency in muzaffarnagar, instagram marketing services muzaffarnagar, instagram ads agency muzaffarnagar, instagram growth agency near me, social media marketing company muzaffarnagar, instagram reels marketing services, best instagram marketing company muzaffarnagar, instagram page management services, digital marketing agency muzaffarnagar, instagram marketing for small business, content creation agency muzaffarnagar, social media growth services india",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/instagram-marketing-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Instagram Marketing Agency in Muzaffarnagar | Grow Followers & Sales",
    description:
      "Trusted Instagram Marketing Agency in Muzaffarnagar offering reels, ads, content strategy & growth management to boost engagement, leads, and sales.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/instagram-marketing-agency-in-muzaffarnagar",
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
    title: "Instagram Marketing Agency in Muzaffarnagar | Grow Followers & Sales",
    description:
      "Trusted Instagram Marketing Agency in Muzaffarnagar offering reels, ads, content strategy & growth management to boost engagement, leads, and sales.",
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