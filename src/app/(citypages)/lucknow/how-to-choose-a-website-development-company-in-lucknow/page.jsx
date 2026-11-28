import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose a Website Development Company in Lucknow",

  description:
    "Not sure how to choose a website development company in Lucknow? Follow this simple step-by-step guide, then see what Zentrix Infotech offers. Call us.",

  keywords: [
    "how to choose a website development company in Lucknow",
    "choosing a website development company Lucknow",
    "how to hire a website developer in Lucknow",
    "website development company selection guide",
    "questions to ask a website development company",
    "website development company in Lucknow",
    "compare website development companies Lucknow",
    "website company checklist",
    "website development contract checklist",
    "red flags website company",
    "hire website developer Lucknow",
    "website development services Lucknow",
    "how to choose a web design company",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/how-to-choose-a-website-development-company-in-lucknow",
  },

  openGraph: {
    title: "How to Choose a Website Development Company in Lucknow",
    description:
      "Not sure how to choose a website development company in Lucknow? Follow this simple step-by-step guide, then see what Zentrix Infotech offers. Call us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/how-to-choose-a-website-development-company-in-lucknow",
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
    title: "How to Choose a Website Development Company in Lucknow",
    description:
      "Not sure how to choose a website development company in Lucknow? Follow this simple step-by-step guide, then see what Zentrix Infotech offers. Call us.",
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