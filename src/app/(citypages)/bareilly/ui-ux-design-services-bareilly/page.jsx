import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "UI/UX Design Services in Bareilly | Better Websites & Apps",
  description:
    "Get expert UI/UX design services in Bareilly for websites and apps — intuitive interfaces, better user experience and designs that turn visitors into customers.",
  keywords:
    "UI UX design services in Bareilly, UI UX design company Bareilly, website design agency Bareilly, app UI design services, user experience design company, UI UX design services for startups, best UI UX agency India, product design company Bareilly, wireframing and prototyping services, mobile app UI design Bareilly, user interface design agency",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/ui-ux-design-services-bareilly",
  },

  openGraph: {
    title: "UI/UX Design Services in Bareilly | Better Websites & Apps",
    description:
      "Get expert UI/UX design services in Bareilly for websites and apps — intuitive interfaces, better user experience and designs that turn visitors into customers.",
    url: "https://www.zentrixinfotech.com/bareilly/ui-ux-design-services-bareilly",
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
    title: "UI/UX Design Services in Bareilly | Better Websites & Apps",
    description:
      "Get expert UI/UX design services in Bareilly for websites and apps — intuitive interfaces, better user experience and designs that turn visitors into customers.",
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