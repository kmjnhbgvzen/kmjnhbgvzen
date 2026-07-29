import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "iOS App Development in Ghaziabad | Custom iPhone App Developers",
  description:
    "Looking for expert iOS app development in Ghaziabad? Get custom, secure, and high-performance iPhone apps built by experienced Swift developers for startups and enterprises. Free consultation available.",
  keywords:
    "ios app development in ghaziabad, ios app development company ghaziabad, iphone app developers ghaziabad, best ios app development company ghaziabad, custom ios app development, hire ios developer ghaziabad, swift app development company, ios app development services near me, ecommerce ios app development, on demand ios app development ghaziabad, ios application development services india, apple app store developers ghaziabad, enterprise ios app development company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/ios-app-development-in-ghaziabad",
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