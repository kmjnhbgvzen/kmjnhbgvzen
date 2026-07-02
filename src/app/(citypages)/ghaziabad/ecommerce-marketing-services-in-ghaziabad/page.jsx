import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Ecommerce Marketing Services in Ghaziabad | Zentrix Infotech",
  description:
    "Looking for ecommerce marketing services in Ghaziabad? Get SEO, paid ads, content & conversion strategies that grow your online store's sales and visibility.",
  keywords:
    "ecommerce marketing services in Ghaziabad, ecommerce marketing agency Ghaziabad, ecommerce SEO Ghaziabad, online store marketing Ghaziabad, digital marketing for ecommerce Ghaziabad, ecommerce website development Ghaziabad, ecommerce ads agency near me, online business growth Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/best-ecommerce-marketing-services-in-ghaziabad",
  },
  openGraph: {
    title: "Best Ecommerce Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for ecommerce marketing services in Ghaziabad? Get SEO, paid ads, content & conversion strategies that grow your online store's sales and visibility.",
    url: "https://www.zentrixinfotech.com/ghaziabad/best-ecommerce-marketing-services-in-ghaziabad",
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
    title: "Best Ecommerce Marketing Services in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for ecommerce marketing services in Ghaziabad? Get SEO, paid ads, content & conversion strategies that grow your online store's sales and visibility.",
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