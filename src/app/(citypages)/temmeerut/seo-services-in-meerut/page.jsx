import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Meerut | Local SEO, On-Page & Link Building",
  description:
    "Looking for SEO services in Meerut? Get expert local SEO, on-page optimization, technical SEO, and link building to rank higher on Google and grow your business online.",
  keywords:
    "SEO services in Meerut, SEO company Meerut, best SEO agency Meerut, local SEO services Meerut, on-page SEO Meerut, technical SEO Meerut, website ranking services Meerut, SEO expert Meerut, affordable SEO services UP, Google ranking agency Meerut",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/meerut/seo-services-in-meerut",
  },
  openGraph: {
    title: "SEO Services in Meerut | Local SEO, On-Page & Link Building",
    description:
      "Looking for SEO services in Meerut? Get expert local SEO, on-page optimization, technical SEO, and link building to rank higher on Google and grow your business online.",
    url: "https://www.zentrixinfotech.com/meerut/seo-services-in-meerut",
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
    title: "SEO Services in Meerut | Local SEO, On-Page & Link Building",
    description:
      "Looking for SEO services in Meerut? Get expert local SEO, on-page optimization, technical SEO, and link building to rank higher on Google and grow your business online.",
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