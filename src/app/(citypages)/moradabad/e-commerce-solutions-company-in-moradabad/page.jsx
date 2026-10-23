import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Solutions Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is an ecommerce solutions company in Moradabad offering store development, design, payments, integrations and marketing to grow online sales.",
  keywords:
    "ecommerce solutions company in Moradabad, ecommerce solutions Moradabad, ecommerce solution provider in Moradabad, end to end ecommerce solutions, ecommerce website development Moradabad, ecommerce store setup services, ecommerce platform development, custom ecommerce solutions India, B2B ecommerce solutions, multi vendor marketplace development, ecommerce payment gateway integration, ecommerce ERP integration, ecommerce inventory management solutions, ecommerce mobile app development, ecommerce SEO services Moradabad, ecommerce solutions for handicraft exporters, Shopify and WooCommerce solutions, best ecommerce company in Moradabad, ecommerce solutions cost in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/e-commerce-solutions-company-in-moradabad",
  },

  openGraph: {
    title: "Ecommerce Solutions Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an ecommerce solutions company in Moradabad offering store development, design, payments, integrations and marketing to grow online sales.",
    url: "https://www.zentrixinfotech.com/moradabad/e-commerce-solutions-company-in-moradabad",
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
    title: "Ecommerce Solutions Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an ecommerce solutions company in Moradabad offering store development, design, payments, integrations and marketing to grow online sales.",
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