import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose a Website Development Company in Moradabad",
  description:
    "Not sure how to choose a website development company in Moradabad? Use this simple checklist, key questions and red flags, from Zentrix Infotech.",
  keywords:
    "how to choose a website development company in Moradabad, choose website development company Moradabad, how to select a web development company Moradabad, website development company checklist, questions to ask a web development company, red flags web development company, hire website developer Moradabad, best website development company in Moradabad, website development company in Moradabad, website designing company Moradabad, web development services Moradabad, website development cost Moradabad, Zentrix Infotech Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-a-website-development-company-in-moradabad",
  },

  openGraph: {
    title: "How to Choose a Website Development Company in Moradabad",
    description:
      "Not sure how to choose a website development company in Moradabad? Use this simple checklist, key questions and red flags, from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-a-website-development-company-in-moradabad",
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
    title: "How to Choose a Website Development Company in Moradabad",
    description:
      "Not sure how to choose a website development company in Moradabad? Use this simple checklist, key questions and red flags, from Zentrix Infotech.",
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