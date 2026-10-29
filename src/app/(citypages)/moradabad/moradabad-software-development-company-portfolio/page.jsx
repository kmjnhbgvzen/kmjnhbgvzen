import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company Portfolio Moradabad | Zentrix Infotech",
  description:
    "Explore the portfolio of Zentrix Infotech, a software development company in Moradabad. See e-commerce, education, interior and event platforms we have built.",
  keywords:
    "moradabad software development company portfolio, software development portfolio moradabad, zentrix infotech portfolio, software company portfolio moradabad, software development projects moradabad, web development portfolio moradabad, e-commerce platform portfolio moradabad, custom software projects india, software development case studies moradabad, software company work samples moradabad, best software company portfolio, software development company in moradabad, custom software development moradabad, website and app portfolio moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-portfolio",
  },

  openGraph: {
    title:
      "Software Development Company Portfolio Moradabad | Zentrix Infotech",
    description:
      "Explore the portfolio of Zentrix Infotech, a software development company in Moradabad. See e-commerce, education, interior and event platforms we have built.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-portfolio",
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
      "Software Development Company Portfolio Moradabad | Zentrix Infotech",
    description:
      "Explore the portfolio of Zentrix Infotech, a software development company in Moradabad. See e-commerce, education, interior and event platforms we have built.",
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