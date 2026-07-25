import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Traders in Hapur | More Enquiries & Sales",
  description:
    "Looking for digital marketing for traders in Hapur? Zentrix Infotech helps wholesalers & traders get more B2B enquiries through SEO, ads & website.",
  keywords:
    "digital marketing for traders in Hapur, trader marketing agency Hapur, wholesaler marketing company, trading business digital marketing, B2B marketing agency Hapur, wholesale lead generation services, trader website development company, distributor marketing agency UP, trading company SEO services, wholesale business marketing agency, best B2B marketing company Hapur, digital marketing agency Delhi NCR, trader Google ads agency, grain and commodity trader marketing, hardware trader marketing services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-traders-in-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Traders in Hapur | More Enquiries & Sales",
    description:
      "Looking for digital marketing for traders in Hapur? Zentrix Infotech helps wholesalers & traders get more B2B enquiries through SEO, ads & website.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-traders-in-hapur",
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
    title: "Digital Marketing for Traders in Hapur | More Enquiries & Sales",
    description:
      "Looking for digital marketing for traders in Hapur? Zentrix Infotech helps wholesalers & traders get more B2B enquiries through SEO, ads & website.",
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