import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Healthcare SEO in Moradabad | Zentrix Infotech",
  description:
    "Affordable healthcare SEO in Moradabad for doctors, clinics and hospitals. Rank on Google and Maps with a clear, budget-friendly plan. Call Zentrix Infotech.",
  keywords:
    "affordable healthcare SEO Moradabad, healthcare SEO Moradabad, affordable medical SEO Moradabad, low cost SEO for clinics Moradabad, SEO for doctors in Moradabad, hospital SEO Moradabad, local SEO for clinics, Google Business Profile optimization Moradabad, doctor near me SEO, clinic SEO company Moradabad, budget SEO for hospitals, SEO services for small clinics Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-healthcare-seo-moradabad",
  },

  openGraph: {
    title: "Affordable Healthcare SEO in Moradabad | Zentrix Infotech",
    description:
      "Affordable healthcare SEO in Moradabad for doctors, clinics and hospitals. Rank on Google and Maps with a clear, budget-friendly plan. Call Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-healthcare-seo-moradabad",
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
    title: "Affordable Healthcare SEO in Moradabad | Zentrix Infotech",
    description:
      "Affordable healthcare SEO in Moradabad for doctors, clinics and hospitals. Rank on Google and Maps with a clear, budget-friendly plan. Call Zentrix Infotech.",
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