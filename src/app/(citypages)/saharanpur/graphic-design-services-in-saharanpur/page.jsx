import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Saharanpur | Zentrix Infotech",
  description:
    "Looking for graphic design services in Saharanpur? Get professional logo design, branding, packaging, brochure and social media graphics from expert designers who understand local businesses.",
  keywords:
    "graphic design services in Saharanpur, graphic designer Saharanpur, logo design Saharanpur, branding agency Saharanpur, packaging design Saharanpur, brochure design Saharanpur, best graphic design company Saharanpur, freelance graphic designer Saharanpur, creative design agency UP, affordable graphic design services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/graphic-design-services-in-saharanpur",
  },
  openGraph: {
    title: "Graphic Design Services in Saharanpur | Zentrix Infotech",
    description:
      "Looking for graphic design services in Saharanpur? Get professional logo design, branding, packaging, brochure and social media graphics from expert designers who understand local businesses.",
    url: "https://www.zentrixinfotech.com/saharanpur/graphic-design-services-in-saharanpur",
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
    title: "Graphic Design Services in Saharanpur | Zentrix Infotech",
    description:
      "Looking for graphic design services in Saharanpur? Get professional logo design, branding, packaging, brochure and social media graphics from expert designers who understand local businesses.",
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