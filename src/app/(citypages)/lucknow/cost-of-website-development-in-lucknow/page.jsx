import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Cost of Website Development in Lucknow | Zentrix Infotech",
  description:
    "Understand the cost of website development in Lucknow: what affects price, hidden costs and how to budget. Get a clear proposal from Zentrix Infotech.",
  keywords:
    "cost of website development in lucknow, website development cost in lucknow, website development price lucknow, how much does a website cost in lucknow, website design cost lucknow, ecommerce website development cost lucknow, business website cost lucknow, affordable website development lucknow, website development charges lucknow, custom website development cost lucknow, website development packages lucknow, website maintenance cost lucknow, cheap website development lucknow, website development company lucknow, web development pricing lucknow, website redesign cost lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/cost-of-website-development-in-lucknow",
  },

  openGraph: {
    title: "Cost of Website Development in Lucknow | Zentrix Infotech",
    description:
      "Understand the cost of website development in Lucknow: what affects price, hidden costs and how to budget. Get a clear proposal from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/lucknow/cost-of-website-development-in-lucknow",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cost of Website Development in Lucknow | Zentrix Infotech",
    description:
      "Understand the cost of website development in Lucknow: what affects price, hidden costs and how to budget. Get a clear proposal from Zentrix Infotech.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
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