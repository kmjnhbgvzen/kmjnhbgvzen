import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Healthcare SEO Agency Moradabad | How to Choose",
  description:
    "Looking for the best healthcare SEO agency in Moradabad? Use our scorecard and simple checks to verify any agency, and see how Zentrix Infotech measures up.",
  keywords:
    "best healthcare SEO agency Moradabad, best healthcare SEO company Moradabad, top medical SEO agency Moradabad, best SEO agency for doctors, best SEO agency for hospitals Moradabad, how to choose a healthcare SEO agency, healthcare SEO scorecard, medical SEO agency near me, clinic SEO agency Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-healthcare-seo-agency-moradabad",
  },

  openGraph: {
    title: "Best Healthcare SEO Agency Moradabad | How to Choose",
    description:
      "Looking for the best healthcare SEO agency in Moradabad? Use our scorecard and simple checks to verify any agency, and see how Zentrix Infotech measures up.",
    url: "https://www.zentrixinfotech.com/moradabad/best-healthcare-seo-agency-moradabad",
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
    title: "Best Healthcare SEO Agency Moradabad | How to Choose",
    description:
      "Looking for the best healthcare SEO agency in Moradabad? Use our scorecard and simple checks to verify any agency, and see how Zentrix Infotech measures up.",
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