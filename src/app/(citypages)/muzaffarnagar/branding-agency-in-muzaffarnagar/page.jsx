import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Muzaffarnagar | Logo, Identity & Brand Strategy",
  description:
    "Trusted Branding Agency in Muzaffarnagar offering logo design, brand identity, packaging & strategy to help your business stand out and grow locally.",
  keywords:
    "branding agency in muzaffarnagar, branding company muzaffarnagar, logo design agency muzaffarnagar, brand identity design muzaffarnagar, best branding agency near me, corporate branding services muzaffarnagar, graphic design company muzaffarnagar, brand strategy agency muzaffarnagar, packaging design services muzaffarnagar, digital marketing agency muzaffarnagar, business branding services india, startup branding agency",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/branding-agency-in-muzaffarnagar",
  },
  openGraph: {
    title: "Branding Agency in Muzaffarnagar | Logo, Identity & Brand Strategy",
    description:
      "Trusted Branding Agency in Muzaffarnagar offering logo design, brand identity, packaging & strategy to help your business stand out and grow locally.",
    url: "https://www.zentrixinfotech.com/branding-agency-in-muzaffarnagar",
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
    title: "Branding Agency in Muzaffarnagar | Logo, Identity & Brand Strategy",
    description:
      "Trusted Branding Agency in Muzaffarnagar offering logo design, brand identity, packaging & strategy to help your business stand out and grow locally.",
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