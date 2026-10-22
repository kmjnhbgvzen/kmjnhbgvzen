import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "E-commerce Website Development Company in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a trusted e-commerce website development company in Moradabad. Get fast, secure, mobile-friendly online stores that bring real orders.",
  keywords:
    "e-commerce website development company in Moradabad, ecommerce website development Moradabad, online store development Moradabad, ecommerce web design company Moradabad, best ecommerce developers in Moradabad, ecommerce website developer near me, custom ecommerce website Moradabad, Shopify development Moradabad, WooCommerce development Moradabad, B2B ecommerce website Moradabad, handicraft export ecommerce website, brass export website development, affordable ecommerce website Moradabad, ecommerce website cost in Moradabad, multi-vendor marketplace development Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/e-commerce-website-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "E-commerce Website Development Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a trusted e-commerce website development company in Moradabad. Get fast, secure, mobile-friendly online stores that bring real orders.",
    url: "https://www.zentrixinfotech.com/moradabad/e-commerce-website-development-company-in-moradabad",
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
    title:
      "E-commerce Website Development Company in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a trusted e-commerce website development company in Moradabad. Get fast, secure, mobile-friendly online stores that bring real orders.",
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