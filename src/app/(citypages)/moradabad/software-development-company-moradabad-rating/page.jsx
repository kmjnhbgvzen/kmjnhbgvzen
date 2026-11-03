import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Development Company Moradabad Rating | Zentrix Infotech",
  description:
    "Check the software development company Moradabad rating of Zentrix Infotech: 4.7/5 score, 250+ projects, 270+ clients. Honest reviews, services and how to verify.",
  keywords:
    "software development company moradabad rating, software company moradabad rating, best rated software development company moradabad, top rated software company moradabad, moradabad software company reviews and ratings, zentrix infotech rating, zentrix infotech reviews, custom software development moradabad, IT company moradabad, software development services moradabad, trusted software company moradabad, software company near me moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-moradabad-rating",
  },

  openGraph: {
    title: "Software Development Company Moradabad Rating | Zentrix Infotech",
    description:
      "Check the software development company Moradabad rating of Zentrix Infotech: 4.7/5 score, 250+ projects, 270+ clients. Honest reviews, services and how to verify.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-moradabad-rating",
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
    title: "Software Development Company Moradabad Rating | Zentrix Infotech",
    description:
      "Check the software development company Moradabad rating of Zentrix Infotech: 4.7/5 score, 250+ projects, 270+ clients. Honest reviews, services and how to verify.",
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