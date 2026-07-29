import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Management Company in Ghaziabad | Google & Meta Ads Experts",
  description:
    "Hire a results-driven PPC management company in Ghaziabad to run profitable Google Ads and Meta Ads campaigns, lower your cost per lead, and drive measurable ROI. Free consultation available.",
  keywords:
    "ppc management company in ghaziabad, ppc agency ghaziabad, google ads management company ghaziabad, best ppc company ghaziabad, meta ads management services, paid ads agency near me, ppc services for small business, google ads expert ghaziabad, facebook ads management ghaziabad, ppc campaign management company, affordable ppc services india, performance marketing agency ghaziabad, ppc consultant near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/ppc-management-company-in-ghaziabad",
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