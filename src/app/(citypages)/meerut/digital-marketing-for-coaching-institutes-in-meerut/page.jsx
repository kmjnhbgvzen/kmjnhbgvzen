import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Coaching Institutes in Meerut | Boost Admissions",
  description:
    "Grow your coaching institute in Meerut with proven digital marketing strategies — SEO, Google Ads, social media, and local visibility that drive real admissions.",
  keywords:
    "digital marketing for coaching institutes in Meerut, coaching institute marketing Meerut, SEO for coaching institutes, Google Ads for coaching classes, social media marketing for coaching institutes, coaching institute SEO Meerut, digital marketing agency Meerut, coaching institute lead generation, admission marketing strategy, online marketing for education institutes",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/content-marketing-agency-in-meerut",
  },
  openGraph: {
    title: "Digital Marketing for Coaching Institutes in Meerut | Boost Admissions",
    description:
      "Grow your coaching institute in Meerut with proven digital marketing strategies — SEO, Google Ads, social media, and local visibility that drive real admissions.",
    url: "https://www.zentrixinfotech.com/meerut/content-marketing-agency-in-meerut",
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
    title: "Digital Marketing for Coaching Institutes in Meerut | Boost Admissions",
    description:
      "Grow your coaching institute in Meerut with proven digital marketing strategies — SEO, Google Ads, social media, and local visibility that drive real admissions.",
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