import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Design Company in Ghaziabad | Creative & SEO-Friendly Website Design",
  description:
    "Looking for a professional web design company in Ghaziabad? Get custom, mobile-friendly, and SEO-optimized website designs at affordable prices. 250+ projects delivered with a 4.7/5 client rating.",
  keywords:
    "web design company in Ghaziabad, website design agency Ghaziabad, best web designers Ghaziabad, affordable web design services Ghaziabad, custom website design company, responsive web design Ghaziabad, UI UX design company Ghaziabad, professional website design services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/web-design-company-in-ghaziabad",
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