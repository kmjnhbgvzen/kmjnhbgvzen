import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services for Small Business USA | Zentrix Infotech",
  description:
    "Grow your small business online with expert SEO services for small business USA. Zentrix Infotech delivers local SEO, on-page optimization, and result-driven strategies to rank higher on Google.",
  keywords:
    "SEO services for small business USA, small business SEO company, local SEO services USA, affordable SEO services USA, SEO agency for small business, best SEO company for small business, small business SEO packages, SEO experts for startups, SEO services near me, digital marketing for small business USA, SEO consultant for small business, organic ranking services USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/seo-services-for-small-business-usa",
  },
  openGraph: {
    title: "SEO Services for Small Business USA | Zentrix Infotech",
    description:
      "Grow your small business online with expert SEO services for small business USA. Zentrix Infotech delivers local SEO, on-page optimization, and result-driven strategies to rank higher on Google.",
    url: "https://www.zentrixinfotech.com/usa/seo-services-for-small-business-usa",
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
    title: "SEO Services for Small Business USA | Zentrix Infotech",
    description:
      "Grow your small business online with expert SEO services for small business USA. Zentrix Infotech delivers local SEO, on-page optimization, and result-driven strategies to rank higher on Google.",
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