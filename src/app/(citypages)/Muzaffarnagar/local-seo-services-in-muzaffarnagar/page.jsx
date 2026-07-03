import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Muzaffarnagar | Logos, Branding & Print",
  description:
    "Professional graphic design services in Muzaffarnagar — logo design, branding, packaging, social media & print design that make your business stand out.",
  keywords:
    "graphic design services in Muzaffarnagar, graphic designer Muzaffarnagar, logo design company Muzaffarnagar, branding agency Muzaffarnagar, packaging design Muzaffarnagar, social media graphic design Muzaffarnagar, best graphic design company Muzaffarnagar",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/muzaffarnagar/graphic-design-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "Graphic Design Services in Muzaffarnagar | Logos, Branding & Print",
    description:
      "Professional graphic design services in Muzaffarnagar — logo design, branding, packaging, social media & print design that make your business stand out.",
    url: "https://www.zentrixinfotech.com/cities/muzaffarnagar/graphic-design-services-in-muzaffarnagar",
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
    title: "Graphic Design Services in Muzaffarnagar | Logos, Branding & Print",
    description:
      "Professional graphic design services in Muzaffarnagar — logo design, branding, packaging, social media & print design that make your business stand out.",
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