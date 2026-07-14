import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Instagram Marketing Agency in Saharanpur | Grow & Convert",
  description:
    "Top Instagram marketing agency in Saharanpur. Reels, ads & influencer campaigns that build followers into real customers. Free consultation today!",
  keywords:
    "Instagram marketing agency in Saharanpur, Instagram marketing services Saharanpur, Instagram ads agency Saharanpur, social media marketing company Saharanpur, Instagram Reels marketing agency, Instagram page management Saharanpur, best Instagram marketing agency UP, Instagram marketing for small business Saharanpur, Instagram growth agency near me, Instagram influencer marketing Saharanpur, Instagram marketing for ecommerce Saharanpur, social media marketing for furniture business Saharanpur, Instagram marketing for restaurants Saharanpur, affordable Instagram marketing services Saharanpur, Instagram content creation agency Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/instagram-marketing-agency-saharanpur",
  },
  openGraph: {
    title: "Instagram Marketing Agency in Saharanpur | Grow & Convert",
    description:
      "Top Instagram marketing agency in Saharanpur. Reels, ads & influencer campaigns that build followers into real customers. Free consultation today!",
    url: "https://www.zentrixinfotech.com/saharanpur/instagram-marketing-agency-saharanpur",
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
    title: "Instagram Marketing Agency in Saharanpur | Grow & Convert",
    description:
      "Top Instagram marketing agency in Saharanpur. Reels, ads & influencer campaigns that build followers into real customers. Free consultation today!",
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