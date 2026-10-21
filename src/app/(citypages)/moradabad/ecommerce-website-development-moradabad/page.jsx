import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Ecommerce Website Development Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech builds fast, secure, SEO-ready ecommerce websites in Moradabad for exporters, brands and retailers. Get a free consultation today.",
  keywords:
    "ecommerce website development moradabad, ecommerce website development company in moradabad, ecommerce web development moradabad, online store development moradabad, ecommerce website design moradabad, custom ecommerce website moradabad, ecommerce developers in moradabad, best ecommerce website company moradabad, affordable ecommerce website development, ecommerce website for exporters, b2b ecommerce website moradabad, handicraft ecommerce website development, ecommerce website cost moradabad, shopping cart website development, mobile friendly ecommerce website, payment gateway integration, seo friendly ecommerce website, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-website-development-moradabad",
  },


  openGraph: {
    title: "Ecommerce Website Development Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech builds fast, secure, SEO-ready ecommerce websites in Moradabad for exporters, brands and retailers. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-website-development-moradabad",
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
    title: "Ecommerce Website Development Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech builds fast, secure, SEO-ready ecommerce websites in Moradabad for exporters, brands and retailers. Get a free consultation today.",
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