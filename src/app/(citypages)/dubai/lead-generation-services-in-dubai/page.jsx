import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Dubai | Get Quality Leads That Convert",
  description:
    "Grow your pipeline with expert lead generation services in Dubai. Targeted campaigns across Google, Meta & LinkedIn built for real inquiries and sales. Get a free consultation.",
  keywords:
    "lead generation services in dubai, lead generation company dubai, b2b lead generation dubai, digital marketing lead generation dubai, ppc lead generation dubai, real estate lead generation dubai, lead generation agency uae, generate leads for business dubai, online lead generation dubai, sales lead generation company dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/lead-generation-services-dubai",
  },

  openGraph: {
    title: "Lead Generation Services in Dubai | Get Quality Leads That Convert",
    description:
      "Grow your pipeline with expert lead generation services in Dubai. Targeted campaigns across Google, Meta & LinkedIn built for real inquiries and sales. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/dubai/lead-generation-services-dubai",
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
    title: "Lead Generation Services in Dubai | Get Quality Leads That Convert",
    description:
      "Grow your pipeline with expert lead generation services in Dubai. Targeted campaigns across Google, Meta & LinkedIn built for real inquiries and sales. Get a free consultation.",
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