import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Software Development Company Reviews Moradabad | Zentrix",
  description:
    "Read client feedback for Zentrix Infotech, a software development company in Moradabad rated 4.7/5 across 250+ projects. See results, services and how to hire us.",
  keywords:
    "software development company reviews moradabad, software company reviews moradabad, zentrix infotech reviews, best software company moradabad reviews, client testimonials software company moradabad, software development company moradabad, top rated software developers moradabad, custom software development moradabad reviews, web development company reviews moradabad, how to choose software company moradabad, trusted software company moradabad, software company ratings india, Zentrix Infotech testimonials, IT company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-reviews-moradabad",
  },

  openGraph: {
    title: "Software Development Company Reviews Moradabad | Zentrix",
    description:
      "Read client feedback for Zentrix Infotech, a software development company in Moradabad rated 4.7/5 across 250+ projects. See results, services and how to hire us.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-reviews-moradabad",
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
    title: "Software Development Company Reviews Moradabad | Zentrix",
    description:
      "Read client feedback for Zentrix Infotech, a software development company in Moradabad rated 4.7/5 across 250+ projects. See results, services and how to hire us.",
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