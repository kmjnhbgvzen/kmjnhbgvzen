import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Facebook Ads Agency in Saharanpur | Zentrix Infotech",
  description:
    "Run targeted Facebook Ads in Saharanpur to generate leads, sales, and store visits with transparent reporting and optimized campaigns.",
  keywords:
    "Facebook Ads agency in Saharanpur, Facebook marketing agency Saharanpur, Meta Ads agency Saharanpur, Facebook lead generation ads Saharanpur, Facebook advertising services Saharanpur, Facebook Ads for local business Saharanpur, Facebook Ads for ecommerce Saharanpur, Facebook Ads for real estate Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/facebook-ads-agency-in-saharanpur",
  },
  openGraph: {
    title: "Facebook Ads Agency in Saharanpur | Zentrix Infotech",
    description:
      "Run targeted Facebook Ads in Saharanpur to generate leads, sales, and store visits with transparent reporting and optimized campaigns.",
    url: "https://www.zentrixinfotech.com/saharanpur/facebook-ads-agency-in-saharanpur",
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
    title: "Facebook Ads Agency in Saharanpur | Zentrix Infotech",
    description:
      "Run targeted Facebook Ads in Saharanpur to generate leads, sales, and store visits with transparent reporting and optimized campaigns.",
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