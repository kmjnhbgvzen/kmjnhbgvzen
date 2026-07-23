import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Coaching Institutes in Varanasi | Zentrix Infotech",
  description:
    "Grow your coaching institute in Varanasi with expert Google Ads management from Zentrix Infotech. Get quality student inquiries, higher admissions, and measurable ROI.",
  keywords:
    "Google Ads for coaching institutes in Varanasi, PPC for coaching institutes Varanasi, Google Ads management Varanasi, coaching institute digital marketing Varanasi, student lead generation Varanasi, Google Ads agency Varanasi, coaching center advertising Varanasi, education marketing Varanasi, PPC campaigns for education sector, online admission ads Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/google-ads-for-coaching-institutes-in-varanasi",
  },
  openGraph: {
    title: "Google Ads for Coaching Institutes in Varanasi | Zentrix Infotech",
    description:
      "Grow your coaching institute in Varanasi with expert Google Ads management from Zentrix Infotech. Get quality student inquiries, higher admissions, and measurable ROI.",
    url: "https://www.zentrixinfotech.com/varanasi/google-ads-for-coaching-institutes-in-varanasi",
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
    title: "Google Ads for Coaching Institutes in Varanasi | Zentrix Infotech",
    description:
      "Grow your coaching institute in Varanasi with expert Google Ads management from Zentrix Infotech. Get quality student inquiries, higher admissions, and measurable ROI.",
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