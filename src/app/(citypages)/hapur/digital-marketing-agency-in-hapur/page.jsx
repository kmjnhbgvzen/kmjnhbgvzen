import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Hapur | Best SEO, PPC & Social Media Experts",
  description:
    "Looking for a trusted digital marketing agency in Hapur? Get result-driven SEO, PPC, social media & website services to grow your local business online.",
  keywords:
    "digital marketing agency in Hapur, digital marketing company Hapur, SEO services Hapur, social media marketing Hapur, PPC services Hapur, website development Hapur, best digital marketing agency near me, online marketing company Hapur, local SEO Hapur, affordable digital marketing services Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/digital-marketing-agency-in-hapur",
  },
  openGraph: {
    title: "Digital Marketing Agency in Hapur | Best SEO, PPC & Social Media Experts",
    description:
      "Looking for a trusted digital marketing agency in Hapur? Get result-driven SEO, PPC, social media & website services to grow your local business online.",
    url: "https://www.zentrixinfotech.com/cities/hapur/digital-marketing-agency-in-hapur",
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
    title: "Digital Marketing Agency in Hapur | Best SEO, PPC & Social Media Experts",
    description:
      "Looking for a trusted digital marketing agency in Hapur? Get result-driven SEO, PPC, social media & website services to grow your local business online.",
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