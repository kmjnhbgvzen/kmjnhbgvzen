import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Responsive Website Design Ghaziabad | Affordable & Professional Web Design Company",
  description:
    "Looking for Responsive Website Design in Ghaziabad? Get mobile-friendly, fast-loading, SEO-ready websites from expert designers. Boost rankings, leads & sales today.",
  keywords:
    "responsive website design Ghaziabad, website design company Ghaziabad, web development Ghaziabad, responsive web design services, mobile friendly website design Ghaziabad, best website designer Ghaziabad, affordable website design Ghaziabad, custom website design Ghaziabad, ecommerce website design Ghaziabad, SEO friendly website design Ghaziabad, website designing company near me, responsive web design agency Ghaziabad, professional website development Ghaziabad, small business website design Ghaziabad, website redesign services Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/responsive-website-design-ghaziabad",
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