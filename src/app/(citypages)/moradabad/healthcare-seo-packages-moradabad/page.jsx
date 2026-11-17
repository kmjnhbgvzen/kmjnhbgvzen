import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Healthcare SEO Packages in Moradabad | Zentrix Infotech",
  description:
    "Explore healthcare SEO packages in Moradabad for clinics, doctors and hospitals. See what is included, how to compare plans and what to ask. Call Zentrix Infotech.",
  keywords:
    "healthcare SEO packages Moradabad, medical SEO packages Moradabad, SEO packages for clinics Moradabad, hospital SEO packages, doctor SEO package Moradabad, healthcare SEO plans Moradabad, SEO package for dentists Moradabad, clinic SEO services Moradabad, monthly SEO package for hospitals, healthcare SEO company Moradabad, local SEO package for doctors, what is included in SEO package",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-seo-packages-moradabad",
  },

  openGraph: {
    title: "Healthcare SEO Packages in Moradabad | Zentrix Infotech",
    description:
      "Explore healthcare SEO packages in Moradabad for clinics, doctors and hospitals. See what is included, how to compare plans and what to ask. Call Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-seo-packages-moradabad",
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
    title: "Healthcare SEO Packages in Moradabad | Zentrix Infotech",
    description:
      "Explore healthcare SEO packages in Moradabad for clinics, doctors and hospitals. See what is included, how to compare plans and what to ask. Call Zentrix Infotech.",
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