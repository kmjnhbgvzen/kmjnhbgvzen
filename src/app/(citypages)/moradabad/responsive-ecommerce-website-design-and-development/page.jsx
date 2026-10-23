import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Responsive Ecommerce Website Design and Development | Zentrix",
  description:
    "Zentrix Infotech designs and develops responsive ecommerce websites that look sharp and sell on every screen, with fast loading, secure checkout and SEO built in.",
  keywords:
    "responsive ecommerce website design and development, responsive ecommerce website design, responsive ecommerce development company, mobile-first ecommerce design, mobile-friendly online store, responsive online store development, ecommerce website design for all devices, responsive ecommerce UI UX design, responsive checkout design, ecommerce website speed optimization, Core Web Vitals ecommerce, progressive web app ecommerce, responsive Shopify development, responsive WooCommerce development, responsive Next.js ecommerce, ecommerce website redesign responsive, ecommerce website development company, ecommerce website development Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/responsive-ecommerce-website-design-and-development",
  },

  openGraph: {
    title: "Responsive Ecommerce Website Design and Development | Zentrix",
    description:
      "Zentrix Infotech designs and develops responsive ecommerce websites that look sharp and sell on every screen, with fast loading, secure checkout and SEO built in.",
    url: "https://www.zentrixinfotech.com/moradabad/responsive-ecommerce-website-design-and-development",
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
    title: "Responsive Ecommerce Website Design and Development | Zentrix",
    description:
      "Zentrix Infotech designs and develops responsive ecommerce websites that look sharp and sell on every screen, with fast loading, secure checkout and SEO built in.",
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