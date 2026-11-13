import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Digital Marketing Agency for Doctors in Moradabad | Zentrix",
  description:
    "Zentrix Infotech is a Moradabad digital marketing agency for doctors. Get a professional website, local SEO, ads and reputation support to grow your practice.",
  keywords:
    "digital marketing agency for doctors Moradabad, doctor marketing agency Moradabad, digital marketing for doctors Moradabad, online marketing for specialists Moradabad, doctor website and SEO Moradabad, personal branding for doctors Moradabad, clinic digital marketing Moradabad, Google Ads for doctors Moradabad, patient enquiry generation Moradabad, medical practice marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-digital-marketing-agency-for-doctors",
  },

  openGraph: {
    title:
      "Digital Marketing Agency for Doctors in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad digital marketing agency for doctors. Get a professional website, local SEO, ads and reputation support to grow your practice.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-digital-marketing-agency-for-doctors",
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
    title:
      "Digital Marketing Agency for Doctors in Moradabad | Zentrix",
    description:
      "Zentrix Infotech is a Moradabad digital marketing agency for doctors. Get a professional website, local SEO, ads and reputation support to grow your practice.",
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