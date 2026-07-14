import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Saharanpur | Real Reach",
  description:
    "Top influencer marketing agency in Saharanpur. Local creators, authentic content & real reach for your brand. Free consultation — get in touch today!",
  keywords:
    "influencer marketing agency in Saharanpur, influencer marketing company in Saharanpur, local influencer collaboration agency, micro influencer marketing Saharanpur, influencer marketing services UP, Instagram influencer agency Saharanpur, YouTube influencer marketing Saharanpur, influencer marketing for small business Saharanpur, brand collaboration agency Saharanpur, influencer marketing for restaurants Saharanpur, influencer marketing for ecommerce Saharanpur, best influencer marketing agency near me, influencer marketing for furniture brand Saharanpur, affordable influencer marketing services Saharanpur, local creator marketing agency Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/influencer-marketing-agency-saharanpur",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Saharanpur | Real Reach",
    description:
      "Top influencer marketing agency in Saharanpur. Local creators, authentic content & real reach for your brand. Free consultation — get in touch today!",
    url: "https://www.zentrixinfotech.com/saharanpur/influencer-marketing-agency-saharanpur",
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
    title: "Influencer Marketing Agency in Saharanpur | Real Reach",
    description:
      "Top influencer marketing agency in Saharanpur. Local creators, authentic content & real reach for your brand. Free consultation — get in touch today!",
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