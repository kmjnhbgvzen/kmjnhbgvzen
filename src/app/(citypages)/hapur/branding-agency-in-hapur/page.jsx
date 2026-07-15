import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Hapur | Best Brand Identity & Logo Design Company",
  description:
    "Looking for a trusted branding agency in Hapur? Zentrix Infotech offers logo design, brand identity, packaging & digital branding services to grow your business locally and online.",
  keywords:
    "branding agency in Hapur, branding company in Hapur, brand identity design Hapur, logo design agency Hapur, best branding agency near me, digital branding services Hapur, brand strategy company UP, graphic design agency Hapur, packaging design company Hapur, business branding solutions Hapur, top branding agency Uttar Pradesh, corporate branding services Hapur, startup branding agency, social media branding company Hapur, website and branding agency Hapur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/branding-agency-hapur",
  },
  openGraph: {
    title: "Branding Agency in Hapur | Best Brand Identity & Logo Design Company",
    description:
      "Looking for a trusted branding agency in Hapur? Zentrix Infotech offers logo design, brand identity, packaging & digital branding services to grow your business locally and online.",
    url: "https://www.zentrixinfotech.com/hapur/branding-agency-hapur",
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
    title: "Branding Agency in Hapur | Best Brand Identity & Logo Design Company",
    description:
      "Looking for a trusted branding agency in Hapur? Zentrix Infotech offers logo design, brand identity, packaging & digital branding services to grow your business locally and online.",
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