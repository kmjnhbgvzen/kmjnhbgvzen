import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for IT Companies in Ghaziabad | Zentrix Infotech",
  description:
    "Specialized digital marketing for IT companies in Ghaziabad to generate qualified leads, boost credibility, and grow client acquisition. Get a free consultation.",
  keywords:
    "digital marketing for IT companies in Ghaziabad, IT company marketing agency Ghaziabad, software company digital marketing Ghaziabad, IT services SEO Ghaziabad, tech company lead generation Ghaziabad, IT firm branding agency Ghaziabad, best digital marketing company for IT companies Ghaziabad, software company website design Ghaziabad, IT marketing services near me, B2B SaaS marketing Ghaziabad, technology company marketing Ghaziabad, IT solutions marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-it-companies-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for IT Companies in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for IT companies in Ghaziabad to generate qualified leads, boost credibility, and grow client acquisition. Get a free consultation.",
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
    title: "Digital Marketing for IT Companies in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for IT companies in Ghaziabad to generate qualified leads, boost credibility, and grow client acquisition. Get a free consultation.",
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