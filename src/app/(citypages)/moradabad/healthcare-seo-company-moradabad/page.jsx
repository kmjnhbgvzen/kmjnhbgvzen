import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Healthcare SEO Company Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a healthcare SEO company in Moradabad helping doctors, clinics and hospitals rank on Google and Maps with a clear, month-by-month plan.",
  keywords:
    "healthcare SEO company Moradabad, healthcare SEO company in Moradabad, medical SEO company Moradabad, SEO company for hospitals, SEO company for doctors Moradabad, clinic SEO company, hospital SEO services Moradabad, healthcare SEO audit, healthcare SEO roadmap, local SEO for healthcare, patient enquiry SEO, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-seo-company-moradabad",
  },

  openGraph: {
    title: "Healthcare SEO Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a healthcare SEO company in Moradabad helping doctors, clinics and hospitals rank on Google and Maps with a clear, month-by-month plan.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-seo-company-moradabad",
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
    title: "Healthcare SEO Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a healthcare SEO company in Moradabad helping doctors, clinics and hospitals rank on Google and Maps with a clear, month-by-month plan.",
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