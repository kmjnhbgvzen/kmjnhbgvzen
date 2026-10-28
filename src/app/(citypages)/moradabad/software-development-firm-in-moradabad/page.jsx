import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software Development Firm in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is a software development firm in Moradabad with a skilled team, clear process and transparent pricing. Custom software, apps, ERP and CRM. Call now.",
  keywords:
    "software development firm in Moradabad, software development firm Moradabad, IT software firm Moradabad, custom software development firm, software engineering firm Moradabad, software consulting firm Moradabad, enterprise software development firm, ERP development firm Moradabad, web and app development firm Moradabad, software outsourcing firm Moradabad, software firm near me, trusted software development firm, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-firm-in-moradabad",
  },

  openGraph: {
    title:
      "Software Development Firm in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development firm in Moradabad with a skilled team, clear process and transparent pricing. Custom software, apps, ERP and CRM. Call now.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-firm-in-moradabad",
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
      "Software Development Firm in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is a software development firm in Moradabad with a skilled team, clear process and transparent pricing. Custom software, apps, ERP and CRM. Call now.",
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