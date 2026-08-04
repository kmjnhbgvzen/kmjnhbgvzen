import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Hire Top Lead Generation Companies in Ayodhya for Real Estate",
  description:
    "Get high-quality real estate leads in Ayodhya. Compare top lead generation companies, pricing, and packages, and start your campaign today.",
  keywords:
    "lead generation companies in Ayodhya for real estate, hire lead generation company Ayodhya, real estate leads Ayodhya, buy real estate leads Ayodhya, real estate lead generation service Ayodhya, real estate marketing agency Ayodhya, real estate PPC company Ayodhya, real estate SEO agency Ayodhya, property leads packages Ayodhya, best real estate lead company Ayodhya, real estate lead generation pricing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/lead-generation-companies-in-ayodhya-for-real-estate",
  },
  openGraph: {
    title: "Hire Top Lead Generation Companies in Ayodhya for Real Estate",
    description:
      "Get high-quality real estate leads in Ayodhya. Compare top lead generation companies, pricing, and packages, and start your campaign today.",
    url: "https://www.zentrixinfotech.com/ayodhya/lead-generation-companies-in-ayodhya-for-real-estate",
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
    title: "Hire Top Lead Generation Companies in Ayodhya for Real Estate",
    description:
      "Get high-quality real estate leads in Ayodhya. Compare top lead generation companies, pricing, and packages, and start your campaign today.",
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