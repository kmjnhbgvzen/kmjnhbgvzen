import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Prayagraj | Zentrix Infotech – Rank on Google Maps",
  description:
    "Boost your visibility in local searches with expert local SEO services in Prayagraj. Zentrix Infotech helps businesses rank on Google Maps, attract nearby customers & grow footfall.",
  keywords:
    "local SEO services in Prayagraj, local SEO company Prayagraj, Google Maps ranking Prayagraj, Google Business Profile optimization Prayagraj, near me SEO Prayagraj, local search optimization Prayagraj, local SEO expert Prayagraj, best local SEO agency Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/local-seo-services-in-prayagraj",
  },
  openGraph: {
    title: "Local SEO Services in Prayagraj | Zentrix Infotech – Rank on Google Maps",
    description:
      "Boost your visibility in local searches with expert local SEO services in Prayagraj. Zentrix Infotech helps businesses rank on Google Maps, attract nearby customers & grow footfall.",
    url: "https://www.zentrixinfotech.com/prayagraj/local-seo-services-in-prayagraj",
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
    title: "Local SEO Services in Prayagraj | Zentrix Infotech – Rank on Google Maps",
    description:
      "Boost your visibility in local searches with expert local SEO services in Prayagraj. Zentrix Infotech helps businesses rank on Google Maps, attract nearby customers & grow footfall.",
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