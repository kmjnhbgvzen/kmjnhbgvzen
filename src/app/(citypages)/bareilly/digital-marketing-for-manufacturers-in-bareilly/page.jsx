import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Manufacturers in Saharanpur | Zentrix Infotech",
  description:
    "Grow your manufacturing business in Saharanpur with expert digital marketing, SEO, and lead generation strategies from Zentrix Infotech. Get more B2B and export inquiries today.",
  keywords:
    "digital marketing for manufacturers in Saharanpur, manufacturing SEO Saharanpur, B2B digital marketing UP, manufacturer website design Saharanpur, export lead generation India, industrial digital marketing agency, Saharanpur manufacturing business growth, wood carving manufacturer marketing, furniture manufacturer SEO, engineering goods manufacturer digital marketing, Zentrix Infotech Saharanpur, manufacturing lead generation agency, Google Ads for manufacturers, manufacturer online marketing UP, B2B SEO services Saharanpur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-manufacturers-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Manufacturers in Saharanpur | Zentrix Infotech",
    description:
      "Grow your manufacturing business in Saharanpur with expert digital marketing, SEO, and lead generation strategies from Zentrix Infotech. Get more B2B and export inquiries today.",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-manufacturers-saharanpur",
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
    title: "Digital Marketing for Manufacturers in Saharanpur | Zentrix Infotech",
    description:
      "Grow your manufacturing business in Saharanpur with expert digital marketing, SEO, and lead generation strategies from Zentrix Infotech. Get more B2B and export inquiries today.",
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