import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Redesign Services in Ghaziabad | Modern, SEO-Friendly Redesign",
  description:
    "Get expert website redesign services in Ghaziabad. Improve speed, design, and SEO with a modern, mobile-friendly website that converts visitors into customers.",
  keywords:
    "website redesign services in Ghaziabad, website redesign company Ghaziabad, website revamp services Ghaziabad, old website redesign, responsive website redesign Ghaziabad, website redesigning agency, SEO friendly website redesign, business website redesign Ghaziabad, e-commerce website redesign, affordable website redesign company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/website-redesign-services-in-ghaziabad",
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