import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Software Company in Ghaziabad 2026 | Custom Software Development Experts",
  description:
    "Looking for the best software company in Ghaziabad? Get custom software, web, mobile app & digital marketing solutions from experienced developers. Free consultation.",
  keywords:
    "best software company in Ghaziabad, software development company Ghaziabad, custom software development Ghaziabad, IT company in Ghaziabad, web development company Ghaziabad, mobile app development company Ghaziabad, software company near me, top software companies Ghaziabad, software development services Ghaziabad, IT solutions Ghaziabad, affordable software company Ghaziabad, enterprise software development Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/best-software-company-in-ghaziabad",
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