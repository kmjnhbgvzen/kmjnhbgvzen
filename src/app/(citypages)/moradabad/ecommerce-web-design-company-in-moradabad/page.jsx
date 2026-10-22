import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Web Design Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is an ecommerce web design company in Moradabad creating mobile-first, conversion-focused online store designs that build trust and boost sales.",
  keywords:
    "ecommerce web design company in Moradabad, ecommerce web design Moradabad, online store design Moradabad, ecommerce UI UX design company, ecommerce website designers Moradabad, custom ecommerce web design, mobile-friendly ecommerce design, product page design for ecommerce, checkout page design, Shopify theme design Moradabad, WooCommerce design Moradabad, B2B ecommerce web design, ecommerce website redesign, affordable ecommerce web design, conversion-focused ecommerce design",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-web-design-company-in-moradabad",
  },

  openGraph: {
    title:
      "Ecommerce Web Design Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an ecommerce web design company in Moradabad creating mobile-first, conversion-focused online store designs that build trust and boost sales.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-web-design-company-in-moradabad",
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
      "Ecommerce Web Design Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an ecommerce web design company in Moradabad creating mobile-first, conversion-focused online store designs that build trust and boost sales.",
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