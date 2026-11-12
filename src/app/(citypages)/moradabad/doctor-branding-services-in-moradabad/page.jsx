import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Branding Services in Moradabad | Zentrix Infotech",
  description:
    "Doctor branding services in Moradabad: logo, clinic identity, website, signage and social media design that build patient trust. Book a free consultation with Zentrix.",
  keywords:
    "doctor branding services in moradabad, doctor branding moradabad, clinic branding moradabad, medical branding agency moradabad, personal branding for doctors moradabad, doctor logo design moradabad, clinic logo and identity design moradabad, hospital branding agency moradabad, healthcare branding moradabad, doctor visiting card and prescription pad design, doctor website and branding moradabad, digital marketing for doctors in moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-branding-services-in-moradabad",
  },

  openGraph: {
    title: "Doctor Branding Services in Moradabad | Zentrix Infotech",
    description:
      "Doctor branding services in Moradabad: logo, clinic identity, website, signage and social media design that build patient trust. Book a free consultation with Zentrix.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-branding-services-in-moradabad",
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
    title: "Doctor Branding Services in Moradabad | Zentrix Infotech",
    description:
      "Doctor branding services in Moradabad: logo, clinic identity, website, signage and social media design that build patient trust. Book a free consultation with Zentrix.",
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