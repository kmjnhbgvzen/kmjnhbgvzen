import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC / Google Ads Agency in Bareilly | Search Experts",
  description:
    "Looking for a PPC and Google Ads agency in Bareilly? Get expert campaign setup, keyword targeting, and ad optimization to generate leads and sales faster.",
  keywords:
    "PPC agency in Bareilly, Google Ads agency Bareilly, PPC services Bareilly, pay per click marketing Bareilly, Google Ads company Bareilly, paid search agency Bareilly, best PPC agency UP, Google Ads management Bareilly, PPC expert Bareilly, affordable Google Ads services Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/ppc-google-ads-agency-in-bareilly",
  },
  openGraph: {
    title: "PPC / Google Ads Agency in Bareilly | Search Experts",
    description:
      "Looking for a PPC and Google Ads agency in Bareilly? Get expert campaign setup, keyword targeting, and ad optimization to generate leads and sales faster.",
    url: "https://www.zentrixinfotech.com/bareilly/ppc-google-ads-agency-in-bareilly",
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
    title: "PPC / Google Ads Agency in Bareilly | Search Experts",
    description:
      "Looking for a PPC and Google Ads agency in Bareilly? Get expert campaign setup, keyword targeting, and ad optimization to generate leads and sales faster.",
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