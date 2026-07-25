import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Lead Generation for Real Estate in Ayodhya - Zentrix Infotech",
  description:
    "Get more qualified buyer leads with expert lead generation for real estate in Ayodhya. Zentrix Infotech offers SEO, PPC, and landing page services. Get a free consultation today.",
  keywords:
    "lead generation for real estate in Ayodhya, real estate lead generation agency Ayodhya, property lead generation company Ayodhya, real estate leads Ayodhya, real estate PPC leads Ayodhya, property investor leads Ayodhya, Zentrix Infotech Ayodhya, real estate marketing leads Uttar Pradesh, buyer lead generation Ayodhya, real estate inquiry generation Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/real-estate-lead-generation-ayodhya",
  },
  openGraph: {
    title: "Lead Generation for Real Estate in Ayodhya - Zentrix Infotech",
    description:
      "Get more qualified buyer leads with expert lead generation for real estate in Ayodhya. Zentrix Infotech offers SEO, PPC, and landing page services. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/lead-generation-for-real-estate-in-ayodhya",
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
    title: "Lead Generation for Real Estate in Ayodhya - Zentrix Infotech",
    description:
      "Get more qualified buyer leads with expert lead generation for real estate in Ayodhya. Zentrix Infotech offers SEO, PPC, and landing page services. Get a free consultation today.",
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