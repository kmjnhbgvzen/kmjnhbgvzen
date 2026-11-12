import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Affordable Medical Marketing Agency in Moradabad | Zentrix",
  description:
    "Need an affordable medical marketing agency in Moradabad? Zentrix Infotech offers budget-friendly SEO, websites, ads and social media for clinics, hospitals and doctors, with clear pricing.",
  keywords:
    "affordable medical marketing agency in moradabad, affordable healthcare marketing moradabad, low cost medical marketing moradabad, budget digital marketing for doctors moradabad, cheap clinic marketing moradabad, medical marketing packages moradabad, hospital marketing cost moradabad, doctor marketing services moradabad, healthcare SEO moradabad, patient lead generation moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-medical-marketing-agency-in-moradabad",
  },


  openGraph: {
    title: "Affordable Medical Marketing Agency in Moradabad | Zentrix",
    description:
      "Need an affordable medical marketing agency in Moradabad? Zentrix Infotech offers budget-friendly SEO, websites, ads and social media for clinics, hospitals and doctors, with clear pricing.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-medical-marketing-agency-in-moradabad",
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
    title: "Affordable Medical Marketing Agency in Moradabad | Zentrix",
    description:
      "Need an affordable medical marketing agency in Moradabad? Zentrix Infotech offers budget-friendly SEO, websites, ads and social media for clinics, hospitals and doctors, with clear pricing.",
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