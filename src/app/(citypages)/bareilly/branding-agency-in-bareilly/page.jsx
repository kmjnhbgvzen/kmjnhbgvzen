import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Bareilly | Build a Memorable, Trusted Brand",
  description:
    "Build a strong, recognisable brand with a trusted branding agency in Bareilly — logo design, brand strategy, visual identity and positioning that drives real business growth.",
  keywords:
    "branding agency in Bareilly, brand identity design Bareilly, logo design company Bareilly, brand strategy agency, branding and designing company, corporate branding services Bareilly, best branding agency India, brand positioning services, visual identity design agency, rebranding services Bareilly, creative branding solutions for business",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/branding-agency-bareilly",
  },
  openGraph: {
    title: "Branding Agency in Bareilly | Build a Memorable, Trusted Brand",
    description:
      "Build a strong, recognisable brand with a trusted branding agency in Bareilly — logo design, brand strategy, visual identity and positioning that drives real business growth.",
    url: "https://www.zentrixinfotech.com/bareilly/branding-agency-in-bareilly",
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
    title: "Branding Agency in Bareilly | Build a Memorable, Trusted Brand",
    description:
      "Build a strong, recognisable brand with a trusted branding agency in Bareilly — logo design, brand strategy, visual identity and positioning that drives real business growth.",
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