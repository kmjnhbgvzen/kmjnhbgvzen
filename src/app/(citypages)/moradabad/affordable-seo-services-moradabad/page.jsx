import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable SEO Services in Moradabad | Zentrix Infotech",
  description:
    "Get affordable SEO services in Moradabad that bring real Google leads. Zentrix Infotech offers custom local and technical SEO plans for every budget. Free audit.",
  keywords:
    "affordable SEO services Moradabad, affordable SEO company Moradabad, cheap SEO services Moradabad, low cost SEO Moradabad, budget SEO services Moradabad, SEO packages Moradabad, SEO services for small business Moradabad, affordable local SEO Moradabad, SEO services near me, SEO company Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/affordable-seo-services-moradabad",
  },

  openGraph: {
    title: "Affordable SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Get affordable SEO services in Moradabad that bring real Google leads. Zentrix Infotech offers custom local and technical SEO plans for every budget. Free audit.",
    url: "https://www.zentrixinfotech.com/moradabad/affordable-seo-services-moradabad",
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
    title: "Affordable SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Get affordable SEO services in Moradabad that bring real Google leads. Zentrix Infotech offers custom local and technical SEO plans for every budget. Free audit.",
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