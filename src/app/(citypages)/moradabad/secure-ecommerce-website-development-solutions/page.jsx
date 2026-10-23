import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Secure Ecommerce Website Development Solutions | Zentrix",
  description:
    "Zentrix Infotech builds secure ecommerce websites with encrypted payments, protected customer data, safe code and regular monitoring to keep your store trusted.",
  keywords:
    "secure ecommerce website development solutions, secure ecommerce website development, ecommerce website security, secure online store development, secure payment gateway integration, ecommerce data protection, SSL for ecommerce website, ecommerce fraud prevention, secure checkout development, ecommerce website security best practices, ecommerce security services, safe ecommerce development company, secure Shopify development, secure WooCommerce development, secure custom ecommerce development, ecommerce website development company, ecommerce website development Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/secure-ecommerce-website-development-solutions",
  },

  openGraph: {
    title: "Secure Ecommerce Website Development Solutions | Zentrix",
    description:
      "Zentrix Infotech builds secure ecommerce websites with encrypted payments, protected customer data, safe code and regular monitoring to keep your store trusted.",
    url: "https://www.zentrixinfotech.com/moradabad/secure-ecommerce-website-development-solutions",
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
    title: "Secure Ecommerce Website Development Solutions | Zentrix",
    description:
      "Zentrix Infotech builds secure ecommerce websites with encrypted payments, protected customer data, safe code and regular monitoring to keep your store trusted.",
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