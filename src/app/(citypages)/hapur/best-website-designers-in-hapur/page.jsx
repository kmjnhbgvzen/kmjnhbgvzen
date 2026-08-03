import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Website Designers in Hapur | Top-Rated Web Design Experts",
  description:
    "Find the best website designers in Hapur for your business. Compare skills, portfolios, and pricing to choose a designer who delivers real results.",
  keywords:
    "best website designers in Hapur, top web designers Hapur, best web design company Hapur, professional website designer Hapur, experienced web designer near Hapur, top rated website design agency, best website designing services, skilled web designer Hapur, hire website designer Hapur, best web design freelancer Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/best-website-designers-in-hapur",
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