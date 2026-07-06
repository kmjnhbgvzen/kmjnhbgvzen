import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Varanasi | Zentrix Infotech",
  description:
    "Build a brand people follow with a trusted social media marketing agency in Varanasi. Zentrix Infotech creates Instagram, Facebook & YouTube strategies that boost engagement and bookings.",
  keywords:
    "social media marketing agency in Varanasi, social media marketing company Varanasi, Instagram marketing Varanasi, Facebook marketing agency Varanasi, digital marketing agency Varanasi, social media management services Varanasi, best SMM agency Varanasi, tourism social media marketing Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/social-media-marketing-agency-in-varanasi",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Varanasi | Zentrix Infotech",
    description:
      "Build a brand people follow with a trusted social media marketing agency in Varanasi. Zentrix Infotech creates Instagram, Facebook & YouTube strategies that boost engagement and bookings.",
    url: "https://www.zentrixinfotech.com/varanasi/social-media-marketing-agency-in-varanasi",
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
    title: "Social Media Marketing Agency in Varanasi | Zentrix Infotech",
    description:
      "Build a brand people follow with a trusted social media marketing agency in Varanasi. Zentrix Infotech creates Instagram, Facebook & YouTube strategies that boost engagement and bookings.",
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