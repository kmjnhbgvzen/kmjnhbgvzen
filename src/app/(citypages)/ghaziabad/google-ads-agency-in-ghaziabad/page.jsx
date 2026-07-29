import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads Agency in Ghaziabad | PPC Management & Lead Generation",
  description:
    "Get more leads and sales with expert Google Ads management in Ghaziabad. Certified PPC specialists focused on ROI-driven ad campaigns. Get a free consultation.",
  keywords:
    "Google Ads agency in Ghaziabad, PPC management company Ghaziabad, Google Ads services Ghaziabad, pay per click advertising agency, Google Ads management company, PPC agency near me, Google Ads specialist Ghaziabad, lead generation through Google Ads, local business Google Ads, affordable PPC agency Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/google-ads-agency-in-ghaziabad",
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