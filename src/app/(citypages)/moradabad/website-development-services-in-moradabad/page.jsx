import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Website Development Services in Moradabad | Zentrix Infotech",
  description:
    "Explore website development services in Moradabad from Zentrix Infotech: custom sites, e-commerce, web apps, redesign and support. Request a quote.",
  keywords:
    "website development services in Moradabad, web development services Moradabad, website design services Moradabad, custom website development services Moradabad, ecommerce website development services Moradabad, web application development Moradabad, website redesign services Moradabad, website maintenance services Moradabad, business website development services, responsive web design services Moradabad, professional website services Moradabad UP, website development packages Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/website-development-services-in-moradabad",
  },


  openGraph: {
    title: "Website Development Services in Moradabad | Zentrix Infotech",
    description:
      "Explore website development services in Moradabad from Zentrix Infotech: custom sites, e-commerce, web apps, redesign and support. Request a quote.",
    url: "https://www.zentrixinfotech.com/moradabad/website-development-services-in-moradabad",
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
    title: "Website Development Services in Moradabad | Zentrix Infotech",
    description:
      "Explore website development services in Moradabad from Zentrix Infotech: custom sites, e-commerce, web apps, redesign and support. Request a quote.",
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