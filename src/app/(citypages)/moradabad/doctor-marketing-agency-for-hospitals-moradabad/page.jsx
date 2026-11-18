import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Agency for Hospitals in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech helps hospitals in Moradabad promote their doctors and departments with websites, SEO, ads and reviews. See how we work. Call +91 72488 00839.",
  keywords:
    "doctor marketing agency for hospitals Moradabad, hospital doctor marketing Moradabad, hospital marketing agency Moradabad, doctor profile marketing hospital, healthcare marketing for hospitals Moradabad, hospital digital marketing Moradabad, consultant doctor promotion, hospital SEO Moradabad, hospital branding Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-for-hospitals-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Agency for Hospitals in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech helps hospitals in Moradabad promote their doctors and departments with websites, SEO, ads and reviews. See how we work. Call +91 72488 00839.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-for-hospitals-moradabad",
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
    title: "Doctor Marketing Agency for Hospitals in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech helps hospitals in Moradabad promote their doctors and departments with websites, SEO, ads and reviews. See how we work. Call +91 72488 00839.",
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