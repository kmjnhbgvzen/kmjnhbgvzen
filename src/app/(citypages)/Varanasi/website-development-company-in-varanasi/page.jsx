import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Varanasi | Zentrix Infotech",
  description:
    "Looking for a reliable website development company in Varanasi? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for hotels, exporters & local businesses.",
  keywords:
    "website development company in Varanasi, web design company Varanasi, website designer Varanasi, custom website development Varanasi, e-commerce website development Varanasi, hotel website design Varanasi, best web developers Varanasi, responsive website design Varanasi",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/varanasi/website-development-company-in-varanasi",
  },
  openGraph: {
    title: "Website Development Company in Varanasi | Zentrix Infotech",
    description:
      "Looking for a reliable website development company in Varanasi? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for hotels, exporters & local businesses.",
    url: "https://www.zentrixinfotech.com/varanasi/website-development-company-in-varanasi",
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
    title: "Website Development Company in Varanasi | Zentrix Infotech",
    description:
      "Looking for a reliable website development company in Varanasi? Zentrix Infotech builds fast, mobile-friendly, SEO-ready websites for hotels, exporters & local businesses.",
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