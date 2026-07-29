import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Company in Ghaziabad | Best SEO Services for Business Growth",
  description:
    "Looking for a reliable SEO company in Ghaziabad? Get result-driven SEO services — on-page, off-page, local SEO, and technical audits — to rank higher on Google and grow your business. Free consultation available.",
  keywords:
    "seo company in ghaziabad, seo services ghaziabad, best seo company ghaziabad, local seo company ghaziabad, seo agency near me, affordable seo services ghaziabad, ecommerce seo company, seo services for small business, on page off page seo company, digital marketing and seo agency, seo consultant ghaziabad, seo company for startups, technical seo services ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/seo-company-in-ghaziabad",
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