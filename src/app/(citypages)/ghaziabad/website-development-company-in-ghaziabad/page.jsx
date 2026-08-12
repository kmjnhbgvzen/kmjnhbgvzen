import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Website Development Company in Ghaziabad | Custom Web Design & Development",
  description:
    "Looking for a reliable website development company in Ghaziabad? Get custom, fast, SEO-friendly websites for business, e-commerce & startups. Free consultation available.",
  keywords:
    "website development company in Ghaziabad, web development company Ghaziabad, best website designing company in Ghaziabad, custom website development Ghaziabad, e-commerce website development Ghaziabad, affordable website development company, business website design Ghaziabad, website development services near me, professional web developers Ghaziabad, responsive website design company, website development agency Ghaziabad UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/website-development-company-in-ghaziabad",
  },
  openGraph: {
    title:
      "Website Development Company in Ghaziabad | Custom Web Design & Development",
    description:
      "Looking for a reliable website development company in Ghaziabad? Get custom, fast, SEO-friendly websites for business, e-commerce & startups. Free consultation available.",
    url: "https://www.zentrixinfotech.com/ghaziabad/website-development-company-in-ghaziabad",
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
    title:
      "Website Development Company in Ghaziabad | Custom Web Design & Development",
    description:
      "Looking for a reliable website development company in Ghaziabad? Get custom, fast, SEO-friendly websites for business, e-commerce & startups. Free consultation available.",
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