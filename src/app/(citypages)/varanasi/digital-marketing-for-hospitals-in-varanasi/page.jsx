import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Varanasi | More Patient Enquiries",
  description:
    "Grow your Varanasi hospital with expert digital marketing — SEO, Google Maps, social media & ads that bring more patient enquiries and appointments.",
  keywords:
    "digital marketing for hospitals in varanasi, hospital marketing agency varanasi, hospital SEO varanasi, healthcare digital marketing varanasi, hospital website design varanasi, google my business for hospitals, hospital ads varanasi, increase patient footfall varanasi, best digital marketing company for hospitals, local SEO for healthcare, hospital social media marketing, clinic marketing varanasi, hospital online reputation management, doctor appointment booking marketing",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-hospitals-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Varanasi | More Patient Enquiries",
    description:
      "Grow your Varanasi hospital with expert digital marketing — SEO, Google Maps, social media & ads that bring more patient enquiries and appointments.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-hospitals-varanasi",
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
    title: "Digital Marketing for Hospitals in Varanasi | More Patient Enquiries",
    description:
      "Grow your Varanasi hospital with expert digital marketing — SEO, Google Maps, social media & ads that bring more patient enquiries and appointments.",
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