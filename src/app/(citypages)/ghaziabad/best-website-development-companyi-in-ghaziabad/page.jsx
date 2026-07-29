import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Website Development Company Ghaziabad | Trusted & Affordable",
  description:
    "Looking for the best website development company in Ghaziabad? Get custom, fast, mobile-friendly websites built to convert. 250+ projects delivered with a 4.7/5 client rating.",
  keywords:
    "best website development company Ghaziabad, top website development company Ghaziabad, trusted web development company near me, reliable website development services, leading web development agency Ghaziabad, experienced website developers Ghaziabad, affordable website development company, professional web development firm Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/best-website-development-company-ghaziabad",
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