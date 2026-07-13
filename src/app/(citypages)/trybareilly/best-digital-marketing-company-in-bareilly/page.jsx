import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Agency in Bareilly | Grow Online",
  description:
    "Looking for a trusted digital marketing agency in Bareilly? We offer SEO, PPC, social media & web design services that deliver real, measurable growth.",
  keywords:
    "digital marketing agency in Bareilly, digital marketing company Bareilly, SEO services in Bareilly, social media marketing agency Bareilly, best digital marketing agency near me, PPC agency Bareilly, website designing company Bareilly, online marketing services Bareilly, local SEO Bareilly, digital marketing consultant Bareilly, affordable digital marketing agency UP, digital marketing agency for small business Bareilly, Google Ads agency Bareilly, content marketing services Bareilly, ecommerce marketing agency Bareilly",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/bareilly/digital-marketing-agency-in-bareilly",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Bareilly | Grow Online",
    description:
      "Looking for a trusted digital marketing agency in Bareilly? We offer SEO, PPC, social media & web design services that deliver real, measurable growth.",
    url: "https://www.zentrixinfotech.com/bareilly/digital-marketing-agency-in-bareilly",
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
    title: "Best Digital Marketing Agency in Bareilly | Grow Online",
    description:
      "Looking for a trusted digital marketing agency in Bareilly? We offer SEO, PPC, social media & web design services that deliver real, measurable growth.",
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