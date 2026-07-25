import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Handicrafts in Varanasi | More Craft Sales",
  description:
    "Grow your Varanasi handicraft business with expert digital marketing — SEO, Google Maps, social media & ads that bring more online and export buyers.",
  keywords:
    "digital marketing for handicrafts in varanasi, handicraft marketing agency varanasi, handicraft business SEO varanasi, wooden toys marketing varanasi, handicraft ecommerce varanasi, google my business for handicraft shops, handicraft export marketing, increase handicraft sales varanasi, best digital marketing company for handicrafts, local SEO for handicraft business, handicraft social media marketing, artisan brand marketing varanasi, handicraft online store marketing, handicraft business reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-handicrafts-in-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Handicrafts in Varanasi | More Craft Sales",
    description:
      "Grow your Varanasi handicraft business with expert digital marketing — SEO, Google Maps, social media & ads that bring more online and export buyers.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-handicrafts-in-varanasi",
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
    title: "Digital Marketing for Handicrafts in Varanasi | More Craft Sales",
    description:
      "Grow your Varanasi handicraft business with expert digital marketing — SEO, Google Maps, social media & ads that bring more online and export buyers.",
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