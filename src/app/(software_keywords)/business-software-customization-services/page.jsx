import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Business Software Customization Services | ZentrixInfotech",
  description:
    "Business software not fitting your workflow? ZentrixInfotech offers business software customization services. Get a free requirement analysis today.",
  keywords:
    "business software customization, customize business software, custom business software services, business software customization services, existing business software customization, business software modification services, business software customization company, customize existing business software, business application customization, business software upgrade services, add features to business software, business software integration services, software customization for businesses, business management software customization",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/business-software-customization-services",
  },
  openGraph: {
    title: "Business Software Customization Services | ZentrixInfotech",
    description:
      "Business software not fitting your workflow? ZentrixInfotech offers business software customization services. Get a free requirement analysis today.",
    url: "https://www.zentrixinfotech.com/business-software-customization-services",
    siteName: "ZentrixInfotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "ZentrixInfotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Software Customization Services | ZentrixInfotech",
    description:
      "Business software not fitting your workflow? ZentrixInfotech offers business software customization services. Get a free requirement analysis today.",
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