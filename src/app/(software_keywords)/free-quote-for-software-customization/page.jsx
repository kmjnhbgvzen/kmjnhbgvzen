import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Free Quote for Software Customization | Zentrix Infotech",
  description:
    "Want to customize your software but unsure of the scope or cost? Get a FREE quote for software customization from Zentrix Infotech. Share your requirements today.",
  keywords:
    "free quote for software customization, free software customization quote, software customization quote, software customization estimate, software customization cost, get a software customization quote, request software customization quote, free quote for software modification, software modification quote, customize existing software quote, software customization pricing, free software customization consultation, software customization services",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/free-quote-for-software-customization",
  },
  openGraph: {
    title: "Free Quote for Software Customization | Zentrix Infotech",
    description:
      "Want to customize your software but unsure of the scope or cost? Get a FREE quote for software customization from Zentrix Infotech. Share your requirements today.",
    url: "https://www.zentrixinfotech.com/free-quote-for-software-customization",
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
    title: "Free Quote for Software Customization | Zentrix Infotech",
    description:
      "Want to customize your software but unsure of the scope or cost? Get a FREE quote for software customization from Zentrix Infotech. Share your requirements today.",
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