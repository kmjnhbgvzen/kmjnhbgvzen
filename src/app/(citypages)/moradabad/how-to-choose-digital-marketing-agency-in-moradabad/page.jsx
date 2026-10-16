import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose a Digital Marketing Agency in Moradabad",
  description:
    "Learn how to choose the right digital marketing agency in Moradabad. Key questions, red flags and a simple checklist from Zentrix Infotech to protect your budget.",
  keywords:
    "how to choose digital marketing agency in Moradabad, how to choose a digital marketing company Moradabad, best digital marketing agency Moradabad, digital marketing agency checklist, questions to ask a digital marketing agency, digital marketing agency red flags, hire digital marketing agency Moradabad, digital marketing company in Moradabad, digital marketing services Moradabad, digital marketing for small business Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-digital-marketing-agency-in-moradabad",
  },

  openGraph: {
    title: "How to Choose a Digital Marketing Agency in Moradabad",
    description:
      "Learn how to choose the right digital marketing agency in Moradabad. Key questions, red flags and a simple checklist from Zentrix Infotech to protect your budget.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-digital-marketing-agency-in-moradabad",
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
    title: "How to Choose a Digital Marketing Agency in Moradabad",
    description:
      "Learn how to choose the right digital marketing agency in Moradabad. Key questions, red flags and a simple checklist from Zentrix Infotech to protect your budget.",
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