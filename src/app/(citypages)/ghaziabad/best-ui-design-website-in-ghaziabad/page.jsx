import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best UI Design Website in Ghaziabad | Custom UI/UX Design Services",
  description:
    "Looking for the best UI design website in Ghaziabad? Get custom UI/UX design services for websites and apps that improve user experience, boost conversions, and strengthen your brand. Free consultation available.",
  keywords:
    "best ui design website in ghaziabad, ui design company ghaziabad, ui ux design services ghaziabad, best ui ux design company ghaziabad, website ui design services near me, custom ui design ghaziabad, web design and ui ux company, app ui design company ghaziabad, affordable ui ux design services, ecommerce ui design company, landing page design company ghaziabad, ui ux design agency india, professional website design ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/best-ui-design-website-in-ghaziabad",
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