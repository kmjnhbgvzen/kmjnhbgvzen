import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Graphic Design Services in Bareilly | Logo, Branding & Print Design",
  description:
    "Looking for graphic design services in Bareilly? Get professional logo design, branding, packaging, brochure and social media graphics from expert designers.",
  keywords:
    "graphic design services in Bareilly, graphic designer Bareilly, logo design Bareilly, branding agency Bareilly, packaging design Bareilly, brochure design Bareilly, best graphic design company Bareilly, freelance graphic designer Bareilly, creative design agency UP, affordable graphic design services Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/graphic-design-services-in-bareilly",
  },
  openGraph: {
    title: "Graphic Design Services in Bareilly | Logo, Branding & Print Design",
    description:
      "Looking for graphic design services in Bareilly? Get professional logo design, branding, packaging, brochure and social media graphics from expert designers.",
    url: "https://www.zentrixinfotech.com/bareilly/graphic-design-services-in-bareilly",
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
    title: "Graphic Design Services in Bareilly | Logo, Branding & Print Design",
    description:
      "Looking for graphic design services in Bareilly? Get professional logo design, branding, packaging, brochure and social media graphics from expert designers.",
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