import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "React JS Development Ghaziabad | Fast, Custom Web App Development",
  description:
    "Looking for React JS Development in Ghaziabad? Get custom, fast-loading, scalable web apps built by expert React developers for better UX and business growth.",
  keywords:
    "React JS development Ghaziabad, React JS developer Ghaziabad, React JS development company, hire React developer Ghaziabad, custom React web app development, React JS website design Ghaziabad, React native app development Ghaziabad, best React JS company Ghaziabad, affordable React development Ghaziabad, React JS ecommerce development, single page application development Ghaziabad, React JS web application company, front end development company Ghaziabad, React JS SEO friendly website, custom web app development Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/react-js-development-ghaziabad",
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