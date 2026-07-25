import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC Google Ads Agency in Muzaffarnagar | Zentrix Infotech",
  description:
    "Get instant leads with a trusted PPC Google Ads agency in Muzaffarnagar. Zentrix Infotech runs high-ROI Search, Display & Shopping ad campaigns.",
  keywords:
    "ppc google ads agency in muzaffarnagar, google ads agency muzaffarnagar, ppc management company muzaffarnagar, google ads expert near me, ppc services muzaffarnagar, google adwords agency up, best ppc agency muzaffarnagar, paid search marketing company, google shopping ads agency, digital marketing agency muzaffarnagar",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/muzaffarnagar/ppc-google-ads-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "PPC Google Ads Agency in Muzaffarnagar | Zentrix Infotech",
    description:
      "Get instant leads with a trusted PPC Google Ads agency in Muzaffarnagar. Zentrix Infotech runs high-ROI Search, Display & Shopping ad campaigns.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/ppc-google-ads-agency-in-muzaffarnagar",
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
    title: "PPC Google Ads Agency in Muzaffarnagar | Zentrix Infotech",
    description:
      "Get instant leads with a trusted PPC Google Ads agency in Muzaffarnagar. Zentrix Infotech runs high-ROI Search, Display & Shopping ad campaigns.",
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