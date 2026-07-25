import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Ghaziabad | Zentrix Infotech",
  description:
    "Result-driven digital marketing for real estate in Ghaziabad to generate quality leads, boost property visibility, and drive site visits. Get a free consultation.",
  keywords:
    "digital marketing for real estate in Ghaziabad, real estate marketing agency Ghaziabad, real estate SEO services Ghaziabad, property marketing company Ghaziabad, real estate lead generation Ghaziabad, real estate social media marketing Ghaziabad, best digital marketing company for real estate Ghaziabad, property website design Ghaziabad, real estate marketing services near me, real estate branding agency Ghaziabad, builder marketing services Ghaziabad, real estate PPC Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-real-estate-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Real Estate in Ghaziabad | Zentrix Infotech",
    description:
      "Result-driven digital marketing for real estate in Ghaziabad to generate quality leads, boost property visibility, and drive site visits. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-real-estate-in-ghaziabad",
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
    title: "Digital Marketing for Real Estate in Ghaziabad | Zentrix Infotech",
    description:
      "Result-driven digital marketing for real estate in Ghaziabad to generate quality leads, boost property visibility, and drive site visits. Get a free consultation.",
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