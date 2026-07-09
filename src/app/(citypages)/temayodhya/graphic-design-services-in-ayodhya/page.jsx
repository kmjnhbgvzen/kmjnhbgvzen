import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Ayodhya | Logos, Branding & Marketing Visuals",
  description:
    "Get professional graphic design services in Ayodhya for logos, brochures, social media creatives, and branding that helps your business stand out to tourists and locals alike.",
  keywords:
    "graphic design services in Ayodhya, logo design Ayodhya, branding company Ayodhya, brochure design Ayodhya, social media creatives Ayodhya, business branding services, graphic designer near me, packaging design Ayodhya, marketing design agency, visual branding company",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/graphic-design-services-in-ayodhya",
  },
  openGraph: {
    title: "Graphic Design Services in Ayodhya | Logos, Branding & Marketing Visuals",
    description:
      "Get professional graphic design services in Ayodhya for logos, brochures, social media creatives, and branding that helps your business stand out to tourists and locals alike.",
    url: "https://www.zentrixinfotech.com/ayodhya/graphic-design-services-in-ayodhya",
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
    title: "Graphic Design Services in Ayodhya | Logos, Branding & Marketing Visuals",
    description:
      "Get professional graphic design services in Ayodhya for logos, brochures, social media creatives, and branding that helps your business stand out to tourists and locals alike.",
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