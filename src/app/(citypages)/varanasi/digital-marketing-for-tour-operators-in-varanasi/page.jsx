import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Tour Operators in Varanasi | More Bookings",
  description:
    "Grow your Varanasi tour business with expert digital marketing — SEO, Google Maps, social media & ads that bring more direct tour and package bookings.",
  keywords:
    "digital marketing for tour operators in varanasi, tour operator marketing agency varanasi, varanasi tour package SEO, travel agency digital marketing varanasi, boat ride booking marketing varanasi, ganga aarti tour marketing, varanasi sightseeing tour ads, tour operator website design, local SEO for travel agents, increase tour bookings varanasi, best digital marketing company for tour operators, tourism marketing varanasi, travel agency social media marketing, google ads for tour operators",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-tour-operators-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Tour Operators in Varanasi | More Bookings",
    description:
      "Grow your Varanasi tour business with expert digital marketing — SEO, Google Maps, social media & ads that bring more direct tour and package bookings.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-tour-operators-varanasi",
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
    title: "Digital Marketing for Tour Operators in Varanasi | More Bookings",
    description:
      "Grow your Varanasi tour business with expert digital marketing — SEO, Google Maps, social media & ads that bring more direct tour and package bookings.",
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