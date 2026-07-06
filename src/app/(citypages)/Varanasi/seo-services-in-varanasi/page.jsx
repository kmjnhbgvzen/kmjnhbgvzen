import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Varanasi | Zentrix Infotech – Rank Higher on Google",
  description:
    "Get more visibility and leads with expert SEO services in Varanasi. Zentrix Infotech helps hotels, exporters, institutes & local businesses rank higher and grow organically.",
  keywords:
    "SEO services in Varanasi, SEO company in Varanasi, best SEO agency Varanasi, local SEO Varanasi, SEO expert Varanasi, digital marketing Varanasi, website ranking services Varanasi, affordable SEO services Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/seo-services-in-varanasi",
  },
  openGraph: {
    title: "SEO Services in Varanasi | Zentrix Infotech – Rank Higher on Google",
    description:
      "Get more visibility and leads with expert SEO services in Varanasi. Zentrix Infotech helps hotels, exporters, institutes & local businesses rank higher and grow organically.",
    url: "https://www.zentrixinfotech.com/varanasi/seo-services-in-varanasi",
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
    title: "SEO Services in Varanasi | Zentrix Infotech – Rank Higher on Google",
    description:
      "Get more visibility and leads with expert SEO services in Varanasi. Zentrix Infotech helps hotels, exporters, institutes & local businesses rank higher and grow organically.",
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