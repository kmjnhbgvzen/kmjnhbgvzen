import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Schools in Ghaziabad | Zentrix Infotech",
  description:
    "Specialized digital marketing for schools in Ghaziabad to boost admissions, parent trust, and online visibility. Custom strategies for education institutes. Get a free quote.",
  keywords:
    "digital marketing for schools in Ghaziabad, school marketing agency Ghaziabad, education marketing services Ghaziabad, school admission marketing Ghaziabad, school SEO services Ghaziabad, coaching institute marketing Ghaziabad, best digital marketing company for schools Ghaziabad, school website design Ghaziabad, education digital marketing near me, school branding agency Ghaziabad, admission lead generation Ghaziabad, edtech marketing services Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-schools-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Schools in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for schools in Ghaziabad to boost admissions, parent trust, and online visibility. Custom strategies for education institutes. Get a free quote.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-schools-in-ghaziabad",
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
    title: "Digital Marketing for Schools in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for schools in Ghaziabad to boost admissions, parent trust, and online visibility. Custom strategies for education institutes. Get a free quote.",
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