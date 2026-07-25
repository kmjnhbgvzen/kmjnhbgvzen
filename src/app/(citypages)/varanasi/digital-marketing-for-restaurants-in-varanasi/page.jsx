import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Restaurants in Varanasi | More Diners & Orders",
  description:
    "Grow your Varanasi restaurant with expert digital marketing — SEO, Google Maps, social media & ads that bring more walk-ins, orders, and reviews.",
  keywords:
    "digital marketing for restaurants in varanasi, restaurant marketing agency varanasi, restaurant SEO varanasi, restaurant social media marketing varanasi, restaurant website design varanasi, google my business for restaurants, food ordering app marketing varanasi, restaurant ads varanasi, increase restaurant footfall varanasi, best digital marketing company for restaurants, local SEO for restaurants, restaurant branding varanasi, ghat view restaurant marketing, restaurant online reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-restaurants-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Restaurants in Varanasi | More Diners & Orders",
    description:
      "Grow your Varanasi restaurant with expert digital marketing — SEO, Google Maps, social media & ads that bring more walk-ins, orders, and reviews.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-restaurants-in-varanasi",
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
    title: "Digital Marketing for Restaurants in Varanasi | More Diners & Orders",
    description:
      "Grow your Varanasi restaurant with expert digital marketing — SEO, Google Maps, social media & ads that bring more walk-ins, orders, and reviews.",
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