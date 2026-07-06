import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Varanasi | Rank Higher on Google Maps & Search",
  description:
    "Grow your business in Varanasi with expert local SEO services. Improve Google Maps ranking, get more calls, and attract nearby customers searching online.",
  keywords:
    "local SEO services in Varanasi, SEO company in Varanasi, Google My Business optimization Varanasi, local SEO expert Varanasi, digital marketing Varanasi, small business SEO Varanasi, local search ranking Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/local-seo-services-in-varanasi",
  },
  openGraph: {
    title: "Local SEO Services in Varanasi | Rank Higher on Google Maps & Search",
    description:
      "Grow your business in Varanasi with expert local SEO services. Improve Google Maps ranking, get more calls, and attract nearby customers searching online.",
    url: "https://www.zentrixinfotech.com/varanasi/local-seo-services-in-varanasi",
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
    title: "Local SEO Services in Varanasi | Rank Higher on Google Maps & Search",
    description:
      "Grow your business in Varanasi with expert local SEO services. Improve Google Maps ranking, get more calls, and attract nearby customers searching online.",
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