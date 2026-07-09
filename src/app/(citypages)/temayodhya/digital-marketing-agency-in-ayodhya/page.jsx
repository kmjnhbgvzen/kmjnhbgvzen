import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Ayodhya | SEO, Social Media & Web Growth Experts",
  description:
    "Looking for the best digital marketing agency in Ayodhya? Get result-driven SEO, social media marketing, PPC, and web design services to grow your local business online.",
  keywords:
    "digital marketing agency in Ayodhya, digital marketing company Ayodhya, SEO services Ayodhya, social media marketing Ayodhya, website designing company Ayodhya, best digital marketing agency near me, PPC services Ayodhya, online marketing company Ayodhya, local SEO Ayodhya, ecommerce marketing Ayodhya",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya",
  },
  openGraph: {
    title: "Digital Marketing Agency in Ayodhya | SEO, Social Media & Web Growth Experts",
    description:
      "Looking for the best digital marketing agency in Ayodhya? Get result-driven SEO, social media marketing, PPC, and web design services to grow your local business online.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-in-ayodhya",
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
    title: "Digital Marketing Agency in Ayodhya | SEO, Social Media & Web Growth Experts",
    description:
      "Looking for the best digital marketing agency in Ayodhya? Get result-driven SEO, social media marketing, PPC, and web design services to grow your local business online.",
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