import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Website Development Company in Lucknow | Zentrix",

  description:
    "Searching for the top website development company in Lucknow? Use our shortlist guide, then see what Zentrix Infotech builds. Call us for a clear quote.",

  keywords: [
    "top website development company in Lucknow",
    "top web development company Lucknow",
    "leading website development company Lucknow",
    "best website development company Lucknow",
    "website development company in Lucknow",
    "professional website developers Lucknow",
    "custom website development Lucknow",
    "e-commerce website development Lucknow",
    "how to choose a website development company",
    "website company shortlist",
    "compare website development companies",
    "hire website developers Lucknow",
    "website development services Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/top-website-development-company-in-lucknow",
  },

  openGraph: {
    title: "Top Website Development Company in Lucknow | Zentrix",
    description:
      "Searching for the top website development company in Lucknow? Use our shortlist guide, then see what Zentrix Infotech builds. Call us for a clear quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/top-website-development-company-in-lucknow",
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
    title: "Top Website Development Company in Lucknow | Zentrix",
    description:
      "Searching for the top website development company in Lucknow? Use our shortlist guide, then see what Zentrix Infotech builds. Call us for a clear quote.",
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