import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Cost of Local SEO Services in Moradabad | Zentrix Infotech",
  description:
    "Wondering about the cost of local SEO services in Moradabad? Understand pricing models, cost factors, what is included and how to get real value.",
  keywords:
    "cost of local SEO services in Moradabad, local SEO cost Moradabad, local SEO pricing Moradabad, local SEO packages Moradabad, how much does local SEO cost in Moradabad, affordable local SEO Moradabad, monthly local SEO price Moradabad, local SEO services Moradabad, Google Business Profile management cost, Zentrix Infotech local SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/cost-of-local-seo-services-in-moradabad",
  },

  openGraph: {
    title: "Cost of Local SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Wondering about the cost of local SEO services in Moradabad? Understand pricing models, cost factors, what is included and how to get real value.",
    url: "https://www.zentrixinfotech.com/moradabad/cost-of-local-seo-services-in-moradabad",
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
    title: "Cost of Local SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Wondering about the cost of local SEO services in Moradabad? Understand pricing models, cost factors, what is included and how to get real value.",
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