import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Affordable Digital Marketing Agency USA | Quality Results on Any Budget",
  description:
    "Find an affordable digital marketing agency in the USA that delivers real results without overspending. SEO, PPC, social media, and web development at budget-friendly rates.",
  keywords:
    "affordable digital marketing agency USA, budget digital marketing services USA, cheap digital marketing company America, low cost SEO services USA, small business marketing agency USA, affordable PPC management USA, cost effective digital marketing agency, digital marketing for startups USA, best value marketing agency USA, digital marketing packages USA",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/affordable-digital-marketing-agency-usa",
  },
  openGraph: {
    title: "Affordable Digital Marketing Agency USA | Quality Results on Any Budget",
    description:
      "Find an affordable digital marketing agency in the USA that delivers real results without overspending. SEO, PPC, social media, and web development at budget-friendly rates.",
    url: "https://www.zentrixinfotech.com/usa/affordable-digital-marketing-agency-usa",
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
    title: "Affordable Digital Marketing Agency USA | Quality Results on Any Budget",
    description:
      "Find an affordable digital marketing agency in the USA that delivers real results without overspending. SEO, PPC, social media, and web development at budget-friendly rates.",
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