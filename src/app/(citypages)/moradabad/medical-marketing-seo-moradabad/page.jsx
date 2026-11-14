import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Medical Marketing SEO Moradabad | Healthcare SEO by Zentrix",
  description:
    "Medical marketing SEO in Moradabad for doctors, clinics and hospitals. Zentrix Infotech helps you rank on Google and Maps and get more patient enquiries.",
  keywords:
    "medical marketing SEO Moradabad, healthcare SEO Moradabad, SEO for doctors Moradabad, hospital SEO Moradabad, clinic SEO services, medical SEO company Moradabad, local SEO for clinics, Google Maps ranking for doctors, patient enquiry SEO, healthcare website optimisation, Hinglish medical keywords, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-seo-moradabad",
  },

  openGraph: {
    title: "Medical Marketing SEO Moradabad | Healthcare SEO by Zentrix",
    description:
      "Medical marketing SEO in Moradabad for doctors, clinics and hospitals. Zentrix Infotech helps you rank on Google and Maps and get more patient enquiries.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-seo-moradabad",
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
    title: "Medical Marketing SEO Moradabad | Healthcare SEO by Zentrix",
    description:
      "Medical marketing SEO in Moradabad for doctors, clinics and hospitals. Zentrix Infotech helps you rank on Google and Maps and get more patient enquiries.",
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