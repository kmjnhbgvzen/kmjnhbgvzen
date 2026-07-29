import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Cloud Solutions in Ghaziabad | Cloud Migration & Hosting Services",
  description:
    "Get reliable cloud solutions in Ghaziabad — cloud migration, hosting, security, and management for AWS, Azure, and Google Cloud. Scale your business with expert support. Free consultation available.",
  keywords:
    "cloud solutions in ghaziabad, cloud services company ghaziabad, cloud migration services ghaziabad, aws cloud services ghaziabad, azure cloud solutions ghaziabad, cloud hosting company near me, best cloud solutions provider ghaziabad, cloud computing services india, cloud security services ghaziabad, cloud consulting company ghaziabad, business cloud solutions provider, cloud infrastructure management, google cloud services ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/cloud-solutions-in-ghaziabad",
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