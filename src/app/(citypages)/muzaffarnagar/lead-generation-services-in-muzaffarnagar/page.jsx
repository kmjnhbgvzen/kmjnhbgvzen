import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Muzaffarnagar | Get Quality Leads Daily",
  description:
    "Result-oriented Lead Generation Services in Muzaffarnagar using SEO, ads & automation to bring targeted, ready-to-buy leads for your business every day.",
  keywords:
    "lead generation services in muzaffarnagar, lead generation agency muzaffarnagar, b2b lead generation muzaffarnagar, digital lead generation company, best lead generation services near me, real estate lead generation muzaffarnagar, google ads lead generation agency, facebook ads lead generation muzaffarnagar, whatsapp lead generation services, digital marketing agency muzaffarnagar, local business lead generation, qualified leads for small business",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/muzaffarnagar/lead-generation-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "Lead Generation Services in Muzaffarnagar | Get Quality Leads Daily",
    description:
      "Result-oriented Lead Generation Services in Muzaffarnagar using SEO, ads & automation to bring targeted, ready-to-buy leads for your business every day.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/lead-generation-services-in-muzaffarnagar",
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
    title: "Lead Generation Services in Muzaffarnagar | Get Quality Leads Daily",
    description:
      "Result-oriented Lead Generation Services in Muzaffarnagar using SEO, ads & automation to bring targeted, ready-to-buy leads for your business every day.",
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