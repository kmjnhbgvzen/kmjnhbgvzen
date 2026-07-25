import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Muzaffarnagar | Zentrix Infotech",
  description:
    "Zentrix Infotech offers specialised digital marketing for hospitals in Muzaffarnagar including SEO, Google Ads, social media & website design to boost patient inquiries. Get a free quote today.",
  keywords:
    "digital marketing for hospitals in Muzaffarnagar, healthcare digital marketing agency Muzaffarnagar, hospital marketing services Muzaffarnagar, hospital SEO company Muzaffarnagar, doctor digital marketing Muzaffarnagar, clinic marketing agency Muzaffarnagar, healthcare website design Muzaffarnagar, hospital Google Ads services Muzaffarnagar, patient generation marketing Muzaffarnagar, medical marketing agency Muzaffarnagar, affordable hospital digital marketing Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-for-hospitals-in-muzaffarnagar",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for hospitals in Muzaffarnagar including SEO, Google Ads, social media & website design to boost patient inquiries. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-for-hospitals-in-muzaffarnagar",
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
    title: "Digital Marketing for Hospitals in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for hospitals in Muzaffarnagar including SEO, Google Ads, social media & website design to boost patient inquiries. Get a free quote today.",
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