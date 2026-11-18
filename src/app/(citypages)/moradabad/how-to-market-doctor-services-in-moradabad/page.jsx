import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Market Doctor Services in Moradabad | Zentrix Infotech",
  description:
    "Learn how to market doctor services in Moradabad with 10 practical steps: Google profile, reviews, WhatsApp, content, ads and local referrals. Get expert help from Zentrix Infotech.",
  keywords:
    "how to market doctor services in Moradabad, doctor marketing Moradabad, how to promote clinic in Moradabad, how to get more patients Moradabad, clinic marketing ideas Moradabad, doctor promotion Moradabad, digital marketing for doctors Moradabad, local marketing for doctors, patient acquisition Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-market-doctor-services-in-moradabad",
  },

  openGraph: {
    title: "How to Market Doctor Services in Moradabad | Zentrix Infotech",
    description:
      "Learn how to market doctor services in Moradabad with 10 practical steps: Google profile, reviews, WhatsApp, content, ads and local referrals. Get expert help from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-market-doctor-services-in-moradabad",
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
    title: "How to Market Doctor Services in Moradabad | Zentrix Infotech",
    description:
      "Learn how to market doctor services in Moradabad with 10 practical steps: Google profile, reviews, WhatsApp, content, ads and local referrals. Get expert help from Zentrix Infotech.",
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