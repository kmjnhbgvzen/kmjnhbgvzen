import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a trusted software development company in Moradabad. Custom software, web apps, ERP, CRM and mobile apps with clear pricing. Get a free quote.",
  keywords:
    "software development company in Moradabad, Moradabad software development services, custom software development Moradabad, best software development company Moradabad, software development firm in Moradabad, software development company near me Moradabad, software development cost in Moradabad, IT software development company Moradabad, enterprise software development Moradabad, ERP software development Moradabad, CRM software development Moradabad, software outsourcing Moradabad, software development for startups Moradabad, business software solutions, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "Software Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted software development company in Moradabad. Custom software, web apps, ERP, CRM and mobile apps with clear pricing. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-in-moradabad",
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
      "Software Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a trusted software development company in Moradabad. Custom software, web apps, ERP, CRM and mobile apps with clear pricing. Get a free quote.",
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