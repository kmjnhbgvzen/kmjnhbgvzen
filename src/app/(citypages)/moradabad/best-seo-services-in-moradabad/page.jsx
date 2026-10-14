import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best SEO Services in Moradabad | Zentrix Infotech",
  description:
    "Looking for the best SEO services in Moradabad? See what a complete SEO service includes, how to compare options and how Zentrix Infotech helps you rank. Get a free consultation.",
  keywords:
    "best SEO services in Moradabad, best SEO services Moradabad, top SEO services Moradabad, SEO services Moradabad, professional SEO services Moradabad, affordable SEO services Moradabad, local SEO services Moradabad, SEO company Moradabad, SEO agency Moradabad, on-page SEO Moradabad, technical SEO Moradabad, Google Business Profile optimization Moradabad, SEO packages Moradabad, SEO for small business Moradabad, Zentrix Infotech SEO services",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-seo-services-in-moradabad",
  },


  openGraph: {
    title: "Best SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best SEO services in Moradabad? See what a complete SEO service includes, how to compare options and how Zentrix Infotech helps you rank. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/best-seo-services-in-moradabad",
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
    title: "Best SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Looking for the best SEO services in Moradabad? See what a complete SEO service includes, how to compare options and how Zentrix Infotech helps you rank. Get a free consultation.",
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