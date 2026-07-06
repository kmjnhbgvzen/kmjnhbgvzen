import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Varanasi | Build Authority & Attract Customers",
  description:
    "Partner with a content marketing agency in Varanasi to create blogs, videos, and social content that builds authority, drives traffic, and grows your business.",
  keywords:
    "content marketing agency in Varanasi, content writing services Varanasi, blog writing agency Varanasi, video content marketing Varanasi, brand storytelling Varanasi, SEO content agency Varanasi, social media content Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/content-marketing-agency-in-varanasi",
  },
  openGraph: {
    title: "Content Marketing Agency in Varanasi | Build Authority & Attract Customers",
    description:
      "Partner with a content marketing agency in Varanasi to create blogs, videos, and social content that builds authority, drives traffic, and grows your business.",
    url: "https://www.zentrixinfotech.com/varanasi/content-marketing-agency-in-varanasi",
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
    title: "Content Marketing Agency in Varanasi | Build Authority & Attract Customers",
    description:
      "Partner with a content marketing agency in Varanasi to create blogs, videos, and social content that builds authority, drives traffic, and grows your business.",
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