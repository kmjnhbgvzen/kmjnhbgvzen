import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Consulting in Moradabad | Zentrix Infotech",
  description:
    "Need clear direction on SEO? Zentrix Infotech offers SEO consulting in Moradabad with audits, keyword strategy and a practical roadmap. Book a free consultation.",
  keywords:
    "SEO consulting Moradabad, SEO consultant Moradabad, SEO consultation Moradabad, SEO audit Moradabad, SEO strategy Moradabad, SEO expert consultant Moradabad, website audit Moradabad, SEO training Moradabad, SEO advice for small business Moradabad, SEO roadmap Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-consulting-moradabad",
  },

  openGraph: {
    title: "SEO Consulting in Moradabad | Zentrix Infotech",
    description:
      "Need clear direction on SEO? Zentrix Infotech offers SEO consulting in Moradabad with audits, keyword strategy and a practical roadmap. Book a free consultation.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-consulting-moradabad",
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
    title: "SEO Consulting in Moradabad | Zentrix Infotech",
    description:
      "Need clear direction on SEO? Zentrix Infotech offers SEO consulting in Moradabad with audits, keyword strategy and a practical roadmap. Book a free consultation.",
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