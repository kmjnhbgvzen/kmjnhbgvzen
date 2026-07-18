import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Healthcare in Dubai | Clinic & Hospital PPC Experts",
  description:
    "Grow patient bookings with Google Ads for healthcare in Dubai. Compliant, targeted campaigns for clinics, hospitals & specialists built to lower cost per appointment.",
  keywords:
    "google ads for healthcare in dubai, healthcare ppc dubai, clinic advertising agency dubai, hospital marketing dubai, google ads for clinics dubai, medical ppc management dubai, dha compliant advertising dubai, healthcare digital marketing agency uae, dentist advertising dubai, doctor ppc marketing dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-healthcare-dubai",
  },

  openGraph: {
    title: "Google Ads for Healthcare in Dubai | Clinic & Hospital PPC Experts",
    description:
      "Grow patient bookings with Google Ads for healthcare in Dubai. Compliant, targeted campaigns for clinics, hospitals & specialists built to lower cost per appointment.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-healthcare-dubai",
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
    title: "Google Ads for Healthcare in Dubai | Clinic & Hospital PPC Experts",
    description:
      "Grow patient bookings with Google Ads for healthcare in Dubai. Compliant, targeted campaigns for clinics, hospitals & specialists built to lower cost per appointment.",
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