import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Moradabad SEO Experts | Zentrix Infotech",
  description:
    "Hire Moradabad SEO experts who know the local market. Learn what real SEO experts do, how to verify skills and how Zentrix Infotech grows your visibility.",
  keywords:
    "Moradabad SEO experts, SEO experts in Moradabad, SEO specialist Moradabad, SEO consultant Moradabad, hire SEO expert Moradabad, local SEO expert Moradabad, best SEO expert in Moradabad, SEO professionals Moradabad, SEO services in Moradabad, SEO company Moradabad, technical SEO Moradabad, Google Business Profile expert Moradabad, Zentrix Infotech SEO",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/moradabad/moradabad-seo-experts",
  },

  openGraph: {
    title: "Moradabad SEO Experts | Zentrix Infotech",
    description:
      "Hire Moradabad SEO experts who know the local market. Learn what real SEO experts do, how to verify skills and how Zentrix Infotech grows your visibility.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-seo-experts",
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
    title: "Moradabad SEO Experts | Zentrix Infotech",
    description:
      "Hire Moradabad SEO experts who know the local market. Learn what real SEO experts do, how to verify skills and how Zentrix Infotech grows your visibility.",
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