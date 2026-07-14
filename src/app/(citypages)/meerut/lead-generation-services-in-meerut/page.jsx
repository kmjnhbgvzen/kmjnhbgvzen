import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation Services in Meerut | Get Quality Leads That Convert",
  description:
    "Looking for reliable lead generation services in Meerut? We use targeted ads, landing pages & follow-up systems to deliver real, ready-to-buy leads. Get a free consultation today.",
  keywords:
    "lead generation services in Meerut, lead generation company Meerut, lead generation agency Uttar Pradesh, B2B lead generation Meerut, local lead generation services, real estate lead generation Meerut, coaching institute lead generation, digital marketing lead generation, qualified leads for small business, online lead generation agency, best lead generation company near me",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/lead-generation-services-in-meerut",
  },
  openGraph: {
    title: "Lead Generation Services in Meerut | Get Quality Leads That Convert",
    description:
      "Looking for reliable lead generation services in Meerut? We use targeted ads, landing pages & follow-up systems to deliver real, ready-to-buy leads. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/lead-generation-services-in-meerut",
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
    title: "Lead Generation Services in Meerut | Get Quality Leads That Convert",
    description:
      "Looking for reliable lead generation services in Meerut? We use targeted ads, landing pages & follow-up systems to deliver real, ready-to-buy leads. Get a free consultation today.",
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