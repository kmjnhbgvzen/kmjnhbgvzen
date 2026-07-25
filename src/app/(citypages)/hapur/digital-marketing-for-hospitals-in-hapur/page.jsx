import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Hapur | Patient Growth Agency",
  description:
    "Looking for digital marketing for hospitals in Hapur? Zentrix Infotech helps hospitals & clinics get more patients through SEO, ads & website solutions.",
  keywords:
    "digital marketing for hospitals in Hapur, healthcare marketing agency Hapur, hospital marketing company, clinic digital marketing services, hospital SEO services Hapur, healthcare digital marketing agency UP, hospital website development company, patient appointment booking website, hospital Google ads agency, medical marketing company near me, healthcare social media marketing, hospital lead generation services, doctor marketing agency Hapur, best healthcare marketing company, digital marketing agency Delhi NCR",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-hospitals-in-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Hapur | Patient Growth Agency",
    description:
      "Looking for digital marketing for hospitals in Hapur? Zentrix Infotech helps hospitals & clinics get more patients through SEO, ads & website solutions.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-hospitals-in-hapur",
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
    title: "Digital Marketing for Hospitals in Hapur | Patient Growth Agency",
    description:
      "Looking for digital marketing for hospitals in Hapur? Zentrix Infotech helps hospitals & clinics get more patients through SEO, ads & website solutions.",
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