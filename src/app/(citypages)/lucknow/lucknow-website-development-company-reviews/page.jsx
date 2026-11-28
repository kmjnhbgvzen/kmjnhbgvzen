import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lucknow Website Development Company Reviews | Zentrix",

  description:
    "Read what clients say about Zentrix Infotech website development and learn how to judge any Lucknow website company's reviews before you hire. Call us.",

  keywords: [
    "Lucknow website development company reviews",
    "website development company reviews Lucknow",
    "website company reviews Lucknow",
    "Zentrix Infotech reviews",
    "client reviews website development",
    "website development company testimonials",
    "website developers reviews Lucknow",
    "website development company rating Lucknow",
    "how to check website company reviews",
    "genuine reviews website company",
    "client feedback website development",
    "website company portfolio and reviews",
    "trusted website development company Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-company-reviews",
  },

  openGraph: {
    title: "Lucknow Website Development Company Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech website development and learn how to judge any Lucknow website company's reviews before you hire. Call us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-development-company-reviews",
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
    title: "Lucknow Website Development Company Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech website development and learn how to judge any Lucknow website company's reviews before you hire. Call us.",
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