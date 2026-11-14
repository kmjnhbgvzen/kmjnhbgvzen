import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Medical SEO Services Moradabad | Speciality-Wise by Zentrix",
  description:
    "Medical SEO services in Moradabad for dentists, eye, skin, women’s health, child care and more. Zentrix Infotech helps your clinic rank on Google and Maps.",
  keywords:
    "medical SEO services Moradabad, medical SEO Moradabad, SEO for doctors Moradabad, dental SEO Moradabad, eye clinic SEO, gynaecologist SEO Moradabad, paediatrician SEO, orthopaedic SEO, dermatologist SEO, diagnostic centre SEO, local SEO for clinics, speciality-wise healthcare SEO, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-seo-services-moradabad",
  },

  openGraph: {
    title: "Medical SEO Services Moradabad | Speciality-Wise by Zentrix",
    description:
      "Medical SEO services in Moradabad for dentists, eye, skin, women’s health, child care and more. Zentrix Infotech helps your clinic rank on Google and Maps.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-seo-services-moradabad",
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
    title: "Medical SEO Services Moradabad | Speciality-Wise by Zentrix",
    description:
      "Medical SEO services in Moradabad for dentists, eye, skin, women’s health, child care and more. Zentrix Infotech helps your clinic rank on Google and Maps.",
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