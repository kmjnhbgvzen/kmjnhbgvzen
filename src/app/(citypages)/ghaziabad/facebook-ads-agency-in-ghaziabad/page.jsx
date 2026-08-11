import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Facebook Ads Agency in Ghaziabad | Meta Ads Management & PPC Experts",
  description:
    "Hire a results-driven Facebook Ads agency in Ghaziabad. Expert Meta Ads campaign management to generate leads, sales & ROI. Free ad account audit available.",
  keywords:
    "Facebook Ads agency in Ghaziabad, Facebook advertising agency Ghaziabad, Meta Ads agency Ghaziabad, Facebook Ads management company, Instagram Ads agency Ghaziabad, PPC agency Ghaziabad, Facebook lead generation ads, best Facebook Ads company near me, Meta Ads specialist Ghaziabad, Facebook Ads for small business, paid social media advertising agency",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/facebook-ads-agency-in-ghaziabad",
  },
  openGraph: {
    title: "Facebook Ads Agency in Ghaziabad | Meta Ads Management & PPC Experts",
    description:
      "Hire a results-driven Facebook Ads agency in Ghaziabad. Expert Meta Ads campaign management to generate leads, sales & ROI. Free ad account audit available.",
    url: "https://www.zentrixinfotech.com/ghaziabad/facebook-ads-agency-in-ghaziabad",
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
    title: "Facebook Ads Agency in Ghaziabad | Meta Ads Management & PPC Experts",
    description:
      "Hire a results-driven Facebook Ads agency in Ghaziabad. Expert Meta Ads campaign management to generate leads, sales & ROI. Free ad account audit available.",
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