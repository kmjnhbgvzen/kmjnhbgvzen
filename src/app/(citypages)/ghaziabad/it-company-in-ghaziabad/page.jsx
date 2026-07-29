import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "IT Company in Ghaziabad | Software, Web & App Development Services",
  description:
    "Looking for a reliable IT company in Ghaziabad? Get software development, web design, mobile apps, cloud solutions, and digital marketing under one roof. Free consultation available.",
  keywords:
    "it company in ghaziabad, best it company ghaziabad, software company ghaziabad, it services company near me, it solutions company ghaziabad, top it companies in ghaziabad, it consulting company ghaziabad, software development company near me, it firm ghaziabad, technology company ghaziabad, it services for small business, best software company in ghaziabad, information technology company ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/it-company-in-ghaziabad",
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