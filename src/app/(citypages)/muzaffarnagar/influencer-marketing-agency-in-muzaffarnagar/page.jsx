import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Muzaffarnagar | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted influencer marketing agency in Muzaffarnagar helping brands grow through creator partnerships, social campaigns & measurable ROI. Get a free quote today.",
  keywords:
    "influencer marketing agency in Muzaffarnagar, influencer marketing company Muzaffarnagar, best influencer marketing agency Muzaffarnagar, social media influencer marketing Muzaffarnagar, influencer marketing services Muzaffarnagar, local influencer collaboration Muzaffarnagar, brand promotion agency Muzaffarnagar, Instagram influencer marketing Muzaffarnagar, YouTube influencer marketing Muzaffarnagar, digital marketing agency Muzaffarnagar, affordable influencer marketing Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/influencer-marketing-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted influencer marketing agency in Muzaffarnagar helping brands grow through creator partnerships, social campaigns & measurable ROI. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/influencer-marketing-agency-in-muzaffarnagar",
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
    title: "Influencer Marketing Agency in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted influencer marketing agency in Muzaffarnagar helping brands grow through creator partnerships, social campaigns & measurable ROI. Get a free quote today.",
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