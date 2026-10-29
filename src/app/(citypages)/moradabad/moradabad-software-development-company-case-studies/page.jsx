import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";



export const metadata = {
  title:
    "Software Development Case Studies in Moradabad | Zentrix",
  description:
    "Explore software development case studies from Zentrix Infotech, a Moradabad company. See how we built web, e-commerce and business platforms for real clients.",
  keywords:
    "moradabad software development company case studies, software development case studies moradabad, it company case studies moradabad, web development case study moradabad, e-commerce development case study india, custom software case study, software company portfolio moradabad, client success stories software development, zentrix infotech case studies, software project examples moradabad, business platform development case study, software development company moradabad projects",



  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-case-studies",
  },



  openGraph: {
    title:
      "Software Development Case Studies in Moradabad | Zentrix",
    description:
      "Explore software development case studies from Zentrix Infotech, a Moradabad company. See how we built web, e-commerce and business platforms for real clients.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-case-studies",
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
    title:
      "Software Development Case Studies in Moradabad | Zentrix",
    description:
      "Explore software development case studies from Zentrix Infotech, a Moradabad company. See how we built web, e-commerce and business platforms for real clients.",
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