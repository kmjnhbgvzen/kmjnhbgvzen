import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose Enterprise Software Developer Moradabad",
  description:
    "Learn how to choose an enterprise software developer in Moradabad: key checks, questions, red flags and a scorecard. Talk to Zentrix Infotech for a free consultation.",
  keywords:
    "how to choose enterprise software developer moradabad, enterprise software developer in moradabad, enterprise software development company moradabad, choose software development company moradabad, hire enterprise software developers moradabad, custom enterprise software moradabad, best enterprise software developers moradabad, enterprise application development moradabad, ERP developer moradabad, software development partner moradabad, enterprise software cost moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-enterprise-software-developer-moradabad",
  },

  openGraph: {
    title: "How to Choose Enterprise Software Developer Moradabad",
    description:
      "Learn how to choose an enterprise software developer in Moradabad: key checks, questions, red flags and a scorecard. Talk to Zentrix Infotech for a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-enterprise-software-developer-moradabad",
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
    title: "How to Choose Enterprise Software Developer Moradabad",
    description:
      "Learn how to choose an enterprise software developer in Moradabad: key checks, questions, red flags and a scorecard. Talk to Zentrix Infotech for a free consultation.",
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