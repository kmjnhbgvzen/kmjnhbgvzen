import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Company for Doctors in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is an SEO company for doctors in Moradabad. We help you rank for your name, speciality and area, so patients find and trust you on Google.",
  keywords:
    "SEO company for doctors in Moradabad, SEO for doctors Moradabad, doctor SEO services, doctor website SEO Moradabad, personal branding for doctors, doctor profile SEO, Google Business Profile for doctors, SEO for specialist doctors, SEO for surgeons, online reputation for doctors, local SEO for doctors, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-company-for-doctors-in-moradabad",
  },

  openGraph: {
    title: "SEO Company for Doctors in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an SEO company for doctors in Moradabad. We help you rank for your name, speciality and area, so patients find and trust you on Google.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-company-for-doctors-in-moradabad",
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
    title: "SEO Company for Doctors in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an SEO company for doctors in Moradabad. We help you rank for your name, speciality and area, so patients find and trust you on Google.",
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