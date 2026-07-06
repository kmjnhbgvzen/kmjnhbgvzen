import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Prayagraj | Zentrix Infotech",
  description:
    "Elevate your brand with professional graphic design services in Prayagraj. Zentrix Infotech creates logos, branding, social media graphics & marketing creatives that stand out.",
  keywords:
    "graphic design services in Prayagraj, graphic designer Prayagraj, logo design company Prayagraj, branding agency Prayagraj, creative design agency Prayagraj, social media design services Prayagraj, professional graphic design Prayagraj, best graphic designer near me",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/graphic-design-services-in-prayagraj",
  },
  openGraph: {
    title: "Graphic Design Services in Prayagraj | Zentrix Infotech",
    description:
      "Elevate your brand with professional graphic design services in Prayagraj. Zentrix Infotech creates logos, branding, social media graphics & marketing creatives that stand out.",
    url: "https://www.zentrixinfotech.com/prayagraj/graphic-design-services-in-prayagraj",
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
    title: "Graphic Design Services in Prayagraj | Zentrix Infotech",
    description:
      "Elevate your brand with professional graphic design services in Prayagraj. Zentrix Infotech creates logos, branding, social media graphics & marketing creatives that stand out.",
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