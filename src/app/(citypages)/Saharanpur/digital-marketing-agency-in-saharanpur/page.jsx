import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Saharanpur | Grow Your Business Online",
  description:
    "Find a trusted digital marketing agency in Saharanpur for SEO, PPC, social media, web design, and content that drive real leads and business growth.",
  keywords:
    "digital marketing agency in Saharanpur, digital marketing services Saharanpur, SEO company Saharanpur, PPC agency Saharanpur, social media marketing Saharanpur, web design company Saharanpur, online marketing agency Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/digital-marketing-agency-in-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing Agency in Saharanpur | Grow Your Business Online",
    description:
      "Find a trusted digital marketing agency in Saharanpur for SEO, PPC, social media, web design, and content that drive real leads and business growth.",
    url: "https://www.zentrixinfotech.com/cities/saharanpur/digital-marketing-agency-in-saharanpur",
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
    title: "Digital Marketing Agency in Saharanpur | Grow Your Business Online",
    description:
      "Find a trusted digital marketing agency in Saharanpur for SEO, PPC, social media, web design, and content that drive real leads and business growth.",
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