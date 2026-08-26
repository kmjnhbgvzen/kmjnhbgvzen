import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Customize My Billing Software | Zentrix Infotech",
  description:
    "Billing software not matching your invoicing or GST needs? Zentrix Infotech helps you customize my billing software around your workflow — free customization offer.",
  keywords:
    "customize my billing software, customize billing software, customize existing billing software, billing software customization, billing system customization, invoice software customization, custom billing solutions, billing software modification, business billing customization, custom invoicing software, invoice customization, GST billing, GST invoice",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/customize-my-billing-software",
  },
  openGraph: {
    title: "Customize My Billing Software | Zentrix Infotech",
    description:
      "Billing software not matching your invoicing or GST needs? Zentrix Infotech helps you customize my billing software around your workflow — free customization offer.",
    url: "https://www.zentrixinfotech.com/customize-my-billing-software",
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
    title: "Customize My Billing Software | Zentrix Infotech",
    description:
      "Billing software not matching your invoicing or GST needs? Zentrix Infotech helps you customize my billing software around your workflow — free customization offer.",
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