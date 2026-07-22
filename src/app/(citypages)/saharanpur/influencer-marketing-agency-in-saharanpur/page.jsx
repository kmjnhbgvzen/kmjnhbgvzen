import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Influencer Marketing Agency in Saharanpur | Zentrix Infotech",
  description:
    "Build local reach with influencer marketing in Saharanpur. Creator collaborations, UGC, campaign strategy, and performance tracking from Zentrix Infotech.",
  keywords:
    "influencer marketing agency in Saharanpur, influencer marketing services Saharanpur, micro influencer marketing Saharanpur, creator marketing agency UP, UGC marketing Saharanpur, brand collaboration agency Saharanpur, Instagram influencer marketing Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/influencer-marketing-agency-saharanpur",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Build local reach with influencer marketing in Saharanpur. Creator collaborations, UGC, campaign strategy, and performance tracking from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/saharanpur/influencer-marketing-agency-saharanpur",
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
    title: "Influencer Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Build local reach with influencer marketing in Saharanpur. Creator collaborations, UGC, campaign strategy, and performance tracking from Zentrix Infotech.",
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