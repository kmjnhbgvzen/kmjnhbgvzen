import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title:
    "Software Development Company in Moradabad Contact | Zentrix",
  description:
    "Contact Zentrix Infotech, a trusted software development company in Moradabad. Call +91 72488 00839 or email us for a free consultation and a clear quote.",
  keywords:
    "moradabad software development company contact, software company in moradabad contact number, software development company moradabad address, contact zentrix infotech, it company moradabad phone number, software developers moradabad contact, hire software company moradabad, software development enquiry moradabad, custom software development moradabad, get software quote moradabad, it solutions company moradabad contact, Zentrix Infotech Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-contact",
  },


  openGraph: {
    title:
      "Software Development Company in Moradabad Contact | Zentrix",
    description:
      "Contact Zentrix Infotech, a trusted software development company in Moradabad. Call +91 72488 00839 or email us for a free consultation and a clear quote.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-contact",
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
      "Software Development Company in Moradabad Contact | Zentrix",
    description:
      "Contact Zentrix Infotech, a trusted software development company in Moradabad. Call +91 72488 00839 or email us for a free consultation and a clear quote.",
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