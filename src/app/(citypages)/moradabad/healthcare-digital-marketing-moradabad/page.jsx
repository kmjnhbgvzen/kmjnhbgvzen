import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Healthcare Digital Marketing Moradabad | 2026 Guide by Zentrix",
  description:
    "Healthcare digital marketing in Moradabad for clinics and hospitals. Zentrix Infotech covers SEO, Google Maps, ads, social media and WhatsApp to bring patient enquiries.",
  keywords:
    "healthcare digital marketing Moradabad, healthcare digital marketing in Moradabad, digital marketing for clinics Moradabad, digital marketing for hospitals, healthcare marketing 2026, patient enquiry marketing, local SEO for healthcare, Google Ads for doctors, social media for hospitals, WhatsApp marketing for clinics, healthcare marketing agency Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-digital-marketing-moradabad",
  },

  openGraph: {
    title: "Healthcare Digital Marketing Moradabad | 2026 Guide by Zentrix",
    description:
      "Healthcare digital marketing in Moradabad for clinics and hospitals. Zentrix Infotech covers SEO, Google Maps, ads, social media and WhatsApp to bring patient enquiries.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-digital-marketing-moradabad",
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
    title: "Healthcare Digital Marketing Moradabad | 2026 Guide by Zentrix",
    description:
      "Healthcare digital marketing in Moradabad for clinics and hospitals. Zentrix Infotech covers SEO, Google Maps, ads, social media and WhatsApp to bring patient enquiries.",
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