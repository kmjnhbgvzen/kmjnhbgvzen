import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Company in Lucknow | Local & Technical SEO | Zentrix",

  description:
    "Zentrix Infotech is an SEO company serving Lucknow businesses with local SEO, technical SEO, content and website optimization. Clear plans, plain reports.",

  keywords:
    "SEO company in Lucknow, SEO company Lucknow, SEO services in Lucknow, local SEO company Lucknow, technical SEO services, website optimization company, SEO agency Lucknow, SEO company for small business, search engine optimization Lucknow, on-page SEO, Google Business Profile optimization, content marketing for SEO, SEO audit, local search visibility, SEO and web development company, digital marketing company, affordable SEO services",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/seo-company-in-lucknow",
  },

  openGraph: {
    title: "SEO Company in Lucknow | Local & Technical SEO | Zentrix",
    description:
      "Zentrix Infotech is an SEO company serving Lucknow businesses with local SEO, technical SEO, content and website optimization. Clear plans, plain reports.",
    url: "https://www.zentrixinfotech.com/lucknow/seo-company-in-lucknow",
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
    title: "SEO Company in Lucknow | Local & Technical SEO | Zentrix",
    description:
      "Zentrix Infotech is an SEO company serving Lucknow businesses with local SEO, technical SEO, content and website optimization. Clear plans, plain reports.",
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
