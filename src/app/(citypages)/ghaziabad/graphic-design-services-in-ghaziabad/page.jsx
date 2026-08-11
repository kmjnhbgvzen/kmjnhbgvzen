import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Ghaziabad | Logo & Branding 2026",
  description:
    "Looking for professional graphic design services in Ghaziabad? Get logo design, branding, social media creatives & print design that make you stand out.",
  keywords:
    "graphic design services in Ghaziabad, graphic design company in Ghaziabad, logo design services Ghaziabad, branding agency in Ghaziabad, social media creative design Ghaziabad, packaging design company Ghaziabad, affordable graphic design services Ghaziabad, best graphic design company near Ghaziabad, UI UX design services Ghaziabad, print design company Ghaziabad, brand identity design agency Ghaziabad, freelance graphic designer Ghaziabad, corporate branding services Ghaziabad, creative design agency Ghaziabad, graphic design company near me, ecommerce graphic design Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/graphic-design-services-in-ghaziabad",
  },
  openGraph: {
    title: "Graphic Design Services in Ghaziabad | Logo & Branding 2026",
    description:
      "Looking for professional graphic design services in Ghaziabad? Get logo design, branding, social media creatives & print design that make you stand out.",
    url: "https://www.zentrixinfotech.com/ghaziabad/graphic-design-services-in-ghaziabad",
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
    title: "Graphic Design Services in Ghaziabad | Logo & Branding 2026",
    description:
      "Looking for professional graphic design services in Ghaziabad? Get logo design, branding, social media creatives & print design that make you stand out.",
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