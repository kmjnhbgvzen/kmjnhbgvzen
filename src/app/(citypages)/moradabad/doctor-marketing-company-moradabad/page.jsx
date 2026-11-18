import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a doctor marketing company in Moradabad offering websites, SEO, Google Ads, social media and reviews. See what you get every month. Call now.",
  keywords:
    "doctor marketing company Moradabad, doctor marketing services Moradabad, digital marketing for doctors Moradabad, clinic marketing company Moradabad, doctor website and SEO Moradabad, doctor branding Moradabad, patient enquiries for doctors, medical marketing Moradabad, healthcare marketing company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-company-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a doctor marketing company in Moradabad offering websites, SEO, Google Ads, social media and reviews. See what you get every month. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-company-moradabad",
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
    title: "Doctor Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a doctor marketing company in Moradabad offering websites, SEO, Google Ads, social media and reviews. See what you get every month. Call now.",
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