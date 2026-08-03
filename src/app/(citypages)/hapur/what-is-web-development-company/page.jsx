import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "What is a Web Development Company? Meaning, Services & Benefits",
  description:
    "Learn what a web development company actually does, the services it offers, and how to choose the right one for your business website or app project.",
  keywords:
    "what is a web development company, web development company meaning, web development company services, what does a web developer do, web development company definition, types of web development companies, web dev agency explained, web development process, how web development companies work, choosing a web development company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/meerut/what-is-a-web-development-company",
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