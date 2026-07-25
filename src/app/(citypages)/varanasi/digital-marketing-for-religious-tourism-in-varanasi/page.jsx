import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Religious Tourism in Varanasi | More Pilgrims",
  description:
    "Grow your Varanasi religious tourism business with expert digital marketing — SEO, Google Maps, social media & ads that bring more pilgrim bookings.",
  keywords:
    "digital marketing for religious tourism in varanasi, pilgrimage tourism marketing agency varanasi, religious tour SEO varanasi, kashi vishwanath tour marketing, ganga aarti booking marketing, pilgrim tourism digital marketing, ashram marketing varanasi, dharamshala marketing varanasi, best digital marketing company for religious tourism, local SEO for pilgrimage business, religious tourism social media marketing, spiritual tour package marketing varanasi, pilgrim booking lead generation, religious tourism reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-religious-tourism-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Religious Tourism in Varanasi | More Pilgrims",
    description:
      "Grow your Varanasi religious tourism business with expert digital marketing — SEO, Google Maps, social media & ads that bring more pilgrim bookings.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-religious-tourism-in-varanasi",
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
    title: "Digital Marketing for Religious Tourism in Varanasi | More Pilgrims",
    description:
      "Grow your Varanasi religious tourism business with expert digital marketing — SEO, Google Maps, social media & ads that bring more pilgrim bookings.",
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