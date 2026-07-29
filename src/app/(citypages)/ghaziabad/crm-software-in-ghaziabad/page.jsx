import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "CRM Software Ghaziabad | Custom CRM Development For Businesses",
  description:
    "Get custom CRM Software in Ghaziabad to manage leads, sales, and customer relationships better. Scalable, secure & affordable CRM development for growing businesses.",
  keywords:
    "CRM software Ghaziabad, CRM development company Ghaziabad, custom CRM software Ghaziabad, best CRM software company Ghaziabad, CRM software for small business Ghaziabad, sales CRM software Ghaziabad, lead management software Ghaziabad, affordable CRM software Ghaziabad, CRM development services Ghaziabad, cloud based CRM software Ghaziabad, CRM software company near me, customer relationship management software Ghaziabad, CRM software for real estate Ghaziabad, CRM app development Ghaziabad, custom CRM solutions Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/crm-software-ghaziabad",
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