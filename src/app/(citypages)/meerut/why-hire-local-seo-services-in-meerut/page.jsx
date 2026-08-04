import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Why Hire Local SEO Services in Meerut? | Zentrix Infotech",
  description:
    "Wondering why your Meerut business needs local SEO? Discover how local SEO services help you rank higher on Google, attract nearby customers, and grow faster.",
  keywords:
    "local SEO services Meerut, why hire local SEO Meerut, local SEO company Meerut, local SEO agency near me, local SEO experts Meerut, Google My Business optimization Meerut, local SEO benefits, best local SEO services Uttar Pradesh, local search ranking Meerut, hire SEO company Meerut, local SEO for small business, Zentrix Infotech local SEO, local business SEO services, Google ranking Meerut, near me search optimization",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/local-seo-services-in-meerut",
  },
  openGraph: {
    title: "Why Hire Local SEO Services in Meerut? | Zentrix Infotech",
    description:
      "Wondering why your Meerut business needs local SEO? Discover how local SEO services help you rank higher on Google, attract nearby customers, and grow faster.",
    url: "https://www.zentrixinfotech.com/meerut/local-seo-services-in-meerut",
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
    title: "Why Hire Local SEO Services in Meerut? | Zentrix Infotech",
    description:
      "Wondering why your Meerut business needs local SEO? Discover how local SEO services help you rank higher on Google, attract nearby customers, and grow faster.",
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