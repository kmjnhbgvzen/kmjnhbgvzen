import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Content Marketing Agency in Ghaziabad | Zentrix Infotech",
  description:
    "Looking for a content marketing agency in Ghaziabad? Zentrix Infotech crafts SEO-driven content strategies that boost traffic, leads & brand authority.",
  keywords:
    "content marketing agency in Ghaziabad, content marketing company Ghaziabad, digital marketing agency Ghaziabad, SEO content writing Ghaziabad, content marketing services Ghaziabad, best content marketing agency near me, content strategy company Ghaziabad, blog writing services Ghaziabad",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/content-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Best Content Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a content marketing agency in Ghaziabad? Zentrix Infotech crafts SEO-driven content strategies that boost traffic, leads & brand authority.",
    url: "https://www.zentrixinfotech.com/ghaziabad/content-marketing-agency-in-ghaziabad",
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
    title: "Best Content Marketing Agency in Ghaziabad | Zentrix Infotech",
    description:
      "Looking for a content marketing agency in Ghaziabad? Zentrix Infotech crafts SEO-driven content strategies that boost traffic, leads & brand authority.",
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