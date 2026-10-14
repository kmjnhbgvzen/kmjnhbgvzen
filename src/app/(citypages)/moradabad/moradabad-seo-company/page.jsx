import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Moradabad SEO Company | Zentrix Infotech",
  description:
    "Zentrix Infotech is a Moradabad SEO company helping local businesses rank higher, get more calls and grow online. Explore our services, process and results.",
  keywords:
    "Moradabad SEO company, SEO company in Moradabad, SEO services Moradabad, SEO agency Moradabad, local SEO company Moradabad, best SEO company Moradabad, affordable SEO company Moradabad, SEO company near me Moradabad, website SEO Moradabad, Google Business Profile Moradabad, technical SEO Moradabad, SEO for small business Moradabad, Zentrix Infotech SEO",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-seo-company",
  },

  openGraph: {
    title: "Moradabad SEO Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad SEO company helping local businesses rank higher, get more calls and grow online. Explore our services, process and results.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-seo-company",
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
    title: "Moradabad SEO Company | Zentrix Infotech",
    description:
      "Zentrix Infotech is a Moradabad SEO company helping local businesses rank higher, get more calls and grow online. Explore our services, process and results.",
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