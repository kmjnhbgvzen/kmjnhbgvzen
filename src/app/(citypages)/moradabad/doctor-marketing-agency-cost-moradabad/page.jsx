import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Doctor Marketing Agency Cost in Moradabad | Zentrix Infotech",
  description:
    "Understand doctor marketing agency cost in Moradabad: what affects price, pricing models, hidden costs and how to compare proposals. Get a custom quote from Zentrix Infotech.",
  keywords:
    "doctor marketing agency cost Moradabad, doctor marketing cost Moradabad, doctor marketing agency pricing Moradabad, digital marketing cost for doctors Moradabad, clinic marketing cost Moradabad, medical SEO cost Moradabad, doctor marketing packages Moradabad, affordable doctor marketing Moradabad, healthcare marketing agency Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-cost-moradabad",
  },

  openGraph: {
    title: "Doctor Marketing Agency Cost in Moradabad | Zentrix Infotech",
    description:
      "Understand doctor marketing agency cost in Moradabad: what affects price, pricing models, hidden costs and how to compare proposals. Get a custom quote from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/doctor-marketing-agency-cost-moradabad",
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
    title: "Doctor Marketing Agency Cost in Moradabad | Zentrix Infotech",
    description:
      "Understand doctor marketing agency cost in Moradabad: what affects price, pricing models, hidden costs and how to compare proposals. Get a custom quote from Zentrix Infotech.",
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