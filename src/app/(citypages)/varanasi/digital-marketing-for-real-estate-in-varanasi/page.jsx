import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Varanasi | More Property Leads",
  description:
    "Grow your Varanasi real estate business with expert digital marketing — SEO, Google Maps, social media & ads that bring more genuine property buyer leads.",
  keywords:
    "digital marketing for real estate in varanasi, real estate marketing agency varanasi, property SEO varanasi, real estate digital marketing varanasi, real estate website design varanasi, google my business for real estate, property ads varanasi, increase property leads varanasi, best digital marketing company for real estate, local SEO for real estate, real estate social media marketing, builder marketing varanasi, real estate online reputation management, property buyer lead generation",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-real-estate-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Varanasi | More Property Leads",
    description:
      "Grow your Varanasi real estate business with expert digital marketing — SEO, Google Maps, social media & ads that bring more genuine property buyer leads.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-real-estate-varanasi",
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
    title: "Digital Marketing for Real Estate in Varanasi | More Property Leads",
    description:
      "Grow your Varanasi real estate business with expert digital marketing — SEO, Google Maps, social media & ads that bring more genuine property buyer leads.",
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