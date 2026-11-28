import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Services in Lucknow | Zentrix Infotech",

  description:
    "Get professional website development services in Lucknow from Zentrix Infotech: business sites, online stores and web apps that are fast and SEO-ready. Call us.",

  keywords: [
    "website development services in Lucknow",
    "website development company Lucknow",
    "custom website development services Lucknow",
    "business website development Lucknow",
    "e-commerce website development services Lucknow",
    "web application development Lucknow",
    "responsive website development Lucknow",
    "website redesign services Lucknow",
    "SEO-friendly website development Lucknow",
    "professional website development services",
    "website maintenance services Lucknow",
    "CMS website development Lucknow",
    "website development for small business Lucknow",
    "hire website developers Lucknow",
  ],

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-development-services-in-lucknow",
  },

  openGraph: {
    title: "Website Development Services in Lucknow | Zentrix Infotech",
    description:
      "Get professional website development services in Lucknow from Zentrix Infotech: business sites, online stores and web apps that are fast and SEO-ready. Call us.",
    url:
      "https://www.zentrixinfotech.com/lucknow/website-development-services-in-lucknow",
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
    title: "Website Development Services in Lucknow | Zentrix Infotech",
    description:
      "Get professional website development services in Lucknow from Zentrix Infotech: business sites, online stores and web apps that are fast and SEO-ready. Call us.",
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