import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Muzaffarnagar | Zentrix Infotech",
  description:
    "Zentrix Infotech offers specialised digital marketing for real estate in Muzaffarnagar including SEO, Google Ads, social media & website design to boost property inquiries. Get a free quote today.",
  keywords:
    "digital marketing for real estate in Muzaffarnagar, real estate marketing agency Muzaffarnagar, property marketing company Muzaffarnagar, real estate SEO services Muzaffarnagar, real estate website design Muzaffarnagar, builder marketing agency Muzaffarnagar, real estate Google Ads services Muzaffarnagar, property lead generation Muzaffarnagar, real estate social media marketing Muzaffarnagar, digital marketing agency Muzaffarnagar, affordable real estate marketing Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-for-real-estate-in-muzaffarnagar",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for real estate in Muzaffarnagar including SEO, Google Ads, social media & website design to boost property inquiries. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-for-real-estate-in-muzaffarnagar",
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
    title: "Digital Marketing for Real Estate in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for real estate in Muzaffarnagar including SEO, Google Ads, social media & website design to boost property inquiries. Get a free quote today.",
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