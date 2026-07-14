import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Schools in Meerut | Boost Admission Enquiries",
  description:
    "Attract more admission enquiries with digital marketing for schools in Meerut — SEO, Google Ads, social media, and reputation-building strategies that work.",
  keywords:
    "digital marketing for schools in Meerut, school marketing Meerut, school admission marketing, SEO for schools, Google Ads for school admissions, social media marketing for schools, school website marketing, education marketing agency Meerut, school enrollment strategy, digital marketing for education institutes",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/digital-marketing-for-schools-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Schools in Meerut | Boost Admission Enquiries",
    description:
      "Attract more admission enquiries with digital marketing for schools in Meerut — SEO, Google Ads, social media, and reputation-building strategies that work.",
    url: "https://www.zentrixinfotech.com/meerut/digital-marketing-for-schools-in-meerut",
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
    title: "Digital Marketing for Schools in Meerut | Boost Admission Enquiries",
    description:
      "Attract more admission enquiries with digital marketing for schools in Meerut — SEO, Google Ads, social media, and reputation-building strategies that work.",
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