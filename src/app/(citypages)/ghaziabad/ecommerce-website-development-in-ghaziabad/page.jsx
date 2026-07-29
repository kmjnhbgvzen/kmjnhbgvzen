import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce Website Development Ghaziabad | Custom Online Store Solutions",
  description:
    "Get professional ecommerce website development in Ghaziabad. Custom, secure, and mobile-friendly online stores built to boost sales. 250+ projects delivered with a 4.7/5 client rating.",
  keywords:
    "ecommerce website development Ghaziabad, online store development company Ghaziabad, ecommerce web design services, custom ecommerce website development, shopping website development company, affordable ecommerce development Ghaziabad, best ecommerce developers near me, online store builder company Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/ecommerce-website-development-ghaziabad",
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