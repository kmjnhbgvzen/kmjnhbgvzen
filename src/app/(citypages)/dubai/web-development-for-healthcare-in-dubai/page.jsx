import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Healthcare in Dubai | Medical Websites",
  description:
    "Professional web development for healthcare providers in Dubai. Secure, HIPAA-style compliant, appointment-ready websites for clinics & hospitals.",
  keywords:
    "web development for healthcare in Dubai, healthcare website development Dubai, medical website design Dubai, clinic website development UAE, hospital website development Dubai, doctor website design Dubai, healthcare web design company Dubai, appointment booking website Dubai, medical SEO services Dubai, best healthcare website company Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/web-development-for-healthcare-in-dubai",
  },

  openGraph: {
    title: "Web Development for Healthcare in Dubai | Medical Websites",
    description:
      "Professional web development for healthcare providers in Dubai. Secure, HIPAA-style compliant, appointment-ready websites for clinics & hospitals.",
    url: "https://www.zentrixinfotech.com/dubai/web-development-for-healthcare-in-dubai",
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
    title: "Web Development for Healthcare in Dubai | Medical Websites",
    description:
      "Professional web development for healthcare providers in Dubai. Secure, HIPAA-style compliant, appointment-ready websites for clinics & hospitals.",
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