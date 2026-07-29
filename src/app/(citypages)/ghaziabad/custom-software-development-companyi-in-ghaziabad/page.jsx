import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Development Company in Ghaziabad | Build Software That Fits Your Business",
  description:
    "Partner with a trusted Custom Software Development Company in Ghaziabad. Get tailor-made, secure, scalable software built around your exact business workflow.",
  keywords:
    "custom software development company Ghaziabad, custom software company Ghaziabad, bespoke software development Ghaziabad, tailor made software solutions Ghaziabad, custom application development company, hire software developers Ghaziabad, custom software development agency, business specific software company Ghaziabad, custom software development process, custom software development pricing Ghaziabad, custom software vendor Ghaziabad, dedicated software development team Ghaziabad, custom web and software solutions, IT company for custom software Ghaziabad, software outsourcing company Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/custom-software-development-company-ghaziabad",
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