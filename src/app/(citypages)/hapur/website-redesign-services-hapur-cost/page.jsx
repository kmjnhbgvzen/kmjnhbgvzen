import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Redesign Services Hapur Cost | 2026 Pricing Guide",
  description:
    "Find out how much website redesign services cost in Hapur. Understand pricing factors, packages, and what's included before hiring a redesign company.",
  keywords:
    "website redesign services Hapur cost, website redesign cost, web redesign pricing Hapur, cost to redesign website, affordable website redesign Hapur, website revamp cost, website redesign package price, budget website redesign, ecommerce website redesign cost, small business website redesign cost",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/website-redesign-services-hapur-cost",
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