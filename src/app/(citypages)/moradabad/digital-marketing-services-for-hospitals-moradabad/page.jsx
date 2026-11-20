import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Services for Hospitals in Moradabad",
  description:
    "Explore digital marketing services for hospitals in Moradabad: SEO, Google Ads, website, social media and reputation by Zentrix Infotech. Book a call.",
  keywords:
    "digital marketing services for hospitals Moradabad, hospital digital marketing services, healthcare digital marketing Moradabad, hospital SEO services, Google Ads for hospitals, social media marketing for hospitals, hospital website design Moradabad, hospital reputation management, patient lead generation, medical content marketing, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-services-for-hospitals-moradabad",
  },

  openGraph: {
    title: "Digital Marketing Services for Hospitals in Moradabad",
    description:
      "Explore digital marketing services for hospitals in Moradabad: SEO, Google Ads, website, social media and reputation by Zentrix Infotech. Book a call.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-services-for-hospitals-moradabad",
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
    title: "Digital Marketing Services for Hospitals in Moradabad",
    description:
      "Explore digital marketing services for hospitals in Moradabad: SEO, Google Ads, website, social media and reputation by Zentrix Infotech. Book a call.",
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