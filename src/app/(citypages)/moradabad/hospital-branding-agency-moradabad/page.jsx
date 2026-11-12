import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Hospital Branding Agency in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a hospital branding agency in Moradabad. We build trusted hospital identities with logo, signage, website, content and reputation so patients choose you with confidence.",
  keywords:
    "hospital branding agency Moradabad, hospital branding services Moradabad, hospital logo design Moradabad, hospital brand identity, healthcare branding agency, nursing home branding Moradabad, hospital marketing Moradabad, hospital website design Moradabad, medical branding services, hospital reputation management, hospital rebranding, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hospital-branding-agency-moradabad",
  },


  openGraph: {
    title: "Hospital Branding Agency in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a hospital branding agency in Moradabad. We build trusted hospital identities with logo, signage, website, content and reputation so patients choose you with confidence.",
    url: "https://www.zentrixinfotech.com/moradabad/hospital-branding-agency-moradabad",
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
    title: "Hospital Branding Agency in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a hospital branding agency in Moradabad. We build trusted hospital identities with logo, signage, website, content and reputation so patients choose you with confidence.",
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