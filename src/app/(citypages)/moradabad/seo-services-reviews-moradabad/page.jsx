import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services Reviews Moradabad: How to Judge | Zentrix Infotech",
  description:
    "Read SEO services reviews in Moradabad the smart way. Learn how to spot genuine feedback, check proof of results and choose a trusted SEO partner.",
  keywords:
    "SEO services reviews Moradabad, SEO company reviews Moradabad, best SEO services in Moradabad reviews, SEO agency reviews Moradabad, SEO client testimonials Moradabad, trusted SEO company Moradabad, how to check SEO company reviews, SEO services in Moradabad, local SEO Moradabad, SEO results Moradabad, hire SEO company Moradabad, Zentrix Infotech SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-services-reviews-moradabad",
  },

  openGraph: {
    title: "SEO Services Reviews Moradabad: How to Judge | Zentrix Infotech",
    description:
      "Read SEO services reviews in Moradabad the smart way. Learn how to spot genuine feedback, check proof of results and choose a trusted SEO partner.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-services-reviews-moradabad",
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
    title: "SEO Services Reviews Moradabad: How to Judge | Zentrix Infotech",
    description:
      "Read SEO services reviews in Moradabad the smart way. Learn how to spot genuine feedback, check proof of results and choose a trusted SEO partner.",
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