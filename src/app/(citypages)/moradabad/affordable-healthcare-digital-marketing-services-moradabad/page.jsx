import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Affordable Healthcare Digital Marketing Services Moradabad",
  description:
    "Zentrix Infotech offers affordable healthcare digital marketing services in Moradabad. Budget-friendly SEO, websites, ads and social media for clinics, hospitals and doctors, with clear pricing.",
  keywords:
    "affordable healthcare digital marketing services Moradabad, affordable digital marketing for clinics, low cost healthcare marketing Moradabad, budget digital marketing for doctors, healthcare marketing packages Moradabad, small clinic digital marketing, hospital digital marketing cost, local SEO for clinics, affordable healthcare website Moradabad, medical social media marketing, patient inquiries on a budget, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-healthcare-digital-marketing-services-moradabad",
  },


  openGraph: {
    title: "Affordable Healthcare Digital Marketing Services Moradabad",
    description:
      "Zentrix Infotech offers affordable healthcare digital marketing services in Moradabad. Budget-friendly SEO, websites, ads and social media for clinics, hospitals and doctors, with clear pricing.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-healthcare-digital-marketing-services-moradabad",
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
    title: "Affordable Healthcare Digital Marketing Services Moradabad",
    description:
      "Zentrix Infotech offers affordable healthcare digital marketing services in Moradabad. Budget-friendly SEO, websites, ads and social media for clinics, hospitals and doctors, with clear pricing.",
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