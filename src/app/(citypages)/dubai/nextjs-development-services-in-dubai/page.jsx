import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Next.js Development Services in Dubai | Zentrix Infotech",
  description:
    "Looking for expert Next.js development services in Dubai? Zentrix Infotech builds fast, SEO-friendly, scalable Next.js websites and web apps that rank higher and convert better.",
  keywords:
    "Next.js development services Dubai, Next.js development company Dubai, hire Next.js developers Dubai, Next.js web development UAE, React Next.js agency Dubai, custom Next.js web app development, SEO friendly Next.js website Dubai, best Next.js development company UAE, Next.js e-commerce development Dubai, enterprise Next.js development services",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/nextjs-development-services-in-dubai",
  },

  openGraph: {
    title: "Next.js Development Services in Dubai | Zentrix Infotech",
    description:
      "Looking for expert Next.js development services in Dubai? Zentrix Infotech builds fast, SEO-friendly, scalable Next.js websites and web apps that rank higher and convert better.",
    url: "https://www.zentrixinfotech.com/dubai/nextjs-development-services-in-dubai",
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
    title: "Next.js Development Services in Dubai | Zentrix Infotech",
    description:
      "Looking for expert Next.js development services in Dubai? Zentrix Infotech builds fast, SEO-friendly, scalable Next.js websites and web apps that rank higher and convert better.",
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