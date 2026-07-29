import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Next.js Development Company Ghaziabad | Fast, SEO-Ready Web Apps",
  description:
    "Hire a trusted Next.js Development Company in Ghaziabad for fast, scalable, SEO-friendly web apps. Custom Next.js websites built for speed, security & growth.",
  keywords:
    "Next.js development company Ghaziabad, Next.js developer Ghaziabad, Next.js web development services, custom Next.js website Ghaziabad, React Next.js development company, SEO friendly Next.js website, best Next.js development company Ghaziabad, Next.js ecommerce development, Next.js web application development, Next.js website design Ghaziabad, hire Next.js developer Ghaziabad, Next.js SSR development company, affordable Next.js development Ghaziabad, headless CMS Next.js development, fast website development company Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/nextjs-development-company-ghaziabad",
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