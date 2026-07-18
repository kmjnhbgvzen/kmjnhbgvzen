import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services for Healthcare USA | Zentrix Infotech",
  description:
    "Looking for SEO services for healthcare in USA? Learn proven medical SEO strategies, HIPAA-safe practices, pricing, and tips to rank higher and gain patients.",
  keywords:
    "seo services for healthcare usa, healthcare seo company, medical seo agency, hospital seo services, doctor seo services usa, healthcare digital marketing usa, clinic seo agency near me, dental seo services, healthcare website seo, medical practice seo experts",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/seo-services-for-healthcare-usa",
  },
  openGraph: {
    title: "SEO Services for Healthcare USA | Zentrix Infotech",
    description:
      "Looking for SEO services for healthcare in USA? Learn proven medical SEO strategies, HIPAA-safe practices, pricing, and tips to rank higher and gain patients.",
    url: "https://www.zentrixinfotech.com/usa/seo-services-for-healthcare-usa",
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
    title: "SEO Services for Healthcare USA | Zentrix Infotech",
    description:
      "Looking for SEO services for healthcare in USA? Learn proven medical SEO strategies, HIPAA-safe practices, pricing, and tips to rank higher and gain patients.",
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