import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "SEO Company in Meerut | Best SEO Services & Agency 2026",
  description:
    "Looking for a reliable SEO company in Meerut? Compare top local SEO agencies, services, pricing, and what to check before hiring for your business.",
  keywords:
    "SEO company in Meerut, SEO services Meerut, best SEO agency Meerut, local SEO Meerut, SEO expert Meerut, digital marketing company Meerut, affordable SEO services Meerut, website ranking company Meerut, SEO consultant Meerut, SEO agency near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/seo-company-in-meerut",
  },
  openGraph: {
    title: "SEO Company in Meerut | Best SEO Services & Agency 2026",
    description:
      "Looking for a reliable SEO company in Meerut? Compare top local SEO agencies, services, pricing, and what to check before hiring for your business.",
    url: "https://www.zentrixinfotech.com/meerut/seo-company-in-meerut",
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
    title: "SEO Company in Meerut | Best SEO Services & Agency 2026",
    description:
      "Looking for a reliable SEO company in Meerut? Compare top local SEO agencies, services, pricing, and what to check before hiring for your business.",
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