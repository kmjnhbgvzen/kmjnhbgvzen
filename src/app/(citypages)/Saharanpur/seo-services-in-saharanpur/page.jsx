import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Saharanpur | Rank Higher on Google with Expert SEO",
  description:
    "Get result-driven SEO services in Saharanpur — local SEO, on-page, technical & link building that help your business rank higher and get more customers.",
  keywords:
    "SEO services in Saharanpur, SEO company Saharanpur, local SEO Saharanpur, SEO expert Saharanpur, best SEO agency near me, website ranking services Saharanpur, on-page SEO Saharanpur, SEO consultant Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/seo-services-in-saharanpur",
  },
  openGraph: {
    title: "SEO Services in Saharanpur | Rank Higher on Google with Expert SEO",
    description:
      "Get result-driven SEO services in Saharanpur — local SEO, on-page, technical & link building that help your business rank higher and get more customers.",
    url: "https://www.zentrixinfotech.com/saharanpur/seo-services-in-saharanpur",
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
    title: "SEO Services in Saharanpur | Rank Higher on Google with Expert SEO",
    description:
      "Get result-driven SEO services in Saharanpur — local SEO, on-page, technical & link building that help your business rank higher and get more customers.",
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