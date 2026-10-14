import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose SEO Services in Moradabad | Zentrix Infotech",
  description:
    "Learn how to choose SEO services in Moradabad. Key checks, questions to ask, red flags, pricing models and reporting tips from Zentrix Infotech.",
  keywords:
    "how to choose SEO services in Moradabad, SEO services in Moradabad, SEO company in Moradabad, best SEO agency in Moradabad, local SEO Moradabad, SEO experts in Moradabad, affordable SEO services Moradabad, SEO packages Moradabad, SEO pricing Moradabad, hire SEO company Moradabad, SEO for small business Moradabad, Google Business Profile optimization Moradabad, website optimization Moradabad, Zentrix Infotech SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-choose-seo-services-in-moradabad",
  },

  openGraph: {
    title: "How to Choose SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Learn how to choose SEO services in Moradabad. Key checks, questions to ask, red flags, pricing models and reporting tips from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-choose-seo-services-in-moradabad",
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
    title: "How to Choose SEO Services in Moradabad | Zentrix Infotech",
    description:
      "Learn how to choose SEO services in Moradabad. Key checks, questions to ask, red flags, pricing models and reporting tips from Zentrix Infotech.",
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