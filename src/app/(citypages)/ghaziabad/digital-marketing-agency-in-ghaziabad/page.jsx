import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ghaziabad | Best DM Company 2026",
  description:
    "Looking for a trusted digital marketing agency in Ghaziabad? Get result-driven SEO, PPC, social media & web marketing services that boost leads & sales.",
  keywords:
    "digital marketing agency in Ghaziabad, best digital marketing company in Ghaziabad, digital marketing services in Ghaziabad, SEO agency in Ghaziabad, PPC company in Ghaziabad, social media marketing agency Ghaziabad, affordable digital marketing agency Ghaziabad, top digital marketing agency near Ghaziabad, website designing and digital marketing company Ghaziabad, local SEO services Ghaziabad, online marketing company in Ghaziabad, branding agency in Ghaziabad, digital marketing consultant in Ghaziabad, lead generation agency Ghaziabad, content marketing services Ghaziabad, ecommerce digital marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ghaziabad | Best DM Company 2026",
    description:
      "Looking for a trusted digital marketing agency in Ghaziabad? Get result-driven SEO, PPC, social media & web marketing services that boost leads & sales.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-agency-in-ghaziabad",
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
    title: "Digital Marketing Agency in Ghaziabad | Best DM Company 2026",
    description:
      "Looking for a trusted digital marketing agency in Ghaziabad? Get result-driven SEO, PPC, social media & web marketing services that boost leads & sales.",
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