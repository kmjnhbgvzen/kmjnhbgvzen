import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Ecommerce Development Services in Moradabad | Zentrix Infotech",
  description:
    "Complete ecommerce development services in Moradabad by Zentrix Infotech: store design, development, payments, migration, apps, SEO and ongoing support.",
  keywords:
    "ecommerce development services in Moradabad, ecommerce development Moradabad, ecommerce website development services, custom ecommerce development, ecommerce store setup Moradabad, ecommerce migration services, ecommerce maintenance and support, ecommerce app development, B2B ecommerce development, multi-vendor marketplace development, Shopify development services, WooCommerce development services, ecommerce integration services, ecommerce SEO services Moradabad, end-to-end ecommerce solutions",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-development-services-in-moradabad",
  },

  openGraph: {
    title:
      "Ecommerce Development Services in Moradabad | Zentrix Infotech",
    description:
      "Complete ecommerce development services in Moradabad by Zentrix Infotech: store design, development, payments, migration, apps, SEO and ongoing support.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-development-services-in-moradabad",
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
      "Ecommerce Development Services in Moradabad | Zentrix Infotech",
    description:
      "Complete ecommerce development services in Moradabad by Zentrix Infotech: store design, development, payments, migration, apps, SEO and ongoing support.",
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