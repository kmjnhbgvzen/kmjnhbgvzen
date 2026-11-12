import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Best Medical Marketing Agency in Moradabad | Zentrix",
  description:
    "Looking for the best medical marketing agency in Moradabad? Zentrix Infotech helps hospitals, clinics and doctors get more patient inquiries with SEO, ads, websites and reputation building.",
  keywords:
    "best medical marketing agency in moradabad, medical marketing agency moradabad, healthcare marketing agency moradabad, hospital marketing company moradabad, doctor marketing services moradabad, clinic marketing moradabad, healthcare SEO moradabad, medical digital marketing moradabad, patient lead generation moradabad, hospital website development moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-medical-marketing-agency-in-moradabad",
  },


  openGraph: {
    title: "Best Medical Marketing Agency in Moradabad | Zentrix",
    description:
      "Looking for the best medical marketing agency in Moradabad? Zentrix Infotech helps hospitals, clinics and doctors get more patient inquiries with SEO, ads, websites and reputation building.",
    url: "https://www.zentrixinfotech.com/moradabad/best-medical-marketing-agency-in-moradabad",
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
    title: "Best Medical Marketing Agency in Moradabad | Zentrix",
    description:
      "Looking for the best medical marketing agency in Moradabad? Zentrix Infotech helps hospitals, clinics and doctors get more patient inquiries with SEO, ads, websites and reputation building.",
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