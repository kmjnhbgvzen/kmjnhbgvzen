import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Saharanpur | Zentrix Infotech",
  description:
    "Looking for a trusted digital marketing agency in Saharanpur? Get SEO, PPC, social media & web solutions that drive real leads. Call Zentrix Infotech today.",
  keywords:
    "digital marketing agency in Saharanpur, digital marketing company Saharanpur, SEO services Saharanpur, social media marketing Saharanpur, best digital marketing agency near me, web design company Saharanpur, PPC services Saharanpur, local SEO Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/digital-marketing-agency-in-saharanpur",
  },
  openGraph: {
    title: "Digital Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Saharanpur? Get SEO, PPC, social media & web solutions that drive real leads. Call Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/saharanpur/digital-marketing-agency-in-saharanpur",
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
    title: "Digital Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Saharanpur? Get SEO, PPC, social media & web solutions that drive real leads. Call Zentrix Infotech today.",
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