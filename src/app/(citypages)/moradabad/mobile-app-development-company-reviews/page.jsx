import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Mobile App Development Company Reviews | Zentrix Infotech",
  description:
    "Read what clients say about Zentrix Infotech and learn how to judge mobile app development company reviews. 250+ projects, 270+ clients and a 4.7/5 rating.",
  keywords:
    "mobile app development company reviews, mobile app development company ratings, app development company reviews India, best rated mobile app development company, mobile app development client reviews, mobile app development company testimonials, trusted mobile app development company, how to choose mobile app development company, Zentrix Infotech reviews, Zentrix Infotech client testimonials, mobile app development company Moradabad reviews, mobile app development company Ghaziabad reviews, app development company ratings and reviews, reliable app development company India, mobile app development company feedback",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-reviews",
  },

  openGraph: {
    title: "Mobile App Development Company Reviews | Zentrix Infotech",
    description:
      "Read what clients say about Zentrix Infotech and learn how to judge mobile app development company reviews. 250+ projects, 270+ clients and a 4.7/5 rating.",
    url:
      "https://www.zentrixinfotech.com/moradabad/mobile-app-development-company-reviews",
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
    title: "Mobile App Development Company Reviews | Zentrix Infotech",
    description:
      "Read what clients say about Zentrix Infotech and learn how to judge mobile app development company reviews. 250+ projects, 270+ clients and a 4.7/5 rating.",
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