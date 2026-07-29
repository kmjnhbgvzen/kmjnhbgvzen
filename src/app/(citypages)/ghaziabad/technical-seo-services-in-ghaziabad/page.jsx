import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Technical SEO Services in Ghaziabad | Boost Website Rankings & Speed",
  description:
    "Improve your website's crawlability, speed, and Google rankings with expert technical SEO services in Ghaziabad. Get a free technical SEO audit today.",
  keywords:
    "technical SEO services in Ghaziabad, technical SEO company Ghaziabad, website speed optimization Ghaziabad, technical SEO audit, on-page technical SEO services, website crawlability optimization, Core Web Vitals optimization, technical SEO agency Ghaziabad, SEO audit services Ghaziabad, mobile SEO optimization company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/technical-seo-services-in-ghaziabad",
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