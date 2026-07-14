import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Meerut | Zentrix Infotech",
  description:
    "Build a brand that stands out with a trusted branding agency in Meerut. Zentrix Infotech offers logo design, brand strategy, and complete identity solutions.",
  keywords:
    "branding agency in Meerut, logo design services Meerut, brand identity agency UP, brand strategy company Meerut, corporate branding services, business branding agency UP, Zentrix Infotech Meerut, brand design company Meerut, visual identity design services, branding and graphic design agency, brand consulting Meerut, digital branding agency UP, packaging design services Meerut, brand guidelines company, branding agency Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/branding-agency-meerut",
  },
  openGraph: {
    title: "Branding Agency in Meerut | Zentrix Infotech",
    description:
      "Build a brand that stands out with a trusted branding agency in Meerut. Zentrix Infotech offers logo design, brand strategy, and complete identity solutions.",
    url: "https://www.zentrixinfotech.com/meerut/branding-agency-meerut",
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
    title: "Branding Agency in Meerut | Zentrix Infotech",
    description:
      "Build a brand that stands out with a trusted branding agency in Meerut. Zentrix Infotech offers logo design, brand strategy, and complete identity solutions.",
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