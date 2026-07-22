import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Monthly SEO Packages USA | Affordable SEO Plans That Rank",
  description:
    "Explore monthly SEO packages in the USA designed to boost rankings, traffic, and leads. Transparent pricing, proven strategy, and measurable growth every month.",
  keywords:
    "monthly seo packages usa, affordable seo packages usa, monthly seo plans, seo packages pricing usa, best monthly seo services, small business seo packages, local seo packages usa, seo packages for startups, monthly seo services company, custom seo packages usa, seo retainer packages, seo pricing plans usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/monthly-seo-packages-usa",
  },
  openGraph: {
    title: "Monthly SEO Packages USA | Affordable SEO Plans That Rank",
    description:
      "Explore monthly SEO packages in the USA designed to boost rankings, traffic, and leads. Transparent pricing, proven strategy, and measurable growth every month.",
    url: "https://www.zentrixinfotech.com/usa/monthly-seo-packages-usa",
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
    title: "Monthly SEO Packages USA | Affordable SEO Plans That Rank",
    description:
      "Explore monthly SEO packages in the USA designed to boost rankings, traffic, and leads. Transparent pricing, proven strategy, and measurable growth every month.",
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