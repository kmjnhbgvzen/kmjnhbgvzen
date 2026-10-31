import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Custom Software Company vs Outsourcing Moradabad | Zentrix Infotech",
  description:
    "Custom software development company vs outsourcing in Moradabad: compare cost, control, quality and risk, and choose the right model with Zentrix Infotech.",
  keywords:
    "custom software development company vs outsourcing moradabad, software outsourcing vs in house development, outsourcing vs software development company, hire software company vs freelancers moradabad, in house vs outsourced software development india, software development outsourcing moradabad, local software company vs offshore outsourcing, dedicated development team moradabad, benefits of outsourcing software development, risks of software outsourcing, how to choose software outsourcing partner, custom software development company moradabad, software development company moradabad, IT outsourcing company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-development-company-vs-outsourcing-moradabad",
  },

  openGraph: {
    title:
      "Custom Software Company vs Outsourcing Moradabad | Zentrix Infotech",
    description:
      "Custom software development company vs outsourcing in Moradabad: compare cost, control, quality and risk, and choose the right model with Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-software-development-company-vs-outsourcing-moradabad",
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
      "Custom Software Company vs Outsourcing Moradabad | Zentrix Infotech",
    description:
      "Custom software development company vs outsourcing in Moradabad: compare cost, control, quality and risk, and choose the right model with Zentrix Infotech.",
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