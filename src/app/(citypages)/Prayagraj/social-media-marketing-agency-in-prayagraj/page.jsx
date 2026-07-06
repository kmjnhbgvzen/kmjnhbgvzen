import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Social Media Marketing Agency in Prayagraj | Zentrix Infotech",
  description:
    "Grow your brand online with a trusted social media marketing agency in Prayagraj. Zentrix Infotech creates result-driven Instagram, Facebook & LinkedIn strategies that boost engagement and sales.",
  keywords:
    "social media marketing agency in Prayagraj, social media marketing company Prayagraj, Instagram marketing Prayagraj, Facebook marketing agency Prayagraj, digital marketing agency Prayagraj, social media management services Prayagraj, best SMM agency Prayagraj, affordable social media marketing Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/social-media-marketing-agency-in-prayagraj",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Prayagraj | Zentrix Infotech",
    description:
      "Grow your brand online with a trusted social media marketing agency in Prayagraj. Zentrix Infotech creates result-driven Instagram, Facebook & LinkedIn strategies that boost engagement and sales.",
    url: "https://www.zentrixinfotech.com/prayagraj/social-media-marketing-agency-in-prayagraj",
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
    title: "Social Media Marketing Agency in Prayagraj | Zentrix Infotech",
    description:
      "Grow your brand online with a trusted social media marketing agency in Prayagraj. Zentrix Infotech creates result-driven Instagram, Facebook & LinkedIn strategies that boost engagement and sales.",
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