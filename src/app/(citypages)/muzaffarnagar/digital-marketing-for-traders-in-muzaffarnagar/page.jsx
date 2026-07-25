import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Traders in Muzaffarnagar | Zentrix Infotech",
  description:
    "Zentrix Infotech offers specialised digital marketing for traders in Muzaffarnagar including SEO, Google Ads, social media & website design to boost wholesale inquiries. Get a free quote today.",
  keywords:
    "digital marketing for traders in Muzaffarnagar, trader marketing agency Muzaffarnagar, wholesale business digital marketing Muzaffarnagar, trading company website design Muzaffarnagar, B2B marketing agency Muzaffarnagar, grain traders digital marketing Muzaffarnagar, wholesale lead generation Muzaffarnagar, trader SEO services Muzaffarnagar, digital marketing agency Muzaffarnagar, affordable trading business marketing Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-for-traders-in-muzaffarnagar",
  },
  openGraph: {
    title: "Digital Marketing for Traders in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for traders in Muzaffarnagar including SEO, Google Ads, social media & website design to boost wholesale inquiries. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-for-traders-in-muzaffarnagar",
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
    title: "Digital Marketing for Traders in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for traders in Muzaffarnagar including SEO, Google Ads, social media & website design to boost wholesale inquiries. Get a free quote today.",
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