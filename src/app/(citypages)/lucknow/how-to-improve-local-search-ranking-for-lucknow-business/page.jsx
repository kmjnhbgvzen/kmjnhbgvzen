import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "How to Improve Local Search Ranking in Lucknow | Zentrix",


  description:
    "Want to improve local search ranking for your Lucknow business? Follow this practical 30-day plan covering Google profile, reviews, website and tracking.",


  keywords:
    "how to improve local search ranking Lucknow, improve local search ranking, local search ranking for business, how to rank higher on Google Maps, local SEO tips Lucknow, Google Business Profile optimization, rank in local pack, local SEO checklist, local SEO for small business, Google Maps ranking, online reviews, NAP consistency, local listings, mobile SEO, local SEO audit, local SEO company Lucknow, digital marketing company",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/how-to-improve-local-search-ranking-for-lucknow-business",
  },


  openGraph: {
    title: "How to Improve Local Search Ranking in Lucknow | Zentrix",
    description:
      "Want to improve local search ranking for your Lucknow business? Follow this practical 30-day plan covering Google profile, reviews, website and tracking.",
    url:
      "https://www.zentrixinfotech.com/lucknow/how-to-improve-local-search-ranking-for-lucknow-business",
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
    title: "How to Improve Local Search Ranking in Lucknow | Zentrix",
    description:
      "Want to improve local search ranking for your Lucknow business? Follow this practical 30-day plan covering Google profile, reviews, website and tracking.",
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