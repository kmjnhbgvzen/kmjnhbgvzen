import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Digital Marketing for Medical Clinics in Moradabad",
  description:
    "Zentrix Infotech provides digital marketing for medical clinics in Moradabad. Local SEO, Google profile, website, ads and social media with a year-round plan to bring more patients.",
  keywords:
    "digital marketing for medical clinics in Moradabad, clinic digital marketing Moradabad, digital marketing for doctors Moradabad, medical clinic SEO Moradabad, clinic website development Moradabad, Google Business Profile for clinics, social media marketing for clinics, clinic Google Ads Moradabad, patient inquiries for clinics, local SEO for medical clinics, healthcare marketing calendar, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-for-medical-clinics-in-moradabad",
  },


  openGraph: {
    title: "Digital Marketing for Medical Clinics in Moradabad",
    description:
      "Zentrix Infotech provides digital marketing for medical clinics in Moradabad. Local SEO, Google profile, website, ads and social media with a year-round plan to bring more patients.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-for-medical-clinics-in-moradabad",
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
    title: "Digital Marketing for Medical Clinics in Moradabad",
    description:
      "Zentrix Infotech provides digital marketing for medical clinics in Moradabad. Local SEO, Google profile, website, ads and social media with a year-round plan to bring more patients.",
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