import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Moradabad | Zentrix Infotech",
  description:
    "Looking for SEO services in Moradabad? Zentrix Infotech offers local, on-page, technical and content SEO to bring you more Google leads. Get a free audit.",
  keywords:
    "SEO services Moradabad, SEO company in Moradabad, best SEO company in Moradabad, SEO agency Moradabad, local SEO Moradabad, SEO expert in Moradabad, affordable SEO services Moradabad, on-page SEO Moradabad, technical SEO Moradabad, website SEO Moradabad, Google Business Profile optimization Moradabad, SEO for small business Moradabad, SEO services near me, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-services-moradabad",
  },

  openGraph: {
    title: "SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Looking for SEO services in Moradabad? Zentrix Infotech offers local, on-page, technical and content SEO to bring you more Google leads. Get a free audit.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-services-moradabad",
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
    title: "SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Looking for SEO services in Moradabad? Zentrix Infotech offers local, on-page, technical and content SEO to bring you more Google leads. Get a free audit.",
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