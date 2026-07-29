import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Flutter App Development Ghaziabad | Cross-Platform App Experts",
  description:
    "Looking for Flutter app development in Ghaziabad? Get a single codebase built for both Android and iOS — faster launch, lower cost, and native-like performance for startups and enterprises. Free consultation available.",
  keywords:
    "flutter app development ghaziabad, flutter development company ghaziabad, best flutter app developers ghaziabad, cross platform app development ghaziabad, hire flutter developer ghaziabad, flutter app development services near me, custom flutter app development, flutter app development company india, affordable flutter app development, ecommerce flutter app development, on demand flutter app ghaziabad, flutter mobile app development services, google flutter development company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/flutter-app-development-in-ghaziabad",
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