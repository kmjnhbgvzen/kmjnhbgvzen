import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices"

export const metadata = {
  title: "Custom Software Development in Moradabad | Business Solutions",
  
  description:
    "Looking for custom software development in Moradabad? We build tailored ERP, CRM & business software for local SMEs.",

  keywords:
    "custom software development Moradabad, software company in Moradabad, ERP software Moradabad, CRM development Moradabad, business software Moradabad, local software developer Moradabad, affordable software solutions Moradabad, professional software development Moradabad",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/moradabad/custom-website-development-company-in-moradabad",
  },
  

  // ✅ OPEN GRAPH (SOCIAL SHARING)
  openGraph: {
    title:
      "Custom Software Development in Moradabad | Business Solutions",

    description:
      "Looking for custom software development in Moradabad? We build tailored ERP, CRM & business software for local SMEs.",

    url: "https://www.zentrixinfotech.com/cities/moradabad/custom-website-development-company-in-moradabad",
    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development in Moradabad | Business Solutions",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "Custom Software Development in Moradabad | Business Solutions",

    description:
      "Looking for custom software development in Moradabad? We build tailored ERP, CRM & business software for local SMEs.",

    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  // ✅ FAVICON
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