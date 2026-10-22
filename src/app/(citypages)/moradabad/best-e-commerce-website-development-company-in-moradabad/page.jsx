import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Best E-commerce Website Development Company in Moradabad",
  description:
    "Looking for the best e-commerce website development company in Moradabad? See how to choose the right partner and why Zentrix Infotech is a trusted pick.",
  keywords:
    "best e-commerce website development company in Moradabad, best ecommerce developers Moradabad, top ecommerce website company Moradabad, ecommerce website development Moradabad, how to choose ecommerce development company, ecommerce web design company Moradabad, trusted ecommerce developer Moradabad, custom online store development Moradabad, ecommerce website developer near me, Shopify WooCommerce developer Moradabad, B2B ecommerce website Moradabad, affordable ecommerce website Moradabad, ecommerce website development reviews, Zentrix Infotech ecommerce, ecommerce company Moradabad Uttar Pradesh",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-e-commerce-website-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "Best E-commerce Website Development Company in Moradabad",
    description:
      "Looking for the best e-commerce website development company in Moradabad? See how to choose the right partner and why Zentrix Infotech is a trusted pick.",
    url: "https://www.zentrixinfotech.com/moradabad/best-e-commerce-website-development-company-in-moradabad",
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
      "Best E-commerce Website Development Company in Moradabad",
    description:
      "Looking for the best e-commerce website development company in Moradabad? See how to choose the right partner and why Zentrix Infotech is a trusted pick.",
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