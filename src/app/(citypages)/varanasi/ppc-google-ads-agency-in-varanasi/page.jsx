import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency in Varanasi | Zentrix Infotech",
  description:
    "Get instant bookings and leads with a trusted PPC & Google Ads agency in Varanasi. Zentrix Infotech runs targeted campaigns for hotels, exporters & local businesses to maximize ROI.",
  keywords:
    "PPC agency in Varanasi, Google Ads agency Varanasi, PPC services Varanasi, Google Ads management Varanasi, pay per click advertising Varanasi, hotel PPC advertising Varanasi, digital marketing agency Varanasi, best Google Ads expert Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/ppc-google-ads-agency-in-varanasi",
  },
  openGraph: {
    title: "PPC & Google Ads Agency in Varanasi | Zentrix Infotech",
    description:
      "Get instant bookings and leads with a trusted PPC & Google Ads agency in Varanasi. Zentrix Infotech runs targeted campaigns for hotels, exporters & local businesses to maximize ROI.",
    url: "https://www.zentrixinfotech.com/varanasi/ppc-google-ads-agency-in-varanasi",
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
    title: "PPC & Google Ads Agency in Varanasi | Zentrix Infotech",
    description:
      "Get instant bookings and leads with a trusted PPC & Google Ads agency in Varanasi. Zentrix Infotech runs targeted campaigns for hotels, exporters & local businesses to maximize ROI.",
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