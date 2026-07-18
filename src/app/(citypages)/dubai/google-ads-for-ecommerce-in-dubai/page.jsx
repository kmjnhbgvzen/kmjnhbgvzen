import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for E-commerce in Dubai | Online Store Growth Experts",
  description:
    "Scale your online store with Google Ads for e-commerce in Dubai. Shopping, Performance Max & remarketing campaigns built to lower CAC and boost ROAS.",
  keywords:
    "google ads for ecommerce in dubai, ecommerce ppc dubai, online store advertising dubai, google shopping ads uae, ecommerce marketing agency dubai, performance max ecommerce dubai, cart abandonment ads dubai, online store growth agency dubai, ecommerce google ads management uae, shopify marketing dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-ecommerce-dubai",
  },

  openGraph: {
    title: "Google Ads for E-commerce in Dubai | Online Store Growth Experts",
    description:
      "Scale your online store with Google Ads for e-commerce in Dubai. Shopping, Performance Max & remarketing campaigns built to lower CAC and boost ROAS.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-ecommerce-dubai",
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
    title: "Google Ads for E-commerce in Dubai | Online Store Growth Experts",
    description:
      "Scale your online store with Google Ads for e-commerce in Dubai. Shopping, Performance Max & remarketing campaigns built to lower CAC and boost ROAS.",
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