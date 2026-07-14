import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Manufacturers in Meerut | Generate B2B Leads",
  description:
    "Grow your manufacturing business in Meerut with targeted digital marketing — SEO, Google Ads, and LinkedIn strategies built to generate real B2B leads.",
  keywords:
    "digital marketing for manufacturers in Meerut, manufacturing business marketing Meerut, B2B digital marketing Meerut, SEO for manufacturers, Google Ads for manufacturing companies, LinkedIn marketing for manufacturers, industrial marketing agency Meerut, export lead generation, manufacturer website marketing, B2B lead generation Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/digital-marketing-for-manufacturers-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Manufacturers in Meerut | Generate B2B Leads",
    description:
      "Grow your manufacturing business in Meerut with targeted digital marketing — SEO, Google Ads, and LinkedIn strategies built to generate real B2B leads.",
    url: "https://www.zentrixinfotech.com/meerut/digital-marketing-for-manufacturers-in-meerut",
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
    title: "Digital Marketing for Manufacturers in Meerut | Generate B2B Leads",
    description:
      "Grow your manufacturing business in Meerut with targeted digital marketing — SEO, Google Ads, and LinkedIn strategies built to generate real B2B leads.",
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