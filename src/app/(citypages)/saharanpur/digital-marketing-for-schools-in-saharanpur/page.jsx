import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Schools in Saharanpur | Get Admissions",
  description:
    "Boost admissions with expert digital marketing for schools in Saharanpur. SEO, social media, Google Ads & lead generation for admission season. Free quote!",
  keywords:
    "digital marketing for schools in Saharanpur, digital marketing for coaching institutes Saharanpur, school marketing agency Saharanpur, education marketing company Saharanpur, admission lead generation services Saharanpur, school website design Saharanpur, Google Ads for schools Saharanpur, social media marketing for schools Saharanpur, best digital marketing agency for education UP, digital marketing for playschools Saharanpur, digital marketing for CBSE schools Saharanpur, online admission campaign services Saharanpur, digital marketing for coaching centres near me, school branding agency Saharanpur, education sector marketing company Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-schools-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Schools in Saharanpur | Get Admissions",
    description:
      "Boost admissions with expert digital marketing for schools in Saharanpur. SEO, social media, Google Ads & lead generation for admission season. Free quote!",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-schools-saharanpur",
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
    title: "Digital Marketing for Schools in Saharanpur | Get Admissions",
    description:
      "Boost admissions with expert digital marketing for schools in Saharanpur. SEO, social media, Google Ads & lead generation for admission season. Free quote!",
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