import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "WordPress Development Services in Ghaziabad | Custom & Affordable WordPress Websites",
  description:
    "Get professional WordPress Development Services in Ghaziabad. Custom themes, plugins, ecommerce & SEO-friendly WordPress websites built for speed, security & growth.",
  keywords:
    "WordPress development services Ghaziabad, WordPress website design Ghaziabad, WordPress developer Ghaziabad, custom WordPress development, WordPress ecommerce development Ghaziabad, WooCommerce development Ghaziabad, WordPress website company near me, affordable WordPress development Ghaziabad, WordPress SEO services, WordPress theme customization Ghaziabad, WordPress plugin development, business website WordPress Ghaziabad, WordPress maintenance services Ghaziabad, best WordPress development company Ghaziabad, responsive WordPress website design",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/wordpress-development-services-ghaziabad",
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