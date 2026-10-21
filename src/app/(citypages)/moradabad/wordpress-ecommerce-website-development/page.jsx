import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";




export const metadata = {
  title: "WordPress Ecommerce Website Development | Zentrix Infotech",
  description:
    "Zentrix Infotech provides WordPress ecommerce website development with WooCommerce for fast, secure, SEO friendly online stores. Book a free consultation today.",
  keywords:
    "wordpress ecommerce website development, woocommerce website development, wordpress ecommerce development company, woocommerce development services india, custom wordpress online store, wordpress online store development, woocommerce store setup, woocommerce theme customization, woocommerce plugin development, wordpress ecommerce website design, woocommerce payment gateway integration india, woocommerce migration services, wordpress vs shopify for ecommerce, affordable wordpress ecommerce website, seo friendly woocommerce store, Zentrix Infotech",




  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/wordpress-ecommerce-website-development",
  },




  openGraph: {
    title: "WordPress Ecommerce Website Development | Zentrix Infotech",
    description:
      "Zentrix Infotech provides WordPress ecommerce website development with WooCommerce for fast, secure, SEO friendly online stores. Book a free consultation today.",
    url: "https://www.zentrixinfotech.com/moradabad/wordpress-ecommerce-website-development",
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
    title: "WordPress Ecommerce Website Development | Zentrix Infotech",
    description:
      "Zentrix Infotech provides WordPress ecommerce website development with WooCommerce for fast, secure, SEO friendly online stores. Book a free consultation today.",
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