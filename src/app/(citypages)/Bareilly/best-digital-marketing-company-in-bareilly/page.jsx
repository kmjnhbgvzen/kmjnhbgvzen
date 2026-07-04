import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Bareilly | Top Agencies 2026",
  description:
    "Searching for the best digital marketing company in Bareilly? Learn what separates top agencies, key services to expect, and how to choose the right partner for growth.",
  keywords:
    "best digital marketing company in Bareilly, top digital marketing agency Bareilly, best SEO company Bareilly, best social media agency Bareilly, digital marketing experts Bareilly, top marketing agency UP, reliable digital marketing company Bareilly, digital marketing services Bareilly, trusted marketing agency Bareilly, affordable digital marketing company Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/bareilly/best-digital-marketing-company-in-bareilly",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Bareilly | Top Agencies 2026",
    description:
      "Searching for the best digital marketing company in Bareilly? Learn what separates top agencies, key services to expect, and how to choose the right partner for growth.",
    url: "https://www.zentrixinfotech.com/cities/bareilly/best-digital-marketing-company-in-bareilly",
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
    title: "Best Digital Marketing Company in Bareilly | Top Agencies 2026",
    description:
      "Searching for the best digital marketing company in Bareilly? Learn what separates top agencies, key services to expect, and how to choose the right partner for growth.",
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