import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Ecommerce SEO Expert in Ghaziabad | Rank & Grow Your Online Store",
  description:
    "Hire an experienced ecommerce SEO expert in Ghaziabad to rank your product and category pages higher on Google, fix technical issues, and turn more visitors into paying customers. Free consultation available.",
  keywords:
    "ecommerce seo expert in ghaziabad, ecommerce seo services ghaziabad, ecommerce seo company ghaziabad, product page seo expert, shopify seo expert ghaziabad, woocommerce seo services, online store seo expert near me, best ecommerce seo agency, ecommerce seo consultant india, magento seo services ghaziabad, ecommerce seo audit expert, category page seo optimization, ecommerce seo for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/ecommerce-seo-expert-in-ghaziabad",
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