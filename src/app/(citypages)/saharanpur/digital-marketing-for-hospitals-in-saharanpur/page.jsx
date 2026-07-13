import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Saharanpur | Get Patients",
  description:
    "Grow patient inquiries with expert digital marketing for hospitals in Saharanpur. SEO, Google Ads, reputation management & more. Free consultation today!",
  keywords:
    "digital marketing for hospitals in Saharanpur, digital marketing for clinics Saharanpur, hospital marketing agency Saharanpur, healthcare digital marketing company Saharanpur, medical SEO services Saharanpur, digital marketing for doctors Saharanpur, patient acquisition marketing agency, hospital website design Saharanpur, Google Ads for hospitals Saharanpur, healthcare social media marketing Saharanpur, best digital marketing agency for hospitals UP, online reputation management for hospitals Saharanpur, digital marketing for diagnostic centres Saharanpur, patient lead generation services Saharanpur, medical practice marketing company near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-hospitals-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Saharanpur | Get Patients",
    description:
      "Grow patient inquiries with expert digital marketing for hospitals in Saharanpur. SEO, Google Ads, reputation management & more. Free consultation today!",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-for-hospitals-saharanpur",
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
    title: "Digital Marketing for Hospitals in Saharanpur | Get Patients",
    description:
      "Grow patient inquiries with expert digital marketing for hospitals in Saharanpur. SEO, Google Ads, reputation management & more. Free consultation today!",
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