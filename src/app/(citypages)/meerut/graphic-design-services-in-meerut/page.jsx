import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Meerut | Logo, Branding & Creative Design",
  description:
    "Get professional graphic design services in Meerut — logo design, branding, social media creatives, and print design that make your business stand out.",
  keywords:
    "graphic design services in Meerut, graphic designer Meerut, logo design company Meerut, branding agency Meerut, creative design services Meerut, social media graphic design Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/graphic-design-services-in-meerut",
  },
  openGraph: {
    title: "Graphic Design Services in Meerut | Logo, Branding & Creative Design",
    description:
      "Get professional graphic design services in Meerut — logo design, branding, social media creatives, and print design that make your business stand out.",
    url: "https://www.zentrixinfotech.com/meerut/graphic-design-services-in-meerut",
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
    title: "Graphic Design Services in Meerut | Logo, Branding & Creative Design",
    description:
      "Get professional graphic design services in Meerut — logo design, branding, social media creatives, and print design that make your business stand out.",
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