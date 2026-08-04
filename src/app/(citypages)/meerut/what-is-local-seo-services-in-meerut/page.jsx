import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "What Is Local SEO Services in Meerut? Complete Beginner's Guide 2026",
  description:
    "Confused about what local SEO services actually include? Learn what local SEO means, how it works, and how it helps Meerut businesses rank higher on Google.",
  keywords:
    "what is local SEO services Meerut, local SEO meaning, local SEO services explained, local SEO Meerut, what is local SEO, local SEO company Meerut, Google My Business optimization, local search ranking factors, local SEO services near me, local SEO for small business, local SEO strategy Meerut, Zentrix Infotech local SEO, local SEO process explained, local SEO benefits, near me search optimization Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/what-is-local-seo-services-in-meerut",
  },
  openGraph: {
    title: "What Is Local SEO Services in Meerut? Complete Beginner's Guide 2026",
    description:
      "Confused about what local SEO services actually include? Learn what local SEO means, how it works, and how it helps Meerut businesses rank higher on Google.",
    url: "https://www.zentrixinfotech.com/meerut/what-is-local-seo-services-in-meerut",
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
    title: "What Is Local SEO Services in Meerut? Complete Beginner's Guide 2026",
    description:
      "Confused about what local SEO services actually include? Learn what local SEO means, how it works, and how it helps Meerut businesses rank higher on Google.",
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