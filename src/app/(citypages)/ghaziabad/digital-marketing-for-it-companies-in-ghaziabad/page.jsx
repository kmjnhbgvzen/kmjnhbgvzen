import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Digital Marketing for IT Companies in Ghaziabad | B2B Growth Agency",
  description:
    "Specialized digital marketing for IT companies in Ghaziabad. SEO, LinkedIn lead generation, content marketing & PPC built for software & tech businesses. Free consultation.",
  keywords:
    "digital marketing for IT companies in Ghaziabad, IT company marketing agency Ghaziabad, B2B digital marketing Ghaziabad, software company marketing services, tech company SEO agency, LinkedIn marketing for IT companies, lead generation for software companies, digital marketing for SaaS companies Ghaziabad, IT services marketing company, B2B lead generation agency Ghaziabad, software company branding services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-it-companies-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for IT Companies in Ghaziabad | B2B Growth Agency",
    description:
      "Specialized digital marketing for IT companies in Ghaziabad. SEO, LinkedIn lead generation, content marketing & PPC built for software & tech businesses. Free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-it-companies-in-ghaziabad",
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
    title: "Digital Marketing for IT Companies in Ghaziabad | B2B Growth Agency",
    description:
      "Specialized digital marketing for IT companies in Ghaziabad. SEO, LinkedIn lead generation, content marketing & PPC built for software & tech businesses. Free consultation.",
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