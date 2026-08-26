import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Tailor-Made Software Customization for Small Business | ZentrixInfotech",
  description:
    "Existing software not fitting your workflow? Get tailor-made software customization for small business from ZentrixInfotech. Free consultation.",
  keywords:
    "tailor-made software for small business, small business software customization, custom software for small business, customized software for small business, tailor made software customization for small business, customize existing software for small business, software customization services for small business, software customization for small businesses, personalized business software, custom business software for small companies, small business software modification, business-specific software customization, software customization company for small business",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/tailor-made-software-customization-for-small-business",
  },
  openGraph: {
    title: "Tailor-Made Software Customization for Small Business | ZentrixInfotech",
    description:
      "Existing software not fitting your workflow? Get tailor-made software customization for small business from ZentrixInfotech. Free consultation.",
    url: "https://www.zentrixinfotech.com/tailor-made-software-customization-for-small-business",
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
    title: "Tailor-Made Software Customization for Small Business | ZentrixInfotech",
    description:
      "Existing software not fitting your workflow? Get tailor-made software customization for small business from ZentrixInfotech. Free consultation.",
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