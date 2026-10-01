import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Personalized Software Solutions for Healthcare | Zentrix Infotech",
  description:
    "Explore personalized software solutions for healthcare in India: appointment booking, patient portals, hospital websites and more, built by Zentrix Infotech.",
  keywords:
    "personalized software solutions for healthcare, custom healthcare software development India, hospital software development, patient appointment booking software, healthcare website development, clinic management software, patient portal development, healthcare mobile app development, telemedicine software, hospital website design, healthcare software company in Moradabad, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/personalized-software-solutions-for-healthcare",
  },
  openGraph: {
    title: "Personalized Software Solutions for Healthcare | Zentrix Infotech",
    description:
      "Explore personalized software solutions for healthcare in India: appointment booking, patient portals, hospital websites and more, built by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/personalized-software-solutions-for-healthcare",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Personalized Software Solutions for Healthcare | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalized Software Solutions for Healthcare | Zentrix Infotech",
    description:
      "Explore personalized software solutions for healthcare in India: appointment booking, patient portals, hospital websites and more, built by Zentrix Infotech.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function PersonalizedSoftwareSolutionsHealthcarePage() {
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
