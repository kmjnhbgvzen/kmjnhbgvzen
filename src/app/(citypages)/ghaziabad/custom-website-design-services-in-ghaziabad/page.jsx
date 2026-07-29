import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Website Design Services in Ghaziabad | Affordable & SEO-Friendly",
  description:
    "Get custom website design services in Ghaziabad tailored to your brand. Fast, mobile-friendly, SEO-ready websites at affordable prices. 250+ projects delivered with a 4.7/5 client rating.",
  keywords:
    "custom website design services in Ghaziabad, custom website development Ghaziabad, tailor made website design company, personalized website design services, custom web design agency Ghaziabad, bespoke website design company, affordable custom website design, professional custom website services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/custom-website-design-services-in-ghaziabad",
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