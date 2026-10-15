import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Moradabad Website Development Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad website development company building fast, secure, SEO-ready websites for local businesses and exporters. Call +91 72488 00839.",
  keywords:
    "Moradabad website development company, website development company Moradabad, Moradabad web development company, Moradabad website designing company, Moradabad web design company, website company in Moradabad, local website developers Moradabad, ecommerce website Moradabad, website for small business Moradabad, Moradabad business website, website for exporters Moradabad, web development services Moradabad UP, responsive website Moradabad, Zentrix Infotech Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company",
  },


  openGraph: {
    title: "Moradabad Website Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad website development company building fast, secure, SEO-ready websites for local businesses and exporters. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company",
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
    title: "Moradabad Website Development Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad website development company building fast, secure, SEO-ready websites for local businesses and exporters. Call +91 72488 00839.",
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