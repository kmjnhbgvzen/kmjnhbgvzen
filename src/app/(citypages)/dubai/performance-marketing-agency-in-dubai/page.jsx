import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Performance Marketing Agency in Dubai | ROI-Driven Growth Experts",
  description:
    "Partner with a result-focused performance marketing agency in Dubai. Get data-driven Google Ads, Meta Ads & SEO campaigns built to grow leads, sales & ROI. Free audit.",
  keywords:
    "performance marketing Dubai, ROI driven marketing agency Dubai, digital marketing agency Dubai, performance based marketing UAE, growth marketing agency Dubai, paid marketing agency Dubai, best performance marketing company Dubai, data driven marketing agency Dubai, lead generation agency Dubai, performance marketing services UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/performance-marketing-agency-dubai",
  },

  openGraph: {
    title: "Performance Marketing Agency in Dubai | ROI-Driven Growth Experts",
    description:
      "Partner with a result-focused performance marketing agency in Dubai. Get data-driven Google Ads, Meta Ads & SEO campaigns built to grow leads, sales & ROI. Free audit.",
    url: "https://www.zentrixinfotech.com/dubai/performance-marketing-agency-dubai",
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
    title: "Performance Marketing Agency in Dubai | ROI-Driven Growth Experts",
    description:
      "Partner with a result-focused performance marketing agency in Dubai. Get data-driven Google Ads, Meta Ads & SEO campaigns built to grow leads, sales & ROI. Free audit.",
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