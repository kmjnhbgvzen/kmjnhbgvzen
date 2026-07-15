import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Agency in Hapur | Get Quality Leads & Sales",
  description:
    "Looking for a Facebook Ads agency in Hapur? Zentrix Infotech runs targeted campaigns that generate real leads, sales & footfall for local businesses.",
  keywords:
    "Facebook Ads agency in Hapur, Facebook marketing company Hapur, Facebook ads management services, social media ads agency Hapur, Meta ads agency near me, Facebook lead generation company, Facebook ads for small business, e-commerce Facebook ads services, Facebook ads for real estate Hapur, digital marketing agency Hapur, best Facebook ads company UP, Instagram and Facebook ads agency, Facebook marketing strategy company, paid social media agency Delhi NCR, Facebook ad campaign management",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/facebook-ads-agency-hapur",
  },
  openGraph: {
    title: "Facebook Ads Agency in Hapur | Get Quality Leads & Sales",
    description:
      "Looking for a Facebook Ads agency in Hapur? Zentrix Infotech runs targeted campaigns that generate real leads, sales & footfall for local businesses.",
    url: "https://www.zentrixinfotech.com/hapur/facebook-ads-agency-hapur",
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
    title: "Facebook Ads Agency in Hapur | Get Quality Leads & Sales",
    description:
      "Looking for a Facebook Ads agency in Hapur? Zentrix Infotech runs targeted campaigns that generate real leads, sales & footfall for local businesses.",
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