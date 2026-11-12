import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Medical Ad Agency Near Me | Zentrix Infotech",
  description:
    "Looking for a medical ad agency near me? Zentrix Infotech runs ethical Google, social media and local ad campaigns for hospitals, clinics and doctors from Moradabad and Ghaziabad. Call now.",
  keywords:
    "medical ad agency near me, medical advertising agency, healthcare advertising agency near me, hospital advertising agency, clinic advertising services, doctor advertising agency, Google ads for doctors, Facebook ads for clinics, healthcare ad campaigns, medical advertising Moradabad, patient lead generation ads, healthcare marketing agency, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-ad-agency-near-me",
  },


  openGraph: {
    title: "Medical Ad Agency Near Me | Zentrix Infotech",
    description:
      "Looking for a medical ad agency near me? Zentrix Infotech runs ethical Google, social media and local ad campaigns for hospitals, clinics and doctors from Moradabad and Ghaziabad. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-ad-agency-near-me",
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
    title: "Medical Ad Agency Near Me | Zentrix Infotech",
    description:
      "Looking for a medical ad agency near me? Zentrix Infotech runs ethical Google, social media and local ad campaigns for hospitals, clinics and doctors from Moradabad and Ghaziabad. Call now.",
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