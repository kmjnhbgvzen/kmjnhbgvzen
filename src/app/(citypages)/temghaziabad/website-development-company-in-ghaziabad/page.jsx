import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Ghaziabad | Custom & Affordable Web Design",
  description:
    "Searching for a reliable website development company in Ghaziabad? Get custom, mobile-friendly, SEO-ready websites built to convert visitors into customers.",
  keywords:
    "website development company in ghaziabad, web design company ghaziabad, custom website development ghaziabad, affordable website development services, best web development company near me, ecommerce website development ghaziabad, responsive website design ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/website-development-company-in-ghaziabad",
  },

  openGraph: {
    title: "Website Development Company in Ghaziabad | Custom & Affordable Web Design",
    description:
      "Searching for a reliable website development company in Ghaziabad? Get custom, mobile-friendly, SEO-ready websites built to convert visitors into customers.",
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
    title: "Website Development Company in Ghaziabad | Custom & Affordable Web Design",
    description:
      "Searching for a reliable website development company in Ghaziabad? Get custom, mobile-friendly, SEO-ready websites built to convert visitors into customers.",
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