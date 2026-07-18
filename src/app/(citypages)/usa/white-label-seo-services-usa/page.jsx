import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "White Label SEO Services USA | Scalable SEO Reseller Programs",
  description:
    "Grow your agency with white label SEO services USA businesses trust. Fully managed, ranked-focused SEO fulfillment under your brand name. Get a free audit today.",
  keywords:
    "white label SEO services USA, white label SEO reseller, private label SEO agency, outsource SEO USA, white label SEO company, SEO reseller program, white label link building, white label local SEO, agency SEO fulfillment, white label SEO packages",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/white-label-seo-services-usa",
  },
  openGraph: {
    title: "White Label SEO Services USA | Scalable SEO Reseller Programs",
    description:
      "Grow your agency with white label SEO services USA businesses trust. Fully managed, ranked-focused SEO fulfillment under your brand name. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/usa/white-label-seo-services-usa",
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
    title: "White Label SEO Services USA | Scalable SEO Reseller Programs",
    description:
      "Grow your agency with white label SEO services USA businesses trust. Fully managed, ranked-focused SEO fulfillment under your brand name. Get a free audit today.",
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