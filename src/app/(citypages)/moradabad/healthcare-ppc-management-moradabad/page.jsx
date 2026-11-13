import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Healthcare PPC Management in Moradabad | Zentrix Infotech",
  description:
    "Get more patient calls and appointments with healthcare PPC management in Moradabad. Google Ads and Meta Ads for hospitals and clinics by Zentrix Infotech.",
  keywords:
    "healthcare PPC management Moradabad, PPC for hospitals Moradabad, Google Ads for doctors Moradabad, clinic PPC services Moradabad, medical PPC agency Moradabad, healthcare Google Ads management, hospital Meta Ads Moradabad, patient lead generation Moradabad, pay per click for clinics, healthcare advertising Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/healthcare-ppc-management-moradabad",
  },

  openGraph: {
    title: "Healthcare PPC Management in Moradabad | Zentrix Infotech",
    description:
      "Get more patient calls and appointments with healthcare PPC management in Moradabad. Google Ads and Meta Ads for hospitals and clinics by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/healthcare-ppc-management-moradabad",
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
    title: "Healthcare PPC Management in Moradabad | Zentrix Infotech",
    description:
      "Get more patient calls and appointments with healthcare PPC management in Moradabad. Google Ads and Meta Ads for hospitals and clinics by Zentrix Infotech.",
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