import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Social Media Marketing Agency in Meerut | Social Media Management Services | Zentrix Infotech",
  description:
    "Grow your business with the best Social Media Marketing Agency in Meerut. Zentrix Infotech provides result-driven social media marketing, content creation, paid advertising, and brand management services to increase engagement, generate quality leads, and boost business growth.",
  keywords: "Social Media Marketing Agency in Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/social-media-marketing-agency-in-meerut",
  },
  openGraph: {
    title:
      "Social Media Marketing Agency in Meerut | Social Media Management Services | Zentrix Infotech",
    description:
      "Grow your business with the best Social Media Marketing Agency in Meerut. Zentrix Infotech provides result-driven social media marketing, content creation, paid advertising, and brand management services to increase engagement, generate quality leads, and boost business growth.",
    url: "https://www.zentrixinfotech.com/meerut/social-media-marketing-agency-in-meerut",
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
    title:
      "Social Media Marketing Agency in Meerut | Social Media Management Services | Zentrix Infotech",
    description:
      "Grow your business with the best Social Media Marketing Agency in Meerut. Zentrix Infotech provides result-driven social media marketing, content creation, paid advertising, and brand management services to increase engagement, generate quality leads, and boost business growth.",
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