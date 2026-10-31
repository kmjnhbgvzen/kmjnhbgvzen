import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company for Startups Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad software development company for startups: MVP development, scalable apps and flexible teams that grow with you. Get a free quote.",
  keywords:
    "software development company for startups moradabad, startup software development moradabad, MVP development company moradabad, startup app development moradabad, software company for startups india, build an MVP in moradabad, affordable startup software development, custom software for startups, mobile app development for startups moradabad, startup website and platform development, tech partner for startups, dedicated development team for startups, startup product development india, software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-for-startups-moradabad",
  },

  openGraph: {
    title:
      "Software Development Company for Startups Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company for startups: MVP development, scalable apps and flexible teams that grow with you. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-for-startups-moradabad",
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
      "Software Development Company for Startups Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad software development company for startups: MVP development, scalable apps and flexible teams that grow with you. Get a free quote.",
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