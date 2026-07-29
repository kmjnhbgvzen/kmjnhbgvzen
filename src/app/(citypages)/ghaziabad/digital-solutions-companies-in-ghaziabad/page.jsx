import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Solutions Companies in Ghaziabad | Top IT & Digital Agencies 2026",
  description:
    "Explore leading digital solutions companies in Ghaziabad offering web development, software, mobile apps, and digital marketing to help your business grow online.",
  keywords:
    "digital solutions companies in Ghaziabad, digital solutions agency Ghaziabad, IT solutions company Ghaziabad, digital transformation company Ghaziabad, best digital agency Ghaziabad, web and software solutions company, digital marketing and IT company Ghaziabad, technology solutions provider Ghaziabad, full service digital agency, digital solutions for small business",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/digital-solutions-companies-in-ghaziabad",
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