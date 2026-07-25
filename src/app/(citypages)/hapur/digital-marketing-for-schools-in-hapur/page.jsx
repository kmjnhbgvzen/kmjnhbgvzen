import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Schools in Hapur | Boost Admissions Online",
  description:
    "Looking for digital marketing for schools in Hapur? Zentrix Infotech helps schools & coaching institutes get more admission enquiries through SEO & ads.",
  keywords:
    "digital marketing for schools in Hapur, school marketing agency Hapur, coaching institute marketing company, school admission marketing services, school website development Hapur, education marketing agency UP, school SEO services near me, coaching center digital marketing, school social media marketing agency, education lead generation services, school Google ads agency, best education marketing company, digital marketing agency Delhi NCR, school branding services Hapur, admission campaign management company",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/digital-marketing-for-schools-in-hapur",
  },
  openGraph: {
    title: "Digital Marketing for Schools in Hapur | Boost Admissions Online",
    description:
      "Looking for digital marketing for schools in Hapur? Zentrix Infotech helps schools & coaching institutes get more admission enquiries through SEO & ads.",
    url: "https://www.zentrixinfotech.com/hapur/digital-marketing-for-schools-in-hapur",
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
    title: "Digital Marketing for Schools in Hapur | Boost Admissions Online",
    description:
      "Looking for digital marketing for schools in Hapur? Zentrix Infotech helps schools & coaching institutes get more admission enquiries through SEO & ads.",
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
