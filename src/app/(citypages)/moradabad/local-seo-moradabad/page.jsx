import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Moradabad | Google Maps Ranking | Zentrix Infotech",
  description:
    "Want more calls and walk-ins? Zentrix Infotech provides local SEO in Moradabad, from Google Maps ranking to reviews and listings. Get a free local audit.",
  keywords:
    "local SEO Moradabad, local SEO in Moradabad, local SEO expert Moradabad, Google Maps SEO Moradabad, Google My Business SEO Moradabad, local search optimization Moradabad, near me ranking Moradabad, local SEO for clinics Moradabad, local SEO for shops Moradabad, local SEO agency Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/local-seo-moradabad",
  },

  openGraph: {
    title: "Local SEO Moradabad | Google Maps Ranking | Zentrix Infotech",
    description:
      "Want more calls and walk-ins? Zentrix Infotech provides local SEO in Moradabad, from Google Maps ranking to reviews and listings. Get a free local audit.",
    url: "https://www.zentrixinfotech.com/moradabad/local-seo-moradabad",
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
    title: "Local SEO Moradabad | Google Maps Ranking | Zentrix Infotech",
    description:
      "Want more calls and walk-ins? Zentrix Infotech provides local SEO in Moradabad, from Google Maps ranking to reviews and listings. Get a free local audit.",
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