import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency for Indian Businesses in Dubai | Build Trust",
  description:
    "Expert branding agency for Indian businesses in Dubai. Logo, identity, website & marketing strategies that build trust with local and diaspora customers.",
  keywords:
    "branding agency for Indian businesses in Dubai, Indian business branding Dubai, branding agency Dubai, Indian entrepreneurs Dubai marketing, brand identity design Dubai, Indian restaurant branding Dubai, Indian retail branding UAE, best branding company Dubai, logo design agency Dubai, Indian diaspora marketing Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/branding-agency-for-indian-businesses-in-dubai",
  },

  openGraph: {
    title: "Branding Agency for Indian Businesses in Dubai | Build Trust",
    description:
      "Expert branding agency for Indian businesses in Dubai. Logo, identity, website & marketing strategies that build trust with local and diaspora customers.",
    url: "https://www.zentrixinfotech.com/dubai/branding-agency-for-indian-businesses-in-dubai",
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
    title: "Branding Agency for Indian Businesses in Dubai | Build Trust",
    description:
      "Expert branding agency for Indian businesses in Dubai. Logo, identity, website & marketing strategies that build trust with local and diaspora customers.",
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