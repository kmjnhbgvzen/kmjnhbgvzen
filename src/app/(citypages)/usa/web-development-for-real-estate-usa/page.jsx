import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Real Estate USA | IDX-Ready Realtor Websites",
  description:
    "Professional web development for real estate businesses in USA. IDX-integrated, MLS-ready, fast, and lead-generating realtor websites built to convert. Get a free quote today.",
  keywords:
    "web development for real estate USA, real estate website development company, IDX website development, MLS integration website, realtor website design USA, property listing website development, real estate web design agency, custom real estate website, real estate lead generation website, best web developers for realtors",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/web-development-for-real-estate-usa",
  },
  openGraph: {
    title: "Web Development for Real Estate USA | IDX-Ready Realtor Websites",
    description:
      "Professional web development for real estate businesses in USA. IDX-integrated, MLS-ready, fast, and lead-generating realtor websites built to convert. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/usa/web-development-for-real-estate-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development for Real Estate USA | IDX-Ready Realtor Websites",
    description:
      "Professional web development for real estate businesses in USA. IDX-integrated, MLS-ready, fast, and lead-generating realtor websites built to convert. Get a free quote today.",
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