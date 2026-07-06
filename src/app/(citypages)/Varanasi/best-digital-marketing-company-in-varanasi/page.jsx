import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Varanasi | Grow Your Business Online",
  description:
    "Looking for the best digital marketing company in Varanasi? Discover key services, what to look for in an agency, and how to choose the right partner for growth.",
  keywords:
    "best digital marketing company in Varanasi, digital marketing agency Varanasi, SEO company Varanasi, social media marketing Varanasi, website development Varanasi, online marketing services Varanasi, PPC company Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/best-digital-marketing-company-in-varanasi",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Varanasi | Grow Your Business Online",
    description:
      "Looking for the best digital marketing company in Varanasi? Discover key services, what to look for in an agency, and how to choose the right partner for growth.",
    url: "https://www.zentrixinfotech.com/varanasi/best-digital-marketing-company-in-varanasi",
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
    title: "Best Digital Marketing Company in Varanasi | Grow Your Business Online",
    description:
      "Looking for the best digital marketing company in Varanasi? Discover key services, what to look for in an agency, and how to choose the right partner for growth.",
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