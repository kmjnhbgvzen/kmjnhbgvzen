import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top PPC Agencies in Ayodhya – Compare & Get Ad Results",
  description:
    "Explore top PPC agencies serving Ayodhya, what a good Google Ads or Meta Ads partner should offer, pricing models, and how to choose the right one.",
  keywords:
    "top ppc agencies in ayodhya, ppc agency ayodhya, google ads agency ayodhya, meta ads agency ayodhya, ppc management services ayodhya, best ppc company uttar pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/top-ppc-agencies-in-ayodhya",
  },
  openGraph: {
    title: "Top PPC Agencies in Ayodhya – Compare & Get Ad Results",
    description:
      "Explore top PPC agencies serving Ayodhya, what a good Google Ads or Meta Ads partner should offer, pricing models, and how to choose the right one.",
    url: "https://www.zentrixinfotech.com/ayodhya/top-ppc-agencies-in-ayodhya",
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
    title: "Top PPC Agencies in Ayodhya – Compare & Get Ad Results",
    description:
      "Explore top PPC agencies serving Ayodhya, what a good Google Ads or Meta Ads partner should offer, pricing models, and how to choose the right one.",
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