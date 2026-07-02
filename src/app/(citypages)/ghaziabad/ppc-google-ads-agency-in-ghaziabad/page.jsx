import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Google Ads Agency in Ghaziabad | Google Ads Management Services | Zentrix Infotech",
  description:
    "Grow your business with the best PPC Google Ads agency in Ghaziabad. Zentrix Infotech creates high-converting Google Ads campaigns that generate quality leads, increase website traffic, and maximize ROI for businesses of all sizes.",
  keywords:
    "Google Ads agency Ghaziabad, PPC services Ghaziabad, Google Ads management company Ghaziabad, pay per click services Ghaziabad, Google Ads experts Ghaziabad, Google advertising agency Ghaziabad, PPC marketing company Ghaziabad, Google Ads for local businesses, Zentrix Infotech PPC services",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ghaziabad/ppc-google-ads-agency-in-ghaziabad",
  },

  openGraph: {
    title: "PPC Google Ads Agency in Ghaziabad | Google Ads Management Services | Zentrix Infotech",
    description:
      "Grow your business with the best PPC Google Ads agency in Ghaziabad. Zentrix Infotech creates high-converting Google Ads campaigns that generate quality leads, increase website traffic, and maximize ROI for businesses of all sizes.",
    url: "https://www.zentrixinfotech.com/ghaziabad/ppc-google-ads-agency-in-ghaziabad",
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
    title: "PPC Google Ads Agency in Ghaziabad | Google Ads Management Services | Zentrix Infotech",
    description:
      "Grow your business with the best PPC Google Ads agency in Ghaziabad. Zentrix Infotech creates high-converting Google Ads campaigns that generate quality leads, increase website traffic, and maximize ROI for businesses of all sizes.",
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