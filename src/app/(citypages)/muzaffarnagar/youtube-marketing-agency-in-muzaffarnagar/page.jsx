import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Muzaffarnagar | Grow Your Channel & Brand",
  description:
    "Leading YouTube Marketing Agency in Muzaffarnagar offering video SEO, channel growth, ads & content strategy to boost views, subscribers, and sales.",
  keywords:
    "youtube marketing agency in muzaffarnagar, youtube marketing services muzaffarnagar, youtube channel growth agency muzaffarnagar, youtube video seo company, youtube ads agency muzaffarnagar, best youtube marketing company near me, youtube marketing for business muzaffarnagar, video marketing agency muzaffarnagar, youtube promotion services india, digital marketing agency muzaffarnagar, youtube content strategy agency, youtube subscribers growth services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/youtube-marketing-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Muzaffarnagar | Grow Your Channel & Brand",
    description:
      "Leading YouTube Marketing Agency in Muzaffarnagar offering video SEO, channel growth, ads & content strategy to boost views, subscribers, and sales.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/youtube-marketing-agency-in-muzaffarnagar",
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
    title: "YouTube Marketing Agency in Muzaffarnagar | Grow Your Channel & Brand",
    description:
      "Leading YouTube Marketing Agency in Muzaffarnagar offering video SEO, channel growth, ads & content strategy to boost views, subscribers, and sales.",
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