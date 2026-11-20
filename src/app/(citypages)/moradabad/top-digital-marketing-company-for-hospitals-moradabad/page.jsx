import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Digital Marketing Company for Hospitals in Moradabad",
  description:
    "Looking for the top digital marketing company for hospitals in Moradabad? Zentrix Infotech offers hospital SEO, ads, reputation and patient enquiry growth.",
  keywords:
    "top digital marketing company for hospitals Moradabad, hospital digital marketing Moradabad, digital marketing company for hospitals, hospital marketing agency Moradabad, healthcare digital marketing Moradabad, hospital SEO Moradabad, hospital website development Moradabad, hospital Google Ads Moradabad, hospital reputation management, patient enquiry generation, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/top-digital-marketing-company-for-hospitals-moradabad",
  },

  openGraph: {
    title: "Top Digital Marketing Company for Hospitals in Moradabad",
    description:
      "Looking for the top digital marketing company for hospitals in Moradabad? Zentrix Infotech offers hospital SEO, ads, reputation and patient enquiry growth.",
    url: "https://www.zentrixinfotech.com/moradabad/top-digital-marketing-company-for-hospitals-moradabad",
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
    title: "Top Digital Marketing Company for Hospitals in Moradabad",
    description:
      "Looking for the top digital marketing company for hospitals in Moradabad? Zentrix Infotech offers hospital SEO, ads, reputation and patient enquiry growth.",
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