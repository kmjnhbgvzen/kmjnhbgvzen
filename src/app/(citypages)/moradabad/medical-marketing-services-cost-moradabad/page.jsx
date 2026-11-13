import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Medical Marketing Services Cost in Moradabad | Zentrix",
  description:
    "Understand medical marketing services cost in Moradabad: what affects pricing, pricing models, hidden costs and how to budget. Free consultation by Zentrix Infotech.",
  keywords:
    "medical marketing services cost Moradabad, medical marketing cost Moradabad, healthcare marketing pricing Moradabad, hospital marketing cost Moradabad, clinic marketing packages Moradabad, doctor marketing price Moradabad, digital marketing cost for hospitals, medical SEO cost Moradabad, medical Google Ads cost Moradabad, medical marketing budget, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-services-cost-in-moradabad",
  },

  openGraph: {
    title:
      "Medical Marketing Services Cost in Moradabad | Zentrix",
    description:
      "Understand medical marketing services cost in Moradabad: what affects pricing, pricing models, hidden costs and how to budget. Free consultation by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-services-cost-moradabad",
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
    title:
      "Medical Marketing Services Cost in Moradabad | Zentrix",
    description:
      "Understand medical marketing services cost in Moradabad: what affects pricing, pricing models, hidden costs and how to budget. Free consultation by Zentrix Infotech.",
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