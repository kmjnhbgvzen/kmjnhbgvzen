import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Small Business in Hapur | Affordable Growth",
  description:
    "Looking for digital marketing for small business in Hapur? Zentrix Infotech offers affordable SEO, ads & social media services to grow your business.",
  keywords:
    "digital marketing for small business in Hapur, small business marketing agency Hapur, affordable digital marketing services, small business SEO company, small business social media marketing, digital marketing agency near me, small business website development Hapur, local business marketing services, small business Google ads agency, digital marketing company UP, best digital marketing agency Hapur, small business lead generation services, budget digital marketing agency, digital marketing agency Delhi NCR, small shop marketing services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-small-business-in-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Small Business in Hapur | Affordable Growth",
    description:
      "Looking for digital marketing for small business in Hapur? Zentrix Infotech offers affordable SEO, ads & social media services to grow your business.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-small-business-in-hapur",
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
    title: "Digital Marketing for Small Business in Hapur | Affordable Growth",
    description:
      "Looking for digital marketing for small business in Hapur? Zentrix Infotech offers affordable SEO, ads & social media services to grow your business.",
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