import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose a Hospital Marketing Agency in Moradabad",
  description:
    "Learn how to choose a digital marketing agency for hospitals in Moradabad: key questions, red flags, contract tips and a simple scorecard. Zentrix Infotech guide.",
  keywords:
    "how to choose digital marketing agency for hospitals Moradabad, hospital marketing agency Moradabad, choose healthcare marketing agency, questions to ask a hospital marketing agency, hospital digital marketing agency checklist, red flags in marketing agencies, hospital SEO agency, healthcare marketing contract, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-digital-marketing-agency-for-hospitals-moradabad",
  },

  openGraph: {
    title: "How to Choose a Hospital Marketing Agency in Moradabad",
    description:
      "Learn how to choose a digital marketing agency for hospitals in Moradabad: key questions, red flags, contract tips and a simple scorecard. Zentrix Infotech guide.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-digital-marketing-agency-for-hospitals-moradabad",
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
    title: "How to Choose a Hospital Marketing Agency in Moradabad",
    description:
      "Learn how to choose a digital marketing agency for hospitals in Moradabad: key questions, red flags, contract tips and a simple scorecard. Zentrix Infotech guide.",
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