import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best SEO Agency in Moradabad | Zentrix Infotech",
  description:
    "Searching for the best SEO agency in Moradabad? See what makes a great agency and how Zentrix Infotech delivers local SEO results. Get a free audit.",
  keywords:
    "best SEO agency Moradabad, best SEO agency in Moradabad, top SEO agency Moradabad, SEO agency Moradabad, SEO agency near me, affordable SEO agency Moradabad, local SEO agency Moradabad, SEO agency for small business Moradabad, trusted SEO agency Moradabad, digital marketing and SEO agency Moradabad, SEO experts Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-seo-agency-moradabad",
  },

  openGraph: {
    title: "Best SEO Agency in Moradabad | Zentrix Infotech",
    description:
      "Searching for the best SEO agency in Moradabad? See what makes a great agency and how Zentrix Infotech delivers local SEO results. Get a free audit.",
    url: "https://www.zentrixinfotech.com/moradabad/best-seo-agency-moradabad",
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
    title: "Best SEO Agency in Moradabad | Zentrix Infotech",
    description:
      "Searching for the best SEO agency in Moradabad? See what makes a great agency and how Zentrix Infotech delivers local SEO results. Get a free audit.",
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