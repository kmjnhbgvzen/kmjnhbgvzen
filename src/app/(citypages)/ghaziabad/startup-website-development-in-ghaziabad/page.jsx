import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Startup Website Development in Ghaziabad | Affordable & Scalable Websites",
  description:
    "Launch your startup with a fast, affordable, and scalable website built for growth. Trusted startup website development services in Ghaziabad. Get a free quote today.",
  keywords:
    "startup website development in Ghaziabad, website development for startups, startup web design company Ghaziabad, affordable website for startups, MVP website development, startup web development agency, scalable website development, small business website Ghaziabad, new business website development, startup IT company Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/startup-website-development-in-ghaziabad",
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