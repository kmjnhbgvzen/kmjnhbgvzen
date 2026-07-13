import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Wood Industry in Saharanpur | Grow Now",
  description:
    "Grow your wood carving or furniture business with expert digital marketing for the wood industry in Saharanpur. SEO, leads & B2B buyers. Free quote!",
  keywords:
    "digital marketing for wood industry in Saharanpur, digital marketing for wood carving business Saharanpur, wood furniture marketing company Saharanpur, wooden handicraft digital marketing agency, SEO for wood industry Saharanpur, online marketing for furniture manufacturers Saharanpur, digital marketing for wood exporters Saharanpur, wood carving business promotion online, best digital marketing agency for wood industry UP, social media marketing for furniture business Saharanpur, website design for wood carving business Saharanpur, lead generation for wood furniture business Saharanpur, digital marketing for sawmills and timber traders Saharanpur, wooden handicraft ecommerce marketing Saharanpur, how to promote wood business online Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-wood-industry-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Wood Industry in Saharanpur | Grow Now",
    description:
      "Grow your wood carving or furniture business with expert digital marketing for the wood industry in Saharanpur. SEO, leads & B2B buyers. Free quote!",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-wood-industry-saharanpur",
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
    title: "Digital Marketing for Wood Industry in Saharanpur | Grow Now",
    description:
      "Grow your wood carving or furniture business with expert digital marketing for the wood industry in Saharanpur. SEO, leads & B2B buyers. Free quote!",
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