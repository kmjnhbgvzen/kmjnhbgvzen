import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Dubai | Zentrix Infotech",
  description:
    "Grow your business with expert SEO services in Dubai from Zentrix Infotech. Local SEO, technical SEO & content strategies that drive real, measurable rankings.",
  keywords:
    "SEO services in Dubai, seo company in dubai, seo agency in dubai, best seo services dubai, affordable seo services dubai, local seo dubai, technical seo dubai, ecommerce seo dubai, seo consultant dubai, digital marketing agency dubai, seo experts uae, website ranking services dubai, seo packages dubai, small business seo dubai, dubai seo optimization company, google ranking services dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/seo-services-in-dubai",
  },

  openGraph: {
    title: "SEO Services in Dubai | Zentrix Infotech",
    description:
      "Grow your business with expert SEO services in Dubai from Zentrix Infotech. Local SEO, technical SEO & content strategies that drive real, measurable rankings.",
    url: "https://www.zentrixinfotech.com/dubai/seo-services-in-dubai",
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
    title: "SEO Services in Dubai | Zentrix Infotech",
    description:
      "Grow your business with expert SEO services in Dubai from Zentrix Infotech. Local SEO, technical SEO & content strategies that drive real, measurable rankings.",
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