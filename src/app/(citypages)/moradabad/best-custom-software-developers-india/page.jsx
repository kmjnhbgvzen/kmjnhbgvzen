import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Custom Software Developers India | Zentrix Infotech",
  description:
    "Looking for the best custom software developers in India? Zentrix Infotech builds tailored web, mobile and enterprise software for startups and SMEs. Get a quote.",
  keywords:
    "best custom software developers india, custom software developers india, top custom software development company india, hire custom software developers india, custom software development services india, bespoke software development india, tailor made software solutions india, custom web application developers india, custom mobile app developers india, affordable custom software developers, custom software for startups india, custom enterprise software developers india, custom software vs off the shelf, custom software development company, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-custom-software-developers-india",
  },

  openGraph: {
    title: "Best Custom Software Developers India | Zentrix Infotech",
    description:
      "Looking for the best custom software developers in India? Zentrix Infotech builds tailored web, mobile and enterprise software for startups and SMEs. Get a quote.",
    url: "https://www.zentrixinfotech.com/moradabad/best-custom-software-developers-india",
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
    title: "Best Custom Software Developers India | Zentrix Infotech",
    description:
      "Looking for the best custom software developers in India? Zentrix Infotech builds tailored web, mobile and enterprise software for startups and SMEs. Get a quote.",
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