import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "UI/UX Design Services in Ghaziabad | Zentrix Infotech",
  description:
    "Professional UI/UX design services in Ghaziabad for websites, mobile apps, and software products. User-centered design that boosts engagement and conversions. Get a free consultation.",
  keywords:
    "UI/UX design services in Ghaziabad, UI UX design company Ghaziabad, user interface design Ghaziabad, user experience design Ghaziabad, web app UI design Ghaziabad, mobile app UI UX design Ghaziabad, product design agency Ghaziabad, wireframing and prototyping Ghaziabad, best UI UX design company Ghaziabad, UI UX designers near me, website redesign services Ghaziabad, UX research services Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/ui-ux-design-services-ghaziabad",
  },
  openGraph: {
    title: "UI/UX Design Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional UI/UX design services in Ghaziabad for websites, mobile apps, and software products. User-centered design that boosts engagement and conversions. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/ui-ux-design-services-ghaziabad",
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
    title: "UI/UX Design Services in Ghaziabad | Zentrix Infotech",
    description:
      "Professional UI/UX design services in Ghaziabad for websites, mobile apps, and software products. User-centered design that boosts engagement and conversions. Get a free consultation.",
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