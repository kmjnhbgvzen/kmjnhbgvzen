import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Hire an SEO Company in Lucknow | Zentrix Infotech",

  description:
    "Learn how to hire an SEO company in Lucknow: set goals, shortlist, ask the right questions and spot red flags. Zentrix Infotech shares a simple guide.",

  keywords:
    "how to hire SEO company in Lucknow, hire SEO company Lucknow, how to choose SEO company, SEO company in Lucknow, SEO agency Lucknow, SEO services Lucknow, questions to ask an SEO company, hire SEO expert Lucknow, SEO company for small business, SEO audit, local SEO Lucknow, SEO contract checklist, SEO red flags, Google Business Profile optimization, technical SEO, on-page SEO, digital marketing company",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/how-to-hire-seo-company-in-lucknow",
  },

  openGraph: {
    title: "How to Hire an SEO Company in Lucknow | Zentrix Infotech",
    description:
      "Learn how to hire an SEO company in Lucknow: set goals, shortlist, ask the right questions and spot red flags. Zentrix Infotech shares a simple guide.",
    url: "https://www.zentrixinfotech.com/lucknow/how-to-hire-seo-company-in-lucknow",
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
    title: "How to Hire an SEO Company in Lucknow | Zentrix Infotech",
    description:
      "Learn how to hire an SEO company in Lucknow: set goals, shortlist, ask the right questions and spot red flags. Zentrix Infotech shares a simple guide.",
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