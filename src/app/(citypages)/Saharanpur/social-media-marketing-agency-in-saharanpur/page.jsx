import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Saharanpur | Grow Your Brand Online",
  description:
    "Hire a results-driven social media marketing agency in Saharanpur. Instagram, Facebook & LinkedIn management, ads, content creation & analytics. Get a free audit.",
  keywords:
    "social media marketing agency in Saharanpur, social media marketing Saharanpur, Instagram marketing agency Saharanpur, Facebook ads agency Saharanpur, digital marketing company Saharanpur, SMM services Saharanpur, social media management Saharanpur, best social media agency UP, local business social media marketing, content marketing agency Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/social-media-marketing-agency-in-saharanpur",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Saharanpur | Grow Your Brand Online",
    description:
      "Hire a results-driven social media marketing agency in Saharanpur. Instagram, Facebook & LinkedIn management, ads, content creation & analytics. Get a free audit.",
    url: "https://www.zentrixinfotech.com/cities/saharanpur/social-media-marketing-agency-in-saharanpur",
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
    title: "Social Media Marketing Agency in Saharanpur | Grow Your Brand Online",
    description:
      "Hire a results-driven social media marketing agency in Saharanpur. Instagram, Facebook & LinkedIn management, ads, content creation & analytics. Get a free audit.",
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