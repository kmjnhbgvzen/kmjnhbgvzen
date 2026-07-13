import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Bareilly | Zentrix Infotech",
  description:
    "Grow patient inquiries with expert digital marketing for hospitals in Bareilly by Zentrix Infotech. SEO, websites & ads that build trust and fill appointments.",
  keywords:
    "digital marketing for hospitals in Bareilly, hospital marketing agency Bareilly, healthcare digital marketing Bareilly, hospital SEO services Bareilly, clinic marketing company Bareilly, medical website development Bareilly, hospital website design Bareilly, doctor digital marketing services, patient acquisition marketing Bareilly, healthcare marketing agency near me, best digital marketing company for hospitals, hospital branding services Bareilly",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-hospitals-bareilly",
  },

  openGraph: {
    title: "Digital Marketing for Hospitals in Bareilly | Zentrix Infotech",
    description:
      "Grow patient inquiries with expert digital marketing for hospitals in Bareilly by Zentrix Infotech. SEO, websites & ads that build trust and fill appointments.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-for-hospitals-bareilly",
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
    title: "Digital Marketing for Hospitals in Bareilly | Zentrix Infotech",
    description:
      "Grow patient inquiries with expert digital marketing for hospitals in Bareilly by Zentrix Infotech. SEO, websites & ads that build trust and fill appointments.",
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