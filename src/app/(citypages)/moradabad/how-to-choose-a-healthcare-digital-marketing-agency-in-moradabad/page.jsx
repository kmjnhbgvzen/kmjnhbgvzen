import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "How to Choose a Healthcare Digital Marketing Agency",
  description:
    "Learn how to choose a healthcare digital marketing agency in Moradabad with a simple step-by-step process, red flags to avoid and contract tips. Zentrix Infotech explains it clearly.",
  keywords:
    "how to choose a healthcare digital marketing agency in Moradabad, choosing a healthcare marketing agency, how to hire a medical marketing agency, healthcare digital marketing agency Moradabad, questions to ask a digital marketing agency, red flags in digital marketing agencies, medical marketing agency checklist, hospital marketing agency selection, clinic marketing agency, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-a-healthcare-digital-marketing-agency-in-moradabad",
  },


  openGraph: {
    title: "How to Choose a Healthcare Digital Marketing Agency",
    description:
      "Learn how to choose a healthcare digital marketing agency in Moradabad with a simple step-by-step process, red flags to avoid and contract tips. Zentrix Infotech explains it clearly.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-a-healthcare-digital-marketing-agency-in-moradabad",
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
    title: "How to Choose a Healthcare Digital Marketing Agency",
    description:
      "Learn how to choose a healthcare digital marketing agency in Moradabad with a simple step-by-step process, red flags to avoid and contract tips. Zentrix Infotech explains it clearly.",
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