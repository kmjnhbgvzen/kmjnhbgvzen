import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Case Studies in Moradabad | Zentrix Infotech",
  description:
    "Explore digital marketing case studies from Moradabad. See how Zentrix Infotech helped hospitals, resorts, dealers and brands get more enquiries and visibility.",
  keywords:
    "digital marketing case studies Moradabad, digital marketing success stories Moradabad, digital marketing results Moradabad, digital marketing company in Moradabad, SEO case study Moradabad, social media marketing case study Moradabad, Google Ads case study Moradabad, lead generation case study Moradabad, digital marketing portfolio Moradabad, client success stories Moradabad, Zentrix Infotech case studies",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-moradabad-case-studies",
  },

  openGraph: {
    title: "Digital Marketing Case Studies in Moradabad | Zentrix Infotech",
    description:
      "Explore digital marketing case studies from Moradabad. See how Zentrix Infotech helped hospitals, resorts, dealers and brands get more enquiries and visibility.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-moradabad-case-studies",
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
    title: "Digital Marketing Case Studies in Moradabad | Zentrix Infotech",
    description:
      "Explore digital marketing case studies from Moradabad. See how Zentrix Infotech helped hospitals, resorts, dealers and brands get more enquiries and visibility.",
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