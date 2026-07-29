import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Web Development Company in Ghaziabad | Affordable & Professional Website Design",
  description:
    "Looking for a trusted web development company in Ghaziabad? Get custom, SEO-friendly, mobile-responsive websites at affordable prices. Free consultation, 250+ projects delivered, 4.7/5 client rating.",
  keywords:
    "web development company in Ghaziabad, website design company Ghaziabad, best web development services Ghaziabad, affordable website development Ghaziabad, custom website development company, e-commerce website development Ghaziabad, SEO friendly website design Ghaziabad, web design agency Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/web-development-company-ghaziabad",
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