import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Packages in Moradabad | Zentrix Infotech",
  description:
    "Compare SEO packages in Moradabad built for local shops, clinics and growing brands. Zentrix Infotech offers flexible monthly plans. Get a free audit and quote.",
  keywords:
    "SEO packages Moradabad, SEO plans Moradabad, monthly SEO packages Moradabad, local SEO packages Moradabad, SEO packages for small business Moradabad, affordable SEO packages Moradabad, SEO package for clinics Moradabad, SEO package for e-commerce Moradabad, custom SEO packages Moradabad, SEO services packages Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-packages-moradabad",
  },

  openGraph: {
    title: "SEO Packages in Moradabad | Zentrix Infotech",
    description:
      "Compare SEO packages in Moradabad built for local shops, clinics and growing brands. Zentrix Infotech offers flexible monthly plans. Get a free audit and quote.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-packages-moradabad",
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
    title: "SEO Packages in Moradabad | Zentrix Infotech",
    description:
      "Compare SEO packages in Moradabad built for local shops, clinics and growing brands. Zentrix Infotech offers flexible monthly plans. Get a free audit and quote.",
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