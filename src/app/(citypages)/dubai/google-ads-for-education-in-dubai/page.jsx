import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Education in Dubai | School & Institute PPC Experts",
  description:
    "Boost enrollments with Google Ads for education in Dubai. Targeted campaigns for schools, universities & training institutes built to lower cost per admission inquiry.",
  keywords:
    "google ads for education in dubai, education ppc dubai, school advertising agency dubai, university marketing dubai, google ads for schools dubai, training institute marketing dubai, admission lead generation dubai, education digital marketing agency uae, enrollment marketing dubai, edtech advertising dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-education-dubai",
  },

  openGraph: {
    title: "Google Ads for Education in Dubai | School & Institute PPC Experts",
    description:
      "Boost enrollments with Google Ads for education in Dubai. Targeted campaigns for schools, universities & training institutes built to lower cost per admission inquiry.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-education-dubai",
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
    title: "Google Ads for Education in Dubai | School & Institute PPC Experts",
    description:
      "Boost enrollments with Google Ads for education in Dubai. Targeted campaigns for schools, universities & training institutes built to lower cost per admission inquiry.",
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