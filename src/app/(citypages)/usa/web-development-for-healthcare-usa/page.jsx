import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Healthcare USA | HIPAA-Compliant Medical Websites",
  description:
    "Professional web development for healthcare providers in USA. HIPAA-compliant, patient-friendly, fast, and appointment-ready medical websites. Get a free consultation today.",
  keywords:
    "web development for healthcare USA, healthcare website development company, HIPAA compliant website development, medical website design USA, hospital website development, clinic website design agency, patient portal development, healthcare web design company, doctor website development services, telemedicine website development",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/web-development-for-healthcare-usa",
  },
  openGraph: {
    title: "Web Development for Healthcare USA | HIPAA-Compliant Medical Websites",
    description:
      "Professional web development for healthcare providers in USA. HIPAA-compliant, patient-friendly, fast, and appointment-ready medical websites. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/usa/web-development-for-healthcare-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development for Healthcare USA | HIPAA-Compliant Medical Websites",
    description:
      "Professional web development for healthcare providers in USA. HIPAA-compliant, patient-friendly, fast, and appointment-ready medical websites. Get a free consultation today.",
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