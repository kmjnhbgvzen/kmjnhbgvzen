import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Real Estate in Bareilly | Zentrix Infotech",
  description:
    "Generate quality buyer leads with expert digital marketing for real estate in Bareilly by Zentrix Infotech. Websites, SEO & ads that fill your site visits.",
  keywords:
    "digital marketing for real estate in Bareilly, real estate marketing agency Bareilly, property marketing company Bareilly, real estate SEO services Bareilly, real estate lead generation Bareilly, best digital marketing agency for real estate, real estate website development Bareilly, builder marketing services Bareilly, property ads agency Bareilly, real estate social media marketing, affordable real estate marketing company, real estate digital marketing agency near me",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-real-estate-bareilly",
  },

  openGraph: {
    title: "Digital Marketing for Real Estate in Bareilly | Zentrix Infotech",
    description:
      "Generate quality buyer leads with expert digital marketing for real estate in Bareilly by Zentrix Infotech. Websites, SEO & ads that fill your site visits.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-real-estate-bareilly",
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
    title: "Digital Marketing for Real Estate in Bareilly | Zentrix Infotech",
    description:
      "Generate quality buyer leads with expert digital marketing for real estate in Bareilly by Zentrix Infotech. Websites, SEO & ads that fill your site visits.",
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