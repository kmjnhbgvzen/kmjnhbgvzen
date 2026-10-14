import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "What Is an SEO Company in Moradabad? | Zentrix Infotech",
  description:
    "What does an SEO company in Moradabad do? Learn how SEO agencies work, what services they offer and how to choose one. Talk to Zentrix Infotech today.",
  keywords:
    "what is SEO company Moradabad, SEO company in Moradabad, what does an SEO company do, SEO agency Moradabad, SEO services Moradabad, local SEO Moradabad, best SEO company Moradabad, how SEO company works, SEO company near me Moradabad, search engine optimization Moradabad, digital marketing company Moradabad, SEO expert Moradabad, SEO for small business Moradabad, Zentrix Infotech SEO, hire SEO company Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/what-is-seo-company-moradabad",
  },


  openGraph: {
    title: "What Is an SEO Company in Moradabad? | Zentrix Infotech",
    description:
      "What does an SEO company in Moradabad do? Learn how SEO agencies work, what services they offer and how to choose one. Talk to Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/what-is-seo-company-moradabad",
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
    title: "What Is an SEO Company in Moradabad? | Zentrix Infotech",
    description:
      "What does an SEO company in Moradabad do? Learn how SEO agencies work, what services they offer and how to choose one. Talk to Zentrix Infotech today.",
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