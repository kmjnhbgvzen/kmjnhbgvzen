import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Medical Marketing Services in Moradabad | Zentrix Infotech",
  description:
    "Explore medical marketing services in Moradabad for doctors, clinics and hospitals: SEO, Google Ads, social media, reputation and websites. Call Zentrix Infotech today.",
  keywords:
    "medical marketing services Moradabad, medical marketing Moradabad, healthcare marketing services Moradabad, doctor marketing Moradabad, clinic marketing services Moradabad, hospital marketing Moradabad, medical SEO Moradabad, healthcare digital marketing Moradabad, patient acquisition Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-services-moradabad",
  },

  openGraph: {
    title: "Medical Marketing Services in Moradabad | Zentrix Infotech",
    description:
      "Explore medical marketing services in Moradabad for doctors, clinics and hospitals: SEO, Google Ads, social media, reputation and websites. Call Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-services-moradabad",
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
    title: "Medical Marketing Services in Moradabad | Zentrix Infotech",
    description:
      "Explore medical marketing services in Moradabad for doctors, clinics and hospitals: SEO, Google Ads, social media, reputation and websites. Call Zentrix Infotech today.",
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