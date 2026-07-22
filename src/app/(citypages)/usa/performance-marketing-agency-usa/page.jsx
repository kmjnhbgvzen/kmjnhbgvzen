import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Performance Marketing Agency USA | Data-Driven Growth Marketing",
  description:
    "Partner with a results-focused performance marketing agency in the USA. Get data-driven campaigns across search, social, and display designed to maximize ROI, leads, and revenue.",
  keywords:
    "performance marketing agency usa, performance marketing company usa, data driven marketing agency usa, roi focused marketing agency, performance based marketing services, best performance marketing agency usa, growth marketing agency usa, performance marketing consultant usa, digital performance marketing usa, revenue driven marketing agency",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/performance-marketing-agency-usa",
  },
  openGraph: {
    title: "Performance Marketing Agency USA | Data-Driven Growth Marketing",
    description:
      "Partner with a results-focused performance marketing agency in the USA. Get data-driven campaigns across search, social, and display designed to maximize ROI, leads, and revenue.",
    url: "https://www.zentrixinfotech.com/usa/performance-marketing-agency-usa",
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
    title: "Performance Marketing Agency USA | Data-Driven Growth Marketing",
    description:
      "Partner with a results-focused performance marketing agency in the USA. Get data-driven campaigns across search, social, and display designed to maximize ROI, leads, and revenue.",
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