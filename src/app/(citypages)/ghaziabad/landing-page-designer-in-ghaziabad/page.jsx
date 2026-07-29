import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Landing Page Designer in Ghaziabad | High-Converting Page Design",
  description:
    "Hire an expert landing page designer in Ghaziabad to create fast, conversion-focused pages for your ads, launches, and campaigns. Get a free design consultation.",
  keywords:
    "landing page designer in Ghaziabad, landing page design company Ghaziabad, high converting landing page design, landing page development agency, PPC landing page design, custom landing page designer, conversion focused landing pages, affordable landing page design Ghaziabad, product launch landing page, lead generation landing page design",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/landing-page-designer-in-ghaziabad",
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