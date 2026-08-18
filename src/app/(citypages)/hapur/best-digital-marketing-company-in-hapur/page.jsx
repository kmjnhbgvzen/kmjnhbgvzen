import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Digital Marketing Company in Hapur | Zentrix Infotech",
  description:
    "Looking for the best digital marketing company in Hapur? Get SEO, Google Ads, social media marketing, local SEO, content marketing and growth-focused digital solutions.",
  keywords:
    "best digital marketing company in Hapur, digital marketing company in Hapur, digital marketing agency in Hapur, digital marketing services in Hapur, SEO company in Hapur, SEO services in Hapur, social media marketing agency in Hapur, Google Ads agency in Hapur, PPC services in Hapur, local SEO services in Hapur, content marketing agency in Hapur, online marketing company in Hapur, website promotion in Hapur, lead generation services in Hapur, performance marketing in Hapur, online advertising in Hapur, digital branding in Hapur, business growth services in Hapur, software customization services in Moradabad, custom software modification company India, upgrade old software to new requirements, software modification services, customize my inventory management software, customize my billing software, customize my CRM software, add new features to existing software, integrate new module in existing software, free quote for software customization, free requirement analysis software customization, business software customization services, tailor made software customization for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/best-digital-marketing-company-in-hapur",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Hapur | Zentrix Infotech",
    description:
      "Looking for the best digital marketing company in Hapur? Get SEO, Google Ads, social media marketing, local SEO, content marketing and growth-focused digital solutions.",
    url: "https://www.zentrixinfotech.com/hapur/best-digital-marketing-company-in-hapur",
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
    title: "Best Digital Marketing Company in Hapur | Zentrix Infotech",
    description:
      "Looking for the best digital marketing company in Hapur? Get SEO, Google Ads, social media marketing, local SEO, content marketing and growth-focused digital solutions.",
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