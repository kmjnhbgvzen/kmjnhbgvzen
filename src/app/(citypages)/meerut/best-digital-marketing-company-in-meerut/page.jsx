import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Meerut | SEO, Ads & Branding Experts",
  description:
    "Looking for the best digital marketing company in Meerut? Get expert SEO, social media, PPC & website solutions that turn local traffic into real leads and sales.",
  keywords:
    "best digital marketing company in Meerut, digital marketing agency Meerut, SEO company Meerut, social media marketing Meerut, PPC services Meerut, website designing company Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/best-digital-marketing-company-in-meerut",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Meerut | SEO, Ads & Branding Experts",
    description:
      "Looking for the best digital marketing company in Meerut? Get expert SEO, social media, PPC & website solutions that turn local traffic into real leads and sales.",
    url: "https://www.zentrixinfotech.com/meerut/best-digital-marketing-company-in-meerut",
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
    title: "Best Digital Marketing Company in Meerut | SEO, Ads & Branding Experts",
    description:
      "Looking for the best digital marketing company in Meerut? Get expert SEO, social media, PPC & website solutions that turn local traffic into real leads and sales.",
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