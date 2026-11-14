import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Medical Marketing Company Moradabad Near Me | Zentrix",
  description:
    "Looking for a medical marketing company near you in Moradabad? Zentrix Infotech helps clinics and hospitals get found on Google and get more patient enquiries.",
  keywords:
    "medical marketing company Moradabad near me, medical marketing company in Moradabad, healthcare marketing near me, doctor marketing agency near me, hospital marketing company Moradabad, clinic marketing services Moradabad, local SEO for doctors Moradabad, Google Business Profile for clinics, patient lead generation Moradabad, digital marketing for hospitals, healthcare digital marketing Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-company-moradabad-near-me",
  },

  openGraph: {
    title: "Medical Marketing Company Moradabad Near Me | Zentrix",
    description:
      "Looking for a medical marketing company near you in Moradabad? Zentrix Infotech helps clinics and hospitals get found on Google and get more patient enquiries.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-company-moradabad-near-me",
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
    title: "Medical Marketing Company Moradabad Near Me | Zentrix",
    description:
      "Looking for a medical marketing company near you in Moradabad? Zentrix Infotech helps clinics and hospitals get found on Google and get more patient enquiries.",
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