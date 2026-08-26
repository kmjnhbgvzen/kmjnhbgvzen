import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Free Requirement Analysis for Software Customization | Zentrix Infotech",
  description:
    "Not sure what to customize in your software? Get FREE requirement analysis from Zentrix Infotech — identify missing features, modules, and integrations before you build.",
  keywords:
    "free requirement analysis software customization, free software customization requirement analysis, software customization requirement analysis, free requirement analysis for software, software requirements analysis, software customization consultation, free software customization consultation, analyze software customization requirements, software requirement gathering, existing software requirement analysis, software modification requirements, software customization requirements, analyze existing software requirements, software customization services, software modification services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/free-requirement-analysis-software-customization",
  },
  openGraph: {
    title: "Free Requirement Analysis for Software Customization | Zentrix Infotech",
    description:
      "Not sure what to customize in your software? Get FREE requirement analysis from Zentrix Infotech — identify missing features, modules, and integrations before you build.",
    url: "https://www.zentrixinfotech.com/free-requirement-analysis-software-customization",
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
    title: "Free Requirement Analysis for Software Customization | Zentrix Infotech",
    description:
      "Not sure what to customize in your software? Get FREE requirement analysis from Zentrix Infotech — identify missing features, modules, and integrations before you build.",
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