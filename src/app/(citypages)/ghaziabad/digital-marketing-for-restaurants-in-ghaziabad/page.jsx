import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Ghaziabad | Zentrix Infotech",
  description:
    "Result-driven digital marketing for restaurants in Ghaziabad to boost footfall, online orders, and customer loyalty. Get a free consultation today.",
  keywords:
    "digital marketing for restaurants in Ghaziabad, restaurant marketing agency Ghaziabad, restaurant SEO services Ghaziabad, food business digital marketing Ghaziabad, restaurant social media marketing Ghaziabad, best digital marketing company for restaurants Ghaziabad, cafe marketing services Ghaziabad, restaurant website design Ghaziabad, restaurant marketing services near me, online ordering marketing Ghaziabad, restaurant branding agency Ghaziabad, local restaurant SEO Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-restaurants-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Ghaziabad | Zentrix Infotech",
    description:
      "Result-driven digital marketing for restaurants in Ghaziabad to boost footfall, online orders, and customer loyalty. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-restaurants-ghaziabad",
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
    title: "Digital Marketing for Restaurants in Ghaziabad | Zentrix Infotech",
    description:
      "Result-driven digital marketing for restaurants in Ghaziabad to boost footfall, online orders, and customer loyalty. Get a free consultation today.",
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