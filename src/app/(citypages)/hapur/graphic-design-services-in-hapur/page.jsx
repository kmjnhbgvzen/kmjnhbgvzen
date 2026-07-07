import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Hapur | Logo, Branding & Creative Design",
  description:
    "Looking for professional graphic design services in Hapur? Get custom logo design, branding, print, and digital graphics that make your business stand out.",
  keywords:
    "graphic design services in Hapur, graphic designer Hapur, logo design company Hapur, branding services Hapur, creative design agency Hapur, print and digital design Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/graphic-design-services-in-hapur",
  },
  openGraph: {
    title: "Graphic Design Services in Hapur | Logo, Branding & Creative Design",
    description:
      "Looking for professional graphic design services in Hapur? Get custom logo design, branding, print, and digital graphics that make your business stand out.",
    url: "https://www.zentrixinfotech.com/hapur/graphic-design-services-in-hapur",
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
    title: "Graphic Design Services in Hapur | Logo, Branding & Creative Design",
    description:
      "Looking for professional graphic design services in Hapur? Get custom logo design, branding, print, and digital graphics that make your business stand out.",
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