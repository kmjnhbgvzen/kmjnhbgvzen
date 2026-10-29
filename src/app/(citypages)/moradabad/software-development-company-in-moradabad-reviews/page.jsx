import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company in Moradabad Reviews | Zentrix Infotech",
  description:
    "Read client reviews and feedback for Zentrix Infotech, a software development company in Moradabad. See real results, ratings and how to judge a software company.",
  keywords:
    "software development company in moradabad reviews, software development company moradabad reviews, zentrix infotech reviews, best software company moradabad reviews, software developers moradabad reviews, moradabad software company ratings, client reviews software development moradabad, software development company moradabad testimonials, trusted software development company moradabad, top rated software company moradabad, software company reviews india, how to check software company reviews, software development company in moradabad, custom software development moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-in-moradabad-reviews",
  },

  openGraph: {
    title:
      "Software Development Company in Moradabad Reviews | Zentrix Infotech",
    description:
      "Read client reviews and feedback for Zentrix Infotech, a software development company in Moradabad. See real results, ratings and how to judge a software company.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-in-moradabad-reviews",
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
      "Software Development Company in Moradabad Reviews | Zentrix Infotech",
    description:
      "Read client reviews and feedback for Zentrix Infotech, a software development company in Moradabad. See real results, ratings and how to judge a software company.",
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