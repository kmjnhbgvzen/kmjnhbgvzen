import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Design Hapur Near Me | Local Web Design Experts",
  description:
    "Looking for website design near you in Hapur? Get professional, affordable, and mobile-friendly website design services from experienced local designers.",
  keywords:
    "website design Hapur near me, web designer near me Hapur, website design company near Hapur, local website designer, affordable website design Hapur, business website design near me, website design services Hapur, local web design agency, website designer for small business, near me web design company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/website-design-hapur-near-me",
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