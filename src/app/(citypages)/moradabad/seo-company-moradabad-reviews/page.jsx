import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "SEO Company in Moradabad Reviews | Zentrix Infotech",
  description:
    "Learn how to read SEO company reviews in Moradabad before you hire. See what real clients say about Zentrix Infotech and book a free SEO consultation.",
  keywords:
    "SEO company Moradabad reviews, SEO company in Moradabad, best SEO company Moradabad, SEO agency Moradabad reviews, SEO services Moradabad, local SEO Moradabad, Moradabad SEO company ratings, top SEO company in Moradabad, affordable SEO company Moradabad, digital marketing company Moradabad, Zentrix Infotech SEO reviews, SEO company near me Moradabad, trusted SEO agency Moradabad, SEO experts Moradabad, SEO packages Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-company-moradabad-reviews",
  },


  openGraph: {
    title: "SEO Company in Moradabad Reviews | Zentrix Infotech",
    description:
      "Learn how to read SEO company reviews in Moradabad before you hire. See what real clients say about Zentrix Infotech and book a free SEO consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-company-moradabad-reviews",
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
    title: "SEO Company in Moradabad Reviews | Zentrix Infotech",
    description:
      "Learn how to read SEO company reviews in Moradabad before you hire. See what real clients say about Zentrix Infotech and book a free SEO consultation.",
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