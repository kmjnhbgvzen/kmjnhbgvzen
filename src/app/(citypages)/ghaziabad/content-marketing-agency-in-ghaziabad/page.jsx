import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Ghaziabad | Best Content Company 2026",
  description:
    "Looking for a result-driven content marketing agency in Ghaziabad? Get SEO-focused blogs, website copy, social content & strategy that drive real traffic.",
  keywords:
    "content marketing agency in Ghaziabad, best content marketing company in Ghaziabad, content marketing services in Ghaziabad, content writing agency Ghaziabad, SEO content writing company Ghaziabad, blog writing services Ghaziabad, affordable content marketing agency Ghaziabad, top content marketing agency near Ghaziabad, website content writing company Ghaziabad, social media content agency Ghaziabad, content strategy consultant Ghaziabad, copywriting agency in Ghaziabad, video content marketing Ghaziabad, B2B content marketing agency Ghaziabad, ecommerce content marketing Ghaziabad, content marketing company near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/content-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Content Marketing Agency in Ghaziabad | Best Content Company 2026",
    description:
      "Looking for a result-driven content marketing agency in Ghaziabad? Get SEO-focused blogs, website copy, social content & strategy that drive real traffic.",
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
    title: "Content Marketing Agency in Ghaziabad | Best Content Company 2026",
    description:
      "Looking for a result-driven content marketing agency in Ghaziabad? Get SEO-focused blogs, website copy, social content & strategy that drive real traffic.",
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