import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Price in Moradabad | Zentrix",
  description:
    "Understand enterprise software development services price in Moradabad: pricing models, cost factors and ways to save. Get a clear written quote from Zentrix Infotech.",
  keywords:
    "enterprise software development services price moradabad, enterprise software price moradabad, enterprise software development pricing moradabad, enterprise software development cost moradabad, custom software price moradabad, ERP development price moradabad, enterprise application development price, affordable enterprise software moradabad, enterprise software quote moradabad, fixed price software development moradabad, enterprise software development company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-services-price-moradabad",
  },

  openGraph: {
    title: "Enterprise Software Development Price in Moradabad | Zentrix",
    description:
      "Understand enterprise software development services price in Moradabad: pricing models, cost factors and ways to save. Get a clear written quote from Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-services-price-moradabad",
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
    title: "Enterprise Software Development Price in Moradabad | Zentrix",
    description:
      "Understand enterprise software development services price in Moradabad: pricing models, cost factors and ways to save. Get a clear written quote from Zentrix Infotech.",
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