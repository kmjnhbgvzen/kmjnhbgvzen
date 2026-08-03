import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Process in Hapur | Step-by-Step Guide 2026",
  description:
    "Understand the complete website development process in Hapur, from planning to launch. Learn every step involved in building a professional business website.",
  keywords:
    "website development process in Hapur, website development company Hapur, web development steps, how websites are built, web design process Hapur, website development stages, business website development Hapur, web development company near Hapur, website launch process, custom website development steps",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/website-development-process-in-hapur",
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