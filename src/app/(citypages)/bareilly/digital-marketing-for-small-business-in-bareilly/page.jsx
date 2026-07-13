import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Small Business in Bareilly | Zentrix Infotech",
  description:
    "Grow your small business in Bareilly with affordable digital marketing services by Zentrix Infotech. SEO, social media, ads & websites that bring real leads.",
  keywords:
    "digital marketing for small business in Bareilly, digital marketing company Bareilly, small business marketing Bareilly, affordable digital marketing Bareilly, digital marketing agency near me, SEO services for small business Bareilly, social media marketing Bareilly, best digital marketing company Bareilly, online marketing services Bareilly, local business marketing Bareilly, digital marketing services for startups, small business SEO Bareilly",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-small-business-bareilly",
  },

  openGraph: {
    title: "Digital Marketing for Small Business in Bareilly | Zentrix Infotech",
    description:
      "Grow your small business in Bareilly with affordable digital marketing services by Zentrix Infotech. SEO, social media, ads & websites that bring real leads.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-small-business-bareilly",
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
    title: "Digital Marketing for Small Business in Bareilly | Zentrix Infotech",
    description:
      "Grow your small business in Bareilly with affordable digital marketing services by Zentrix Infotech. SEO, social media, ads & websites that bring real leads.",
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