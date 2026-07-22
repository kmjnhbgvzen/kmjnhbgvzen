import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Retargeting Ads Agency USA | Expert Remarketing Campaign Management",
  description:
    "Recover lost visitors and boost conversions with expert retargeting ads services in the USA. Get strategic remarketing campaigns across Google, Facebook, and display designed to maximize ROI.",
  keywords:
    "retargeting ads agency usa, remarketing agency usa, retargeting services usa, facebook retargeting ads usa, google remarketing agency, display retargeting ads services, retargeting campaign management usa, best retargeting agency usa, ecommerce retargeting ads, retargeting consultant usa",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/retargeting-ads-agency-usa",
  },
  openGraph: {
    title: "Retargeting Ads Agency USA | Expert Remarketing Campaign Management",
    description:
      "Recover lost visitors and boost conversions with expert retargeting ads services in the USA. Get strategic remarketing campaigns across Google, Facebook, and display designed to maximize ROI.",
    url: "https://www.zentrixinfotech.com/usa/retargeting-ads-agency-usa",
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
    title: "Retargeting Ads Agency USA | Expert Remarketing Campaign Management",
    description:
      "Recover lost visitors and boost conversions with expert retargeting ads services in the USA. Get strategic remarketing campaigns across Google, Facebook, and display designed to maximize ROI.",
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