import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Services in Moradabad | Zentrix",
  description:
    "Explore software development services in Moradabad from Zentrix Infotech: custom software, ERP, CRM, web and mobile apps, cloud and more. Get a free quote today.",
  keywords:
    "software development services in Moradabad, software development services Moradabad, custom software development services, business software services Moradabad, ERP development services Moradabad, CRM development services Moradabad, web application development services, mobile app development services Moradabad, software integration services, cloud software services Moradabad, software maintenance services, software testing services, UI/UX design services Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-services-in-moradabad",
  },


  openGraph: {
    title: "Software Development Services in Moradabad | Zentrix",
    description:
      "Explore software development services in Moradabad from Zentrix Infotech: custom software, ERP, CRM, web and mobile apps, cloud and more. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-services-in-moradabad",
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
    title: "Software Development Services in Moradabad | Zentrix",
    description:
      "Explore software development services in Moradabad from Zentrix Infotech: custom software, ERP, CRM, web and mobile apps, cloud and more. Get a free quote today.",
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