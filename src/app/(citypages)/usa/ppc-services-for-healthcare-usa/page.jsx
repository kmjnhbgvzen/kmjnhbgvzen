import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Services for Healthcare USA | Compliant Ad Campaigns",
  description:
    "Specialized PPC services for healthcare providers in the USA. Attract more patients with compliant, results-driven Google Ads campaigns tailored to healthcare.",
  keywords:
    "ppc services for healthcare usa, healthcare ppc management, medical ppc services usa, dental ppc management, healthcare google ads agency, ppc for doctors usa, ppc for hospitals, healthcare paid advertising services, medical practice ppc agency, ppc for healthcare providers, hipaa compliant ppc services, healthcare marketing ppc usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/ppc-services-for-healthcare-usa",
  },
  openGraph: {
    title: "PPC Services for Healthcare USA | Compliant Ad Campaigns",
    description:
      "Specialized PPC services for healthcare providers in the USA. Attract more patients with compliant, results-driven Google Ads campaigns tailored to healthcare.",
    url: "https://www.zentrixinfotech.com/usa/ppc-services-for-healthcare-usa",
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
    title: "PPC Services for Healthcare USA | Compliant Ad Campaigns",
    description:
      "Specialized PPC services for healthcare providers in the USA. Attract more patients with compliant, results-driven Google Ads campaigns tailored to healthcare.",
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