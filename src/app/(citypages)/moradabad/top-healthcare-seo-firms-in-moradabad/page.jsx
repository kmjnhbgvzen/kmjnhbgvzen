import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Top Healthcare SEO Firms in Moradabad: What They Do | Zentrix",
  description:
    "See what top healthcare SEO firms in Moradabad actually do in the first 90 days, and how to judge their work. Talk to Zentrix Infotech for a clear plan.",
  keywords:
    "top healthcare SEO firms in Moradabad, healthcare SEO firm Moradabad, medical SEO company Moradabad, healthcare SEO process, hospital SEO roadmap, SEO for doctors Moradabad, E-E-A-T for healthcare websites, YMYL healthcare SEO, clinic SEO Moradabad, healthcare SEO 90 day plan, local SEO for hospitals, best SEO company for clinics Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/top-healthcare-seo-firms-in-moradabad",
  },

  openGraph: {
    title: "Top Healthcare SEO Firms in Moradabad: What They Do | Zentrix",
    description:
      "See what top healthcare SEO firms in Moradabad actually do in the first 90 days, and how to judge their work. Talk to Zentrix Infotech for a clear plan.",
    url: "https://www.zentrixinfotech.com/moradabad/top-healthcare-seo-firms-in-moradabad",
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
    title: "Top Healthcare SEO Firms in Moradabad: What They Do | Zentrix",
    description:
      "See what top healthcare SEO firms in Moradabad actually do in the first 90 days, and how to judge their work. Talk to Zentrix Infotech for a clear plan.",
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