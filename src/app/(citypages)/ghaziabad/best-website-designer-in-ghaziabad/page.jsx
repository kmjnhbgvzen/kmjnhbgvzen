import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Website Designer in Ghaziabad | Creative, Affordable & SEO-Ready Designs",
  description:
    "Searching for the best website designer in Ghaziabad? Get custom, fast-loading, mobile-friendly websites at affordable prices. 250+ projects delivered with a 4.7/5 client rating.",
  keywords:
    "best website designer in Ghaziabad, top website designer Ghaziabad, professional website designer Ghaziabad, affordable website designer near me, freelance vs agency website designer, custom website design expert Ghaziabad, responsive website designer Ghaziabad, experienced web designer Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/best-website-designer-in-ghaziabad",
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