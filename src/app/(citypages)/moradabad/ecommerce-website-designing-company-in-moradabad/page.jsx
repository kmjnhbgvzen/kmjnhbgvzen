import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Website Designing Company Moradabad | Zentrix",
  description:
    "Zentrix Infotech is an ecommerce website designing company in Moradabad creating mobile-first, conversion-focused online store designs that help brands sell more.",
  keywords:
    "ecommerce website designing company in Moradabad, ecommerce website design company Moradabad, ecommerce web designer in Moradabad, online store design Moradabad, ecommerce UI UX design Moradabad, custom ecommerce website design, mobile-friendly ecommerce design, ecommerce website designing services, ecommerce store design company India, product page design, checkout page design, ecommerce website redesign, Shopify website design Moradabad, WooCommerce website design Moradabad, responsive ecommerce website design, ecommerce website design for handicraft exporters, best ecommerce design agency in Moradabad, ecommerce website design cost in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/ecommerce-website-designing-company-in-moradabad",
  },

  openGraph: {
    title: "Ecommerce Website Designing Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an ecommerce website designing company in Moradabad creating mobile-first, conversion-focused online store designs that help brands sell more.",
    url: "https://www.zentrixinfotech.com/moradabad/ecommerce-website-designing-company-in-moradabad",
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
    title: "Ecommerce Website Designing Company Moradabad | Zentrix",
    description:
      "Zentrix Infotech is an ecommerce website designing company in Moradabad creating mobile-first, conversion-focused online store designs that help brands sell more.",
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