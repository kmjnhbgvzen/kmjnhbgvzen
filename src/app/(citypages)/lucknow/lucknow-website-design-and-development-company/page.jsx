import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Design and Development Company Lucknow | Zentrix",

  description:
    "Zentrix Infotech combines website design and development for Lucknow businesses, so your site looks professional, loads fast and brings enquiries. Call us.",

  keywords: [
    "Lucknow website design and development company",
    "website design and development company in Lucknow",
    "web design and development Lucknow",
    "website designing and development services Lucknow",
    "custom website design and development Lucknow",
    "responsive website design and development Lucknow",
    "e-commerce website design and development Lucknow",
    "UI UX design and development Lucknow",
    "website design company Lucknow",
    "website development company Lucknow",
    "professional website design and development",
    "design and development under one roof",
    "business website design Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-design-and-development-company",
  },

  openGraph: {
    title: "Website Design and Development Company Lucknow | Zentrix",
    description:
      "Zentrix Infotech combines website design and development for Lucknow businesses, so your site looks professional, loads fast and brings enquiries. Call us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/lucknow-website-design-and-development-company",
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
    title: "Website Design and Development Company Lucknow | Zentrix",
    description:
      "Zentrix Infotech combines website design and development for Lucknow businesses, so your site looks professional, loads fast and brings enquiries. Call us.",
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