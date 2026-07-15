import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Ghaziabad | Get Quality Leads Fast",
  description:
    "Result-driven Lead Generation Services in Ghaziabad. Get high-quality, ready-to-buy leads through SEO, ads, and landing pages built to convert. Free audit.",
  keywords:
    "lead generation services in Ghaziabad, lead generation company Ghaziabad, B2B lead generation Ghaziabad, real estate lead generation Ghaziabad, digital marketing lead generation Ghaziabad, lead generation agency near me, best lead generation company Ghaziabad, PPC lead generation Ghaziabad, online lead generation services Ghaziabad, local lead generation Ghaziabad, lead generation for small business Ghaziabad, sales lead generation agency Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/lead-generation-services-ghaziabad",
  },
  openGraph: {
    title: "Lead Generation Services in Ghaziabad | Get Quality Leads Fast",
    description:
      "Result-driven Lead Generation Services in Ghaziabad. Get high-quality, ready-to-buy leads through SEO, ads, and landing pages built to convert. Free audit.",
    url: "https://www.zentrixinfotech.com/ghaziabad/lead-generation-services-ghaziabad",
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
    title: "Lead Generation Services in Ghaziabad | Get Quality Leads Fast",
    description:
      "Result-driven Lead Generation Services in Ghaziabad. Get high-quality, ready-to-buy leads through SEO, ads, and landing pages built to convert. Free audit.",
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