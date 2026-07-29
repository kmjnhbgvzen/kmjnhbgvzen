import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "ERP Software Development Company in Ghaziabad | Custom ERP Solutions for Business",
  description:
    "Looking for a trusted ERP software development company in Ghaziabad? Get custom, scalable, and affordable ERP solutions built for manufacturing, retail, healthcare, and trading businesses. Free consultation available.",
  keywords:
    "erp software development company in ghaziabad, erp software company ghaziabad, custom erp development ghaziabad, erp solutions ghaziabad, best erp software company in ghaziabad, erp development company near me, enterprise resource planning software ghaziabad, erp software for manufacturing ghaziabad, erp software for small business, erp app development company, cloud erp software ghaziabad, erp system development company india, affordable erp software development, erp software development services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/erp-software-development-company-in-ghaziabad",
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