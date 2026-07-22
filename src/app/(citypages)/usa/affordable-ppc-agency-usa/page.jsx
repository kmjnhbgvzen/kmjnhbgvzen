import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable PPC Agency USA",
  description:
    "Searching for an affordable PPC agency in the USA? Get expert pay-per-click management across Google, Bing, and social ads with transparent pricing. Get a free audit today.",
  keywords:
    "affordable ppc agency usa, ppc agency usa, cheap ppc management usa, best ppc agency for small business, pay per click agency usa, ppc management company usa, affordable pay per click services, low cost ppc agency, ppc experts usa, ppc agency near me usa, bing ads agency usa, social media ads agency usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/affordable-ppc-agency-usa",
  },
  openGraph: {
    title: "Affordable PPC Agency USA",
    description:
      "Searching for an affordable PPC agency in the USA? Get expert pay-per-click management across Google, Bing, and social ads with transparent pricing. Get a free audit today.",
    url: "https://www.zentrixinfotech.com/saharanpur/affordable-ppc-agency-usa",
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
    title: "Affordable PPC Agency USA",
    description:
      "Searching for an affordable PPC agency in the USA? Get expert pay-per-click management across Google, Bing, and social ads with transparent pricing. Get a free audit today.",
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