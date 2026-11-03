import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Development Company Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a custom software development company in Moradabad building tailor-made ERP, CRM and business apps. 250+ projects, 4.7/5 rating. Get a free quote.",
  keywords:
    "custom software development company moradabad, custom software company moradabad, bespoke software development moradabad, tailor-made software moradabad, custom business software moradabad, custom ERP software moradabad, custom CRM development moradabad, custom web application development moradabad, custom mobile app development moradabad, software development company moradabad, IT solutions company moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/custom-software-development-company-moradabad",
  },

  openGraph: {
    title: "Custom Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a custom software development company in Moradabad building tailor-made ERP, CRM and business apps. 250+ projects, 4.7/5 rating. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/custom-software-development-company-moradabad",
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
    title: "Custom Software Development Company Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a custom software development company in Moradabad building tailor-made ERP, CRM and business apps. 250+ projects, 4.7/5 rating. Get a free quote.",
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