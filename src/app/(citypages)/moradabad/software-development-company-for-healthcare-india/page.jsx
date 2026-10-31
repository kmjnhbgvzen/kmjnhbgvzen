import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company for Healthcare India | Zentrix Infotech",
  description:
    "Zentrix Infotech is a software development company for healthcare in India: hospital management, appointment booking, patient portals and apps. Get a free quote.",
  keywords:
    "software development company for healthcare india, healthcare software development india, hospital management software development india, custom hospital software india, patient portal development india, appointment booking software for clinics, telemedicine app development india, healthcare mobile app development india, EMR software development india, clinic management software india, pharmacy and lab software development, healthcare website development india, secure healthcare software development, healthcare software development cost india, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-for-healthcare-india",
  },

  openGraph: {
    title:
      "Software Development Company for Healthcare India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company for healthcare in India: hospital management, appointment booking, patient portals and apps. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-for-healthcare-india",
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
    title:
      "Software Development Company for Healthcare India | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development company for healthcare in India: hospital management, appointment booking, patient portals and apps. Get a free quote.",
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