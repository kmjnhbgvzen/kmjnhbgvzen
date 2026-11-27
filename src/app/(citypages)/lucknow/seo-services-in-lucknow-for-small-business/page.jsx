import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Lucknow for Small Business | Zentrix",

  description:
    "Need SEO services in Lucknow for your small business? Zentrix Infotech offers local SEO, website fixes and content that bring calls and enquiries. Talk to us.",

  keywords:
    "SEO services in Lucknow for small business, small business SEO Lucknow, SEO services Lucknow, local SEO for small business, affordable SEO Lucknow, SEO company for small business, SEO for local shops, SEO packages for small business, hire SEO expert Lucknow, Google Business Profile optimization, local search visibility, website optimization services, on-page SEO, technical SEO, content marketing for small business, SEO for startups, digital marketing company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/seo-services-in-lucknow-for-small-business",
  },

  openGraph: {
    title: "SEO Services in Lucknow for Small Business | Zentrix",
    description:
      "Need SEO services in Lucknow for your small business? Zentrix Infotech offers local SEO, website fixes and content that bring calls and enquiries. Talk to us.",
    url: "https://www.zentrixinfotech.com/lucknow/seo-services-in-lucknow-for-small-business",
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
    title: "SEO Services in Lucknow for Small Business | Zentrix",
    description:
      "Need SEO services in Lucknow for your small business? Zentrix Infotech offers local SEO, website fixes and content that bring calls and enquiries. Talk to us.",
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