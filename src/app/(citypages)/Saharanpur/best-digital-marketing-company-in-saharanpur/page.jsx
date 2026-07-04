import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Saharanpur | Full-Service Agency",
  description:
    "Searching for the best digital marketing company in Saharanpur? Get SEO, social media, PPC & web development under one roof. Free consultation & audit available.",
  keywords:
    "best digital marketing company in Saharanpur, digital marketing agency Saharanpur, top digital marketing company Saharanpur, SEO and social media agency Saharanpur, online marketing company Saharanpur, digital marketing services UP, full service digital agency Saharanpur, internet marketing company Saharanpur, affordable digital marketing Saharanpur, digital marketing experts Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/best-digital-marketing-company-in-saharanpur",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Saharanpur | Full-Service Agency",
    description:
      "Searching for the best digital marketing company in Saharanpur? Get SEO, social media, PPC & web development under one roof. Free consultation & audit available.",
    url: "https://www.zentrixinfotech.com/cities/saharanpur/best-digital-marketing-company-in-saharanpur",
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
    title: "Best Digital Marketing Company in Saharanpur | Full-Service Agency",
    description:
      "Searching for the best digital marketing company in Saharanpur? Get SEO, social media, PPC & web development under one roof. Free consultation & audit available.",
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