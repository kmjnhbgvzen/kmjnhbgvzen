import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Development Pricing Moradabad | Zentrix",
  description:
    "Understand custom software development pricing in Moradabad: fixed price, hourly and dedicated team models, package tiers and payment terms. Get a free quote.",
  keywords:
    "custom software development pricing moradabad, custom software pricing in moradabad, software development pricing models india, fixed price software development moradabad, hourly rate software developer moradabad, dedicated developer cost moradabad, custom software packages moradabad, software development quote moradabad, affordable custom software pricing, custom software payment milestones, how software companies price projects, software development rates india, small business software pricing moradabad, custom software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-development-pricing-moradabad",
  },

  openGraph: {
    title: "Custom Software Development Pricing Moradabad | Zentrix",
    description:
      "Understand custom software development pricing in Moradabad: fixed price, hourly and dedicated team models, package tiers and payment terms. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-software-development-pricing-moradabad",
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
    title: "Custom Software Development Pricing Moradabad | Zentrix",
    description:
      "Understand custom software development pricing in Moradabad: fixed price, hourly and dedicated team models, package tiers and payment terms. Get a free quote.",
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