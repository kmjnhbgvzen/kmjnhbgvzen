import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Marketing Company in Ghaziabad | Digital Growth Experts",
  description:
    "Partner with a trusted online marketing company in Ghaziabad offering SEO, PPC, social media, and content marketing to grow your brand and generate consistent leads. Free consultation available.",
  keywords:
    "online marketing company in ghaziabad, digital marketing company ghaziabad, best online marketing agency ghaziabad, internet marketing company near me, online marketing services ghaziabad, social media marketing company ghaziabad, digital marketing agency for small business, online branding company ghaziabad, content marketing company ghaziabad, affordable digital marketing services, online advertising company ghaziabad, full service digital marketing agency, online marketing consultant ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/online-marketing-company-in-ghaziabad",
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