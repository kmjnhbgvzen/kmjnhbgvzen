import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Bareilly | Zentrix Infotech",
  description:
    "Fill more tables with expert digital marketing for restaurants in Bareilly by Zentrix Infotech. SEO, social media & ads that bring hungry customers to you.",
  keywords:
    "digital marketing for restaurants in Bareilly, restaurant marketing agency Bareilly, restaurant SEO services Bareilly, food business marketing company, restaurant social media marketing Bareilly, cafe marketing agency Bareilly, best digital marketing agency for restaurants, restaurant Google Maps optimization, restaurant ads agency Bareilly, food delivery marketing services, affordable restaurant marketing company, restaurant digital marketing agency near me",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-restaurants-bareilly",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Bareilly | Zentrix Infotech",
    description:
      "Fill more tables with expert digital marketing for restaurants in Bareilly by Zentrix Infotech. SEO, social media & ads that bring hungry customers to you.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-restaurants-in-bareilly",
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
    title: "Digital Marketing for Restaurants in Bareilly | Zentrix Infotech",
    description:
      "Fill more tables with expert digital marketing for restaurants in Bareilly by Zentrix Infotech. SEO, social media & ads that bring hungry customers to you.",
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