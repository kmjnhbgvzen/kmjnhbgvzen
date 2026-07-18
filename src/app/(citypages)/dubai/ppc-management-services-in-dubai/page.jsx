import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Management Services in Dubai | Google Ads & Paid Search Experts",
  description:
    "Grow your business with expert PPC management services in Dubai. Google Ads, Meta Ads & remarketing campaigns built for leads, sales & ROI. Get a free audit today.",
  keywords:
    "ppc management services in dubai, ppc agency dubai, google ads management dubai, ppc company dubai, paid search marketing dubai, pay per click advertising dubai, ppc experts uae, google ads agency dubai, meta ads management dubai, best ppc agency in dubai, ppc consultant dubai, digital advertising agency dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/ppc-management-services-dubai",
  },

  openGraph: {
    title: "PPC Management Services in Dubai | Google Ads & Paid Search Experts",
    description:
      "Grow your business with expert PPC management services in Dubai. Google Ads, Meta Ads & remarketing campaigns built for leads, sales & ROI. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/dubai/ppc-management-services-dubai",
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
    title: "PPC Management Services in Dubai | Google Ads & Paid Search Experts",
    description:
      "Grow your business with expert PPC management services in Dubai. Google Ads, Meta Ads & remarketing campaigns built for leads, sales & ROI. Get a free audit today.",
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