import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Outsource SEO Services to India from USA | Cut Costs, Scale Fast",
  description:
    "Outsource SEO services to India and cut costs by up to 60% without losing quality. USA businesses trust Indian SEO teams for rankings, content, and links.",
  keywords:
    "outsource SEO services to India, outsource SEO to India from USA, hire SEO company India, offshore SEO services, India SEO outsourcing agency, SEO outsourcing USA India, affordable SEO services India, white label SEO India, outsource digital marketing to India, best SEO company in India for USA clients",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/outsource-seo-services-to-india",
  },
  openGraph: {
    title: "Outsource SEO Services to India from USA | Cut Costs, Scale Fast",
    description:
      "Outsource SEO services to India and cut costs by up to 60% without losing quality. USA businesses trust Indian SEO teams for rankings, content, and links.",
    url: "https://www.zentrixinfotech.com/usa/outsource-seo-services-to-india",
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
    title: "Outsource SEO Services to India from USA | Cut Costs, Scale Fast",
    description:
      "Outsource SEO services to India and cut costs by up to 60% without losing quality. USA businesses trust Indian SEO teams for rankings, content, and links.",
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