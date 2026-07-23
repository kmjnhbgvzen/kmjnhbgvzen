import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Jewellery Business in Varanasi | More Buyers",
  description:
    "Grow your Varanasi jewellery business with expert digital marketing — SEO, Google Maps, social media & ads that bring more genuine online and store buyers.",
  keywords:
    "digital marketing for jewellery business in varanasi, jewellery marketing agency varanasi, jewellery shop SEO varanasi, jewellery ecommerce marketing varanasi, gold jewellery digital marketing, google my business for jewellery shops, jewellery ads varanasi, increase jewellery sales varanasi, best digital marketing company for jewellery, local SEO for jewellery shops, jewellery social media marketing, bridal jewellery marketing varanasi, jewellery brand reputation management, jewellery store lead generation",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-jewellery-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Jewellery Business in Varanasi | More Buyers",
    description:
      "Grow your Varanasi jewellery business with expert digital marketing — SEO, Google Maps, social media & ads that bring more genuine online and store buyers.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-jewellery-varanasi",
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
    title: "Digital Marketing for Jewellery Business in Varanasi | More Buyers",
    description:
      "Grow your Varanasi jewellery business with expert digital marketing — SEO, Google Maps, social media & ads that bring more genuine online and store buyers.",
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