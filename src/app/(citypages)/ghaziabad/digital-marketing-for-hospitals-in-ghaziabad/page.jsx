import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Ghaziabad | Healthcare Marketing Agency",
  description:
    "Grow patient inquiries with expert digital marketing for hospitals in Ghaziabad. SEO, Google Ads, social media & reputation management for clinics & hospitals. Free consultation.",
  keywords:
    "digital marketing for hospitals in Ghaziabad, healthcare digital marketing agency Ghaziabad, hospital marketing company Ghaziabad, digital marketing for clinics Ghaziabad, medical SEO services Ghaziabad, patient acquisition marketing, hospital SEO company, healthcare marketing agency near me, doctor and clinic marketing services, medical practice digital marketing, hospital online reputation management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-hospitals-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Ghaziabad | Healthcare Marketing Agency",
    description:
      "Grow patient inquiries with expert digital marketing for hospitals in Ghaziabad. SEO, Google Ads, social media & reputation management for clinics & hospitals. Free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-hospitals-in-ghaziabad",
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
    title: "Digital Marketing for Hospitals in Ghaziabad | Healthcare Marketing Agency",
    description:
      "Grow patient inquiries with expert digital marketing for hospitals in Ghaziabad. SEO, Google Ads, social media & reputation management for clinics & hospitals. Free consultation.",
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