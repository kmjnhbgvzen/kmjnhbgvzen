import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Social Media Management Services in Dubai | Consistent Growth",
  description:
    "Get expert social media management services in Dubai for daily posting, engagement, and reporting that keep your brand active and growing online.",
  keywords:
    "social media management services in Dubai, social media management Dubai, social media handling company UAE, social media account management Dubai, social media outsourcing Dubai, social media posting services UAE, social media agency Dubai, social media management company UAE, affordable social media management Dubai, social media handling agency UAE",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/social-media-management-services-dubai",
  },

  openGraph: {
    title: "Best Social Media Management Services in Dubai | Consistent Growth",
    description:
      "Get expert social media management services in Dubai for daily posting, engagement, and reporting that keep your brand active and growing online.",
    url: "https://www.zentrixinfotech.com/dubai/social-media-management-services-dubai",
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
    title: "Best Social Media Management Services in Dubai | Consistent Growth",
    description:
      "Get expert social media management services in Dubai for daily posting, engagement, and reporting that keep your brand active and growing online.",
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