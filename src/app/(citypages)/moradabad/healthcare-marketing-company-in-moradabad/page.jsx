import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Healthcare Marketing Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a healthcare marketing company in Moradabad. SEO, websites, ads and social media for hospitals, clinics and doctors. Get a free consultation.",
  keywords:
    "healthcare marketing company in moradabad, healthcare marketing services moradabad, hospital marketing services moradabad, medical marketing company moradabad, digital marketing for doctors in moradabad, clinic promotion agency moradabad, healthcare digital marketing agency moradabad, healthcare SEO services moradabad, hospital branding agency moradabad, how to market healthcare services in moradabad, best healthcare marketing company in moradabad, affordable healthcare marketing moradabad, healthcare marketing packages moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-marketing-company-in-moradabad",
  },

  openGraph: {
    title: "Healthcare Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a healthcare marketing company in Moradabad. SEO, websites, ads and social media for hospitals, clinics and doctors. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-marketing-company-in-moradabad",
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
    title: "Healthcare Marketing Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a healthcare marketing company in Moradabad. SEO, websites, ads and social media for hospitals, clinics and doctors. Get a free consultation.",
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