import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Agency in Moradabad | Zentrix Infotech",
  description:
    "Looking for a doctor marketing agency in Moradabad? Zentrix Infotech helps doctors build trusted online presence, reviews and patient enquiries. Call today.",
  keywords:
    "doctor marketing agency Moradabad, marketing for doctors Moradabad, digital marketing for doctors, doctor branding Moradabad, medical practice marketing Moradabad, SEO for doctors Moradabad, social media for doctors, doctor website design Moradabad, online reputation for doctors, patient acquisition for doctors, clinic marketing agency Moradabad, personal branding for doctors",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Looking for a doctor marketing agency in Moradabad? Zentrix Infotech helps doctors build trusted online presence, reviews and patient enquiries. Call today.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-moradabad",
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
    title: "Doctor Marketing Agency in Moradabad | Zentrix Infotech",
    description:
      "Looking for a doctor marketing agency in Moradabad? Zentrix Infotech helps doctors build trusted online presence, reviews and patient enquiries. Call today.",
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