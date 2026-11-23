import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "IT Company in Lucknow – Web, Software & Apps | Zentrix",

  description:
    "Looking for an IT company in Lucknow? Zentrix Infotech offers web, software, mobile app, UI/UX, cloud and digital marketing services. Get a free consultation.",

  keywords:
    "IT Company in Lucknow, IT solutions company in Lucknow, IT services company in Lucknow, software company in Lucknow, web development company in Lucknow, mobile app development company in Lucknow, digital marketing company in Lucknow, UI/UX design company in Lucknow, cloud solutions company in Lucknow, custom software development in Lucknow, IT company for startups in Lucknow, affordable IT services in Lucknow, IT consulting in Lucknow, end-to-end IT solutions, digital transformation for small business, business software and website together, IT partner for startups, scalable cloud infrastructure, IT outsourcing, how to choose an IT company in Lucknow, IT services cost in Lucknow, what does an IT company do",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/it-company-in-lucknow",
  },

  openGraph: {
    title: "IT Company in Lucknow – Web, Software & Apps | Zentrix",
    description:
      "Looking for an IT company in Lucknow? Zentrix Infotech offers web, software, mobile app, UI/UX, cloud and digital marketing services. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/lucknow/it-company-in-lucknow",
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
    title: "IT Company in Lucknow – Web, Software & Apps | Zentrix",
    description:
      "Looking for an IT company in Lucknow? Zentrix Infotech offers web, software, mobile app, UI/UX, cloud and digital marketing services. Get a free consultation.",
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