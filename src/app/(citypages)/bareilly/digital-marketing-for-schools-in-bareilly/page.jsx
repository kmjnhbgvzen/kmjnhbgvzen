import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Schools in Bareilly | Zentrix Infotech",
  description:
    "Boost admissions with expert digital marketing for schools in Bareilly by Zentrix Infotech. Websites, SEO & campaigns that build trust with parents.",
  keywords:
    "digital marketing for schools in Bareilly, school marketing agency Bareilly, school admission marketing services, education marketing company Bareilly, school website development Bareilly, school SEO services Bareilly, best digital marketing agency for schools, school social media marketing Bareilly, admission campaign services Bareilly, coaching institute marketing Bareilly, affordable school marketing company, education digital marketing agency near me",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-schools-bareilly",
  },

  openGraph: {
    title: "Digital Marketing for Schools in Bareilly | Zentrix Infotech",
    description:
      "Boost admissions with expert digital marketing for schools in Bareilly by Zentrix Infotech. Websites, SEO & campaigns that build trust with parents.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-schools-bareilly",
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
    title: "Digital Marketing for Schools in Bareilly | Zentrix Infotech",
    description:
      "Boost admissions with expert digital marketing for schools in Bareilly by Zentrix Infotech. Websites, SEO & campaigns that build trust with parents.",
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