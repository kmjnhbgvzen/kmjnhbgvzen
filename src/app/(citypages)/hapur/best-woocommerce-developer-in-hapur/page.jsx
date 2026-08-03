import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best WooCommerce Developer in Hapur | Expert Online Store Builders",
  description:
    "Hire the best WooCommerce developer in Hapur to build a fast, secure, and scalable online store. Custom features, payment integration, and ongoing support.",
  keywords:
    "best WooCommerce developer in Hapur, WooCommerce development company Hapur, WooCommerce expert near me, hire WooCommerce developer, WooCommerce website development, WooCommerce store setup Hapur, custom WooCommerce development, WooCommerce plugin developer, affordable WooCommerce developer, WooCommerce ecommerce expert",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/best-woocommerce-developer-in-hapur",
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