import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency in Hapur | Result-Driven Ad Campaign Management",
  description:
    "Looking for a PPC and Google Ads agency in Hapur? Get expertly managed ad campaigns that drive qualified leads, maximize ROI, and grow your business fast.",
  keywords:
    "PPC agency in Hapur, Google Ads agency Hapur, PPC services Hapur, Google Ads management Hapur, pay per click marketing Hapur, digital marketing agency Hapur, PPC company Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/ppc-google-ads-agency-in-hapur",
  },
  openGraph: {
    title: "PPC & Google Ads Agency in Hapur | Result-Driven Ad Campaign Management",
    description:
      "Looking for a PPC and Google Ads agency in Hapur? Get expertly managed ad campaigns that drive qualified leads, maximize ROI, and grow your business fast.",
    url: "https://www.zentrixinfotech.com/hapur/ppc-google-ads-agency-in-hapur",
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
    title: "PPC & Google Ads Agency in Hapur | Result-Driven Ad Campaign Management",
    description:
      "Looking for a PPC and Google Ads agency in Hapur? Get expertly managed ad campaigns that drive qualified leads, maximize ROI, and grow your business fast.",
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