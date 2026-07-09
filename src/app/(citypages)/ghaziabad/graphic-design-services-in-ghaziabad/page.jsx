import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Graphic Design Services in Ghaziabad | Zentrix Infotech",
  description:
    "Searching for graphic design services in Ghaziabad? Get professional logo, branding, UI/UX & marketing design solutions that make your business stand out.",
  keywords:
    "graphic design services in Ghaziabad, graphic design company Ghaziabad, logo design Ghaziabad, branding agency Ghaziabad, UI UX design Ghaziabad, creative design agency near me, professional graphic designer Ghaziabad, brand identity design Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/best-graphic-design-services-in-ghaziabad",
  },
  openGraph: {
    title: "Best Graphic Design Services in Ghaziabad | Zentrix Infotech",
    description:
      "Searching for graphic design services in Ghaziabad? Get professional logo, branding, UI/UX & marketing design solutions that make your business stand out.",
    url: "https://www.zentrixinfotech.com/ghaziabad/best-graphic-design-services-in-ghaziabad",
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
    title: "Best Graphic Design Services in Ghaziabad | Zentrix Infotech",
    description:
      "Searching for graphic design services in Ghaziabad? Get professional logo, branding, UI/UX & marketing design solutions that make your business stand out.",
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