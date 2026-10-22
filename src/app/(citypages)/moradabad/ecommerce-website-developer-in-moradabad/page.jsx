import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Website Developer in Moradabad | Zentrix Infotech",
  description:
    "Hire an expert ecommerce website developer in Moradabad. Zentrix Infotech builds fast, secure, mobile-friendly online stores with payments, shipping and SEO.",
  keywords:
    "ecommerce website developer in Moradabad, ecommerce developer Moradabad, hire ecommerce developer Moradabad, online store developer Moradabad, Shopify developer Moradabad, WooCommerce developer Moradabad, custom ecommerce developer Moradabad, ecommerce website developer near me, freelance vs agency ecommerce developer, dedicated ecommerce developer India, ecommerce website development services Moradabad, full stack ecommerce developer, ecommerce website developer cost Moradabad, mobile-friendly ecommerce developer, ecommerce developer for exporters",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-website-developer-in-moradabad",
  },

  openGraph: {
    title:
      "Ecommerce Website Developer in Moradabad | Zentrix Infotech",
    description:
      "Hire an expert ecommerce website developer in Moradabad. Zentrix Infotech builds fast, secure, mobile-friendly online stores with payments, shipping and SEO.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-website-developer-in-moradabad",
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
      "Ecommerce Website Developer in Moradabad | Zentrix Infotech",
    description:
      "Hire an expert ecommerce website developer in Moradabad. Zentrix Infotech builds fast, secure, mobile-friendly online stores with payments, shipping and SEO.",
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