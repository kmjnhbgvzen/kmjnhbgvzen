import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Agency in Muzaffarnagar | Zentrix Infotech",
  description:
    "Looking for a trusted digital marketing agency in Muzaffarnagar? Zentrix Infotech offers SEO, social media, web development & ad campaigns for real growth.",
  keywords:
    "digital marketing agency in muzaffarnagar, digital marketing company muzaffarnagar, seo services muzaffarnagar, social media marketing agency muzaffarnagar, best digital marketing agency near me, online marketing company muzaffarnagar, web development company muzaffarnagar, affordable digital marketing services up, digital marketing experts muzaffarnagar, ppc and ads agency muzaffarnagar",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Digital Marketing Agency in Muzaffarnagar | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Muzaffarnagar? Zentrix Infotech offers SEO, social media, web development & ad campaigns for real growth.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/digital-marketing-agency-in-muzaffarnagar",
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
    title: "Digital Marketing Agency in Muzaffarnagar | Zentrix Infotech",
    description:
      "Looking for a trusted digital marketing agency in Muzaffarnagar? Zentrix Infotech offers SEO, social media, web development & ad campaigns for real growth.",
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