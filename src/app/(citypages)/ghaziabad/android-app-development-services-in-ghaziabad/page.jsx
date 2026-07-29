import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Android App Development Services in Ghaziabad | Custom Android Apps",
  description:
    "Get expert Android app development services in Ghaziabad. Custom, scalable, and secure Android apps for startups, retail, healthcare, and enterprise businesses at affordable pricing. Free consultation available.",
  keywords:
    "android app development services in ghaziabad, android app development company ghaziabad, best android app developers ghaziabad, custom android app development ghaziabad, android app development services near me, hire android app developer ghaziabad, android application development company, affordable android app development, android app development for startups, ecommerce android app development, on demand android app development ghaziabad, android app development services india, native android app development company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/android-app-development-services-in-ghaziabad",
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